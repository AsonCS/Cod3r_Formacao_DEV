<script>
	import ItemSerie from '../components/serie/ItemSerie.svelte';
import series from '../constants/series';
</script>

<main
	class="
		flex
		flex-col
		gap-5
	"
>
	{#each series as serie}
		<ItemSerie serie={serie} />
	{/each}
</main>
