<script>
	export let titulo = 'Menu';
</script>

<div
    class="
        flex
        flex-col
        gap-3
    "
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
	<ul
        class="
            flex
            flex-col
        "
    >
		<slot />
	</ul>
</div>
