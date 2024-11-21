<script lang="ts">
	import { page } from '$app/stores';

	import ConteudoSerie from '../../../components/serie/ConteudoSerie.svelte';
</script>

{#if $page.data.serie}
	<main>
		<ConteudoSerie serie={$page.data.serie} />
	</main>
{/if}
