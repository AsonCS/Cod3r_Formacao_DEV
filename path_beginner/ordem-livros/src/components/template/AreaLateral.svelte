<script>
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';
</script>

<aside
	class="
		border
		border-zinc-800
		p-2
		rounded-lg

		md:basis-1/4
	"
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
			<MenuItem href="/authors/j-k-rowling" text="J.K. Rowling" />
			<MenuItem href="/authors/j-r-r-tolkien" text="L.R.R. Tolkien" />
			<MenuItem href="/authors/george-r-r-martin" text="George R.R. Martin" />
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
