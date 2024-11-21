<script lang="ts">
	import { IconBrandAmazon } from '@tabler/icons-svelte';

	export let book: any = null;
</script>

{#if book}
	<a
		class="
            bg-zinc-800
            flex
            flex-col
            overflow-hidden
            rounded-md
        "
		href={book.link}
		target="_blank"
	>
		<img
			alt="Imagem do livro {book.titulo}"
			class="
                object-scale-down
            "
			src={book.imagem}
		/>
		<div
			class="
                flex
                flex-1
                flex-col
                gap-2
                p-3
            "
		>
			<span
				class="
                    flex-1
                    font-bold
                    text-center
                "
			>
				{book.titulo}
			</span>
			<button
				class="
                    azul
                    botao
                "
			>
				<IconBrandAmazon size={25} />
				Link do Livro
			</button>
		</div>
	</a>
{/if}
