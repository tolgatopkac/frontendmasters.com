<script>
	import Grid from './Grid.svelte';
</script>

<div class="game">
	<div class="info" />
	<div class="grid-container">
		<Grid />
	</div>
	<div class="info" />
</div>

<style>
	.game {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: min(1vmin, 0.3rem);
	}

	.info {
		width: 80em;
		height: 10em;
		background: purple;
	}

	.grid-container {
		width: 80em;
		height: 80em;
		background: teal;
	}
</style>
