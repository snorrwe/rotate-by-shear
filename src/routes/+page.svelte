<script>
	import { shearXFactor, shearYFactor } from '$lib';
	import RotateCanvas from '$lib/rotateCanvas.svelte';

	import { VERTEX_SRC, FRAGMENT_SRC } from '$lib/shaders';
	import hljs from 'highlight.js/lib/core';
	import glsl from 'highlight.js/lib/languages/glsl';
	import 'highlight.js/styles/vs.css';

	let phi = $state(0);
	let phiRads = $derived((phi * Math.PI) / 180.0);
	let width = $state();
	let height = $derived(Math.floor(width / 4));

	let shearX = $derived(rounded(shearXFactor(phi)));
	let shearY = $derived(rounded(shearYFactor(phi)));

	/**
	 * output a string rounded to `decimals` number of decimal places
	 * @param {number} n
	 */
	function rounded(n, decimals = 2) {
		const denom = Math.pow(10, decimals);
		return (Math.round(n * denom) / denom).toFixed(decimals);
	}

	let vertex_src = $state();
	$effect(() => {
		hljs.registerLanguage('glsl', glsl);
		vertex_src = hljs.highlight(VERTEX_SRC, { language: 'glsl' });
	});

	let fragment_src = $state();
	$effect(() => {
		hljs.registerLanguage('glsl', glsl);
		fragment_src = hljs.highlight(FRAGMENT_SRC, { language: 'glsl' });
	});
</script>

<div class="container">
	<div class="labels" bind:clientWidth={width}>
		<p>Original</p>
		<p>Shear X by {shearX}</p>
		<p>Shear Y by {shearY}</p>
		<p>Shear X by {shearX}</p>
	</div>

	<RotateCanvas {width} {height} imagePath="rocket.jpg" angle={phiRads} />

	<div>
		<label for="angle">Angle in degress</label>
		<input name="angle" type="number" min="-90" max="90" step="5" bind:value={phi} />
		<input name="angle" type="range" min="-90" max="90" step="5" bind:value={phi} />
	</div>

	<div class="shader">
        Vertex Shader
		{#if vertex_src?.value}
			<pre><code>{@html vertex_src.value}</code></pre>
		{/if}
	</div>
	<div class="shader">
        Fragment Shader
		{#if fragment_src?.value}
			<pre><code>{@html fragment_src.value}</code></pre>
		{/if}
	</div>
</div>

<style>
	.container {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.labels {
		width: 100%;
		display: flex;
		flex-direction: row;
		columns: 4;
		justify-content: space-around;
	}

    .shader {
        margin-top: 15px;
    }
</style>
