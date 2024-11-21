<script>
	import ItemAutor from '../../components/autor/ItemAutor.svelte';
	import Titulo from '../../components/shared/Titulo.svelte';
	import autores from '../../constants/autores';
</script>

<div
	class="
        border
		border-zinc-800
        flex
        flex-col
        gap-5
        mb-4
		p-2
		rounded-lg
    "
>
	<Titulo
		principal="Autores"
		secundario="Conheça od autores que escrevem as histórias que você ama!"
	/>

	<div
		class="
            gap-5
            grid
            grid-cols-1

            lg:grid-cols-2
        "
	>
		{#each autores as autor}
			<ItemAutor author={autor} />
		{/each}
	</div>
</div>
