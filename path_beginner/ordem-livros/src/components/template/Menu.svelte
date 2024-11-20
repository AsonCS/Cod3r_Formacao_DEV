<script>
	// @ts-nocheck

	export let titulo = 'Menu';

	function onclick(titulo) {
		const arrow = document.getElementById(`arrow-${titulo}`);
		const container = document.getElementById(`container-${titulo}`);
		if (container.classList.contains('hidden')) {
			container.classList.remove('hidden');
			container.classList.add('flex');
			arrow?.classList.remove('rotate-0');
			arrow?.classList.add('rotate-180');
		} else {
			container.classList.remove('flex');
			container.classList.add('hidden');
			arrow.classList.remove('rotate-180');
			arrow.classList.add('rotate-0');
		}
	}
</script>

<div
	class="
        flex
        flex-col
        gap-3
    "
>
	<button
		class="
            text-start
        "
		onclick={() => onclick(titulo)}
	>
		<span
			class="
                font-bold
                text-sm
                text-white/50
            "
		>
			{titulo}
		</span>
		<span
			class="
				inline-block

				md:hidden
				"
			id={`arrow-${titulo}`}
		>
			🔽
		</span>
	</button>
	<ul
		class="
            hidden
            flex-col

            md:flex
        "
		id={`container-${titulo}`}
	>
		<slot />
	</ul>
</div>
