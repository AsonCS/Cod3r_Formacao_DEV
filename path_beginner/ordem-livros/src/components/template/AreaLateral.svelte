<script lang="ts">
	import autores from '../../constants/autores';
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';

	const topAuthors: any[] = [];
	while (topAuthors.length < 5) {
		const idx = Math.floor(Math.random() * 10);
		if (!topAuthors.find((a) => a.id === autores[idx].id)) {
			topAuthors.push(autores[idx]);
		}
	}
</script>

<aside
	class={`
		border
		border-zinc-800
		p-2
		rounded-lg
	`}
	id="aside_menu"
>
	<div
		class="
			flex
			flex-col
			gap-4
		"
		id="aside_menu-container"
	>
		<Menu titulo="Navegação">
			<MenuItem href="/" text="Início" />
			<MenuItem text="Personagens" />
			<MenuItem href="/authors" text="Autores" />
			<MenuItem text="Séries" />
		</Menu>

		<Menu titulo="Principais Autores">
			{#each topAuthors as author}
				<MenuItem href={`/authors/${author.id}`} text={author.nome} />
			{/each}
		</Menu>

		<Menu titulo="Outras Categorias">
			<MenuItem text="Últimas Notícias" />
			<MenuItem text="Séries Populares" />
			<MenuItem href="https://www.facebook.com/" target="_blank" text="Facebook" />
			<MenuItem href="https://www.instagram.com/" target="_blank" text="Instagram" />
			<MenuItem href="https://www.youtube.com/" target="_blank" text="YouTube" />
		</Menu>
	</div>
</aside>
