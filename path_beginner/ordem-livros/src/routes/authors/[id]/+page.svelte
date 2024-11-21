<script lang="ts">
	import { page } from '$app/stores';

	import ConteudoAutor from '../../../components/autor/ConteudoAutor.svelte';
</script>

{#if $page.data.author}
	<main>
		<ConteudoAutor author={$page.data.author} />
	</main>
{/if}
