<script>
	import RotateCanvas from '$lib/rotateCanvas.svelte';

	let phi = $state(0);
	let phiRads = $derived((phi * Math.PI) / 180.0);
	let width = $state();
	let height = $derived(Math.floor((width / 16) * 5));

	/**
	 * output a string rounded to `decimals` number of decimal places
	 * @param {number} n
	 */
	function rounded(n, decimals = 2) {
		const denom = Math.pow(10, decimals);
		return (Math.round(n * denom) / denom).toFixed(decimals);
	}
</script>

<div class="container">
	<div class="labels" bind:clientWidth={width}>
		<p>Original</p>
		<p>Shear X by {rounded(Math.tan(phi / 2))}</p>
		<p>Shear Y by {rounded(Math.sin(phi))}</p>
		<p>Shear X by {rounded(Math.tan(phi / 2))}</p>
	</div>

    <RotateCanvas {width} {height} imagePath="rocket.jpg" angle={phiRads} />

	<div>
		<label for="angle">Angle in degress</label>
		<input name="angle" type="number" min="-90" max="90" step="5" bind:value={phi} />
		<input name="angle" type="range" min="-90" max="90" step="5" bind:value={phi} />
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
</style>
