<script lang="ts">
	import {
		IconBooks,
		IconBrandFacebook,
		IconBrandInstagram,
		IconBrandYoutube,
		IconFriends,
		IconHome,
		IconRss,
		IconSquare,
		IconSquare0,
		IconSquare1,
		IconSquareF0,
		IconUsers
	} from '@tabler/icons-svelte';

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
			<MenuItem href="/" text="Início">
				<IconHome size={20} />
			</MenuItem>
			<MenuItem text="Personagens">
				<IconFriends size={20} />
			</MenuItem>
			<MenuItem href="/authors" text="Autores">
				<IconUsers size={20} />
			</MenuItem>
			<MenuItem href="/series" text="Séries">
				<IconBooks size={20} />
			</MenuItem>
		</Menu>

		<Menu titulo="Principais Autores">
			{#each topAuthors as author, idx}
				<MenuItem href={`/authors/${author.id}`} text={author.nome}>
					<span
						class="
							border-b-2
							border-white
							rounded-md
							text-white
						"
					>
						{idx + 1}º
					</span>
				</MenuItem>
			{/each}
		</Menu>

		<Menu titulo="Outras Categorias">
			<MenuItem text="Últimas Notícias">
				<IconRss size={20} />
			</MenuItem>
			<MenuItem text="Séries Populares">
				<IconBooks size={20} />
			</MenuItem>
			<MenuItem href="https://www.facebook.com/" target="_blank" text="Facebook">
				<IconBrandFacebook size={20} />
			</MenuItem>
			<MenuItem href="https://www.instagram.com/" target="_blank" text="Instagram">
				<IconBrandInstagram size={20} />
			</MenuItem>
			<MenuItem href="https://www.youtube.com/" target="_blank" text="YouTube">
				<IconBrandYoutube size={20} />
			</MenuItem>
		</Menu>
	</div>
</aside>
