<script>
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';

	function toggleClick() {
		const container = document.getElementById('aside_menu-container');
		// @ts-ignore
		container.style.display = container.style.display == 'none' ? 'flex' : 'none';
	}
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
	<button
		class="
			bg-sky-600
			p-1
			rounded-lg
			self-start

			md:hidden
		"
		id="aside_menu-toggle"
		onclick={toggleClick}
	>
		Toggle
	</button>
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
			<MenuItem text="J.K. Rowling" />
			<MenuItem text="L.R.R. Tolkien" />
			<MenuItem text="George R.R. Martin" />
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
