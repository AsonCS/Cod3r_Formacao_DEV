<script lang="ts">
	import { marked } from 'marked';

	export let author: any = null;
</script>

{#if author}
	<div
		class="
            flex
            flex-col
            gap-5
        "
	>
		<img
			alt={`Foto de ${author.nome}`}
			class="
                w-full
                object-cover
                rounded-md
            "
			src={author.imagem}
		/>
		<article
            class="
                prose
                prose-invert

                lg:prose-xl
            "
        >
			{@html marked.parse(author.biografia)}
		</article>
	</div>
{/if}
