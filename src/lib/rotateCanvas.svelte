<script>
	import { shearX, shearY } from '$lib';
	const { imagePath, angle, width, height } = $props();
	import { createProgram } from './shaders.js';
	import { appState } from './state.svelte.js';
	import { createTexture, wrap } from './texture.js';

	/**
	 * @type {HTMLCanvasElement}
	 */
	let cv;

	$effect(() => {
		const gl = cv.getContext('webgl2');
		console.assert(gl != null);
		console.assert(width && height); // trigger on resize
		appState.gl = gl;
		if (!gl) {
			return;
		}

		let program = createProgram({ gl });
		console.assert(program != null);
		if (!program) {
			return;
		}
		appState.program = program;
	});

	$effect(() => {
		if (!appState.gl) return;
		createTexture({ gl: appState.gl, url: imagePath }).then((tx) => {
			appState.texture = tx;
		});
	});

	/**
	 * @param {WebGL2RenderingContext} gl
	 * @param {Float32Array} mat
	 * @param {WebGLTexture } texture
	 */
	function render(gl, mat, texture, flip = false) {
		gl.useProgram(appState.program.program);
		gl.activeTexture(gl.TEXTURE0 + 0);
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.uniformMatrix2fv(appState.program.transformLocation, false, mat);
		gl.uniform1f(appState.program.flipLocation, flip ? -1 : 1);
		gl.drawArrays(gl.TRIANGLES, 0, 3);
	}

	/**
	 * @param {WebGL2RenderingContext} gl
	 */
	function createBufferTexture(gl) {
		const targetTextureWidth = gl.canvas.width;
		const targetTextureHeight = gl.canvas.height;
		const targetTexture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, targetTexture);

		// define size and format of level 0
		const level = 0;
		const internalFormat = gl.RGBA;
		const border = 0;
		const format = gl.RGBA;
		const type = gl.UNSIGNED_BYTE;
		const data = null;
		gl.texImage2D(
			gl.TEXTURE_2D,
			level,
			internalFormat,
			targetTextureWidth,
			targetTextureHeight,
			border,
			format,
			type,
			data
		);

		// set the filtering so we don't need mips
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap(gl));
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap(gl));

		return targetTexture;
	}

	$effect(() => {
		const gl = appState.gl;
		if (!gl) return;
		// draw
		gl.viewport(0, 0, cv.width, cv.height);
		gl.clearColor(0, 1, 1, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);

		if (appState.texture != null) {
			let shear1 = createBufferTexture(gl);
			let shear2 = createBufferTexture(gl);
			let shear3 = createBufferTexture(gl);
			if (!shear1 || !shear2 || !shear3) {
				console.error('Failed to create backbuffers');
				return;
			}
			let fb = gl.createFramebuffer();

			const identity = new Float32Array([1, 0, 0, 1]);
			const shX = shearX(angle);
			const shY = shearY(angle);

			gl.bindFramebuffer(gl.FRAMEBUFFER, fb);

			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, shear1, 0);
			render(gl, shX, appState.texture);
			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, shear2, 0);
			render(gl, shY, shear1);
			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, shear3, 0);
			render(gl, shX, shear2);

			gl.bindFramebuffer(gl.FRAMEBUFFER, null);
			let w = gl.canvas.width / 4;
			[appState.texture, shear1, shear2, shear3].forEach((texture, i) => {
				gl.viewport(i * w, 0, w, gl.canvas.height);
				render(gl, identity, texture, i % 2 == 1);
			});

			gl.deleteTexture(shear1);
			gl.deleteTexture(shear2);
			gl.deleteTexture(shear3);
			gl.deleteFramebuffer(fb);
		}
	});
</script>

<canvas style="width={width}; height={height}" bind:this={cv} {width} {height}> </canvas>
