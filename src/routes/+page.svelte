<script>
	import RotateCanvas from '$lib/rotateCanvas.svelte';

	let phi = $state(45);
    let phiRads = $derived(phi * Math.PI / 180.0)
</script>

<h1>Welcome</h1>

<RotateCanvas imagePath="favicon.png" angle={phiRads} />
<input type="number" min="0" max="360" step="5" bind:value={phi} />
<input name="angle" type="range" min="0" max="360" step="5" bind:value={phi} />
