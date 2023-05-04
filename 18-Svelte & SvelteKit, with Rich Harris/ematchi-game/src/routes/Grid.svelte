<script lang="ts">
	import Square from './Square.svelte';
	export let grid: string[];

	let a = -1;
	let b = -1;
</script>

<div class="grid">
	{#each grid as emoji, i}
		<Square
			{emoji}
			on:click={() => {
				if (a === -1 && b === -1) {
					a = i;
				} else if (b === -1) {
					b = i;
					if (grid[a] === grid[b]) {
						// correct
					} else {
						// incorrect
					}
				} else {
					b = -1;
					a = i;
				}
			}}
			selected={a === i || b === i}
		/>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-gap: 0.5em;
		height: 100%;
	}
</style>
