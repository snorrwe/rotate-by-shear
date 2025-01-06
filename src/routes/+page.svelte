<script>
	import RotateCanvas from '$lib/rotateCanvas.svelte';

	let phi = $state(45);
    let phiRads = $derived(phi * Math.PI / 180.0)
</script>

<RotateCanvas imagePath="rocket.jpg" angle={phiRads} />
<input type="number" min="0" max="360" step="5" bind:value={phi} />
<input name="angle" type="range" min="0" max="360" step="5" bind:value={phi} />
