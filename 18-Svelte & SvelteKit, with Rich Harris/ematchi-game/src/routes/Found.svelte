<script lang="ts">
	import { receive } from './transitions';
	import { get_twemoji_url } from './utils';

	export let found: string[] = [];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<div class="pair">
			<img in:receive={{ key: `${emoji}:a` }} src={get_twemoji_url(emoji)} alt={emoji} />
			<img in:receive={{ key: `${emoji}:b` }} src={get_twemoji_url(emoji)} alt={emoji} />
		</div>
	{/each}
</div>

<style>
	.found {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5em;
		height: 100%;
	}
	.pair {
		width: 4em;
		height: 4em;
	}
	img {
		position: absolute;
		left: 0;
		top: 0;
		width: 4em;
		height: 4em;
	}
</style>
