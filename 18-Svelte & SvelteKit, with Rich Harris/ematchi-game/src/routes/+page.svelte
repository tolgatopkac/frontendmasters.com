<script lang="ts">
	import Game from './Game.svelte';
	import '../styles.css';
	import Modal from './Modal.svelte';

	let state: 'waiting' | 'playing' | 'won' | 'lost' = 'waiting';
</script>

<Game />

{#if state !== 'playing'}
	<Modal>
		{#if state === 'waiting'}
			<p>choose a level</p>
		{/if}
	</Modal>
{/if}
