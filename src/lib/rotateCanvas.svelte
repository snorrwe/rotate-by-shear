<script>
	const { imagePath, angle } = $props();
	import { createProgram } from './shaders.js';
	import { appState } from './state.svelte.js';
	import { createTexture } from './texture.js';

	/**
	 * @type {HTMLCanvasElement}
	 */
	let cv;

	/**
	 * @param {number} phi: rotation angle in radians
	 */
	function makeMat(phi) {
		phi = phi || 0;
		const th = Math.tan(phi / 2);
		const s = Math.tan(phi);

		return new Float32Array([1 - th * s, th * th * s - 2 * th, s, 1 + s * -th]);
	}

	$effect(() => {
		const gl = cv.getContext('webgl2');
		console.assert(gl != null);
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

	$effect(() => {
		const gl = appState.gl;
		if (!gl) return;
		// draw
		gl.viewport(0, 0, cv.width, cv.height);
		gl.clearColor(0, 1, 1, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);

		if (appState.texture != null) {
			gl.activeTexture(gl.TEXTURE0 + 0);
			gl.useProgram(appState.program.program);
			gl.bindTexture(gl.TEXTURE_2D, appState.texture);
			gl.uniformMatrix2fv(appState.program.transformLocation, false, makeMat(angle));
			gl.drawArrays(gl.TRIANGLES, 0, 6);
		}
	});
</script>

<canvas bind:this={cv} width="720" height="480"> </canvas>
