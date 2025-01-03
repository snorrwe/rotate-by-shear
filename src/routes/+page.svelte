<script>
	import RotateCanvas from '$lib/rotateCanvas.svelte';

    let phi = $state(0);
</script>

<h1>Welcome</h1>

<RotateCanvas imagePath="favicon.png" angle={phi} />
<input type="number" min="0" max="6.28" step="0.1" bind:value={phi} />

