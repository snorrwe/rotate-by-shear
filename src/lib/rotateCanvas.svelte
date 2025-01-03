<script>
	let {} = $props();
	import { createProgram } from './shaders.js';

	/**
	 * @type {HTMLCanvasElement}
	 */
	let cv;

	$effect(() => {
		const gl = cv.getContext('webgl2');
		console.assert(gl != null);
		if (!gl) {
			return;
		}

		let program = createProgram({ gl });
		console.assert(program != null);
		if (!program) {
			return;
		}

		// draw
		gl.viewport(0, 0, cv.width, cv.height);
		gl.clearColor(0, 1, 1, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);

		gl.useProgram(program.program);
		gl.drawArrays(gl.TRIANGLES, 0, 6);
	});
</script>

<canvas bind:this={cv} width="720" height="480"> </canvas>
