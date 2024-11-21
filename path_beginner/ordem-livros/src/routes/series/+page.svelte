<script>
	import ItemSerie from '../../components/serie/ItemSerie.svelte';
	import Titulo from '../../components/shared/Titulo.svelte';
	import series from '../../constants/series';
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
		principal="Series"
		secundario="Conheça as series que você ama!"
	/>

	<div
		class="
            gap-5
            grid
            grid-cols-1

            lg:grid-cols-2
        "
	>
		{#each series as serie}
			<ItemSerie serie={serie} />
		{/each}
	</div>
</div>
