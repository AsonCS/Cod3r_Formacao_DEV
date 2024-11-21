<script lang="ts">
	import ItemLivro from './ItemLivro.svelte';

	export let serie: any = null;
</script>

{#if serie}
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
		<div
			class="
                flex
                flex-col
            "
		>
			<h1
				class="
                    font-black
                    text-3xl
                "
			>
				{serie.titulo}
			</h1>
			<a
				class="
                    text-sm
                    text-zinc-400
                "
				href="/authors/{serie.autor.id}"
			>
				{serie.autor.nome}
			</a>
		</div>
		<img
			alt={`Imagem da série ${serie.titulo}`}
			class="
                    h-48
                    object-cover

                    md:h-72
                    lg:h-96
                "
			src={serie.imagem}
		/>
		<p
			class="
                text-justify
                text-lg
                text-zinc-400
            "
		>
			{serie.descricao}
		</p>

		<h2>Lista de Livros</h2>

		<div
			class="
                gap-5
                grid
                grid-cols-1

                md:grid-cols-2
                lg:grid-cols-3
            "
		>
			{#each serie.livros as book}
				<ItemLivro {book} />
			{/each}
		</div>
	</div>
{/if}
