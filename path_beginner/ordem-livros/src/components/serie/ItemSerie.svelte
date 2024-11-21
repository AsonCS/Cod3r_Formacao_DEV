<script lang="ts">
	export let serie: any = null;
</script>

{#if serie}
	<a
		class="
            border
            border-zinc-800
            flex
            flex-col
            overflow-hidden
            rounded-md
        "
		href="/series/{serie.id}"
	>
		<img
			alt="Imagem da série {serie.titulo}"
			class="
                h-96
                object-cover
                w-full
            "
			src={serie.imagem}
		/>
		<div
			class="
                flex
                flex-col
                gap-2
                p-5
            "
		>
			<span
                class="
                    font-black
                    text-2xl
                "
            >
				{serie.titulo}
			</span>
			<span
                class="
                    text-justify
                    text-sm
                    text-zinc-400
                "
            >
				{serie.descricao}
			</span>
			<button
                class="
                    azul
                    botao
                    self-end
                "
            >Leia Mais</button>
		</div>
	</a>
{/if}
