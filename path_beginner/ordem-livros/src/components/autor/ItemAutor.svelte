<script lang="ts">
	import { AUTHORS, AUTHORS_EXT } from "../../constants/routes";

	export let author: any = null;
</script>

{#if author}
	<a
		class="
            border
            border-zinc-800
            flex
            flex-col
            overflow-hidden
            relative
            rounded-md
        "
		href="{AUTHORS}{author.id}{AUTHORS_EXT}"
	>
		<img
			alt={`Foto de ${author.nome}`}
			class="
                h-96
                object-cover
            "
			src={author.imagem}
		/>
		<div
            class="
                absolute
                bg-black/50
                bottom-0
                px-6
                py-4
                text-end
                w-full
            "
        >
            <span
                class="
                    font-black
                    text-2xl
                "
            >
                {author.nome}
            </span>
        </div>
	</a>
{/if}
