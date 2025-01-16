<script>
	import { rounded } from '$lib';

	const { matrix } = $props();

	const n = Math.sqrt(matrix.length);
	console.log(matrix, n);
</script>

<div style="--n: {n}">
	{#each matrix as x}
		<span>
			{rounded(x)}
		</span>
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(var(--n), 1fr);
        max-width: 8em;
	}
</style>
