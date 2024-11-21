<script>
	export let href = '#';
	export let target = '_self';
	export let text = '';
</script>

<li>
	<a
		class="
            cursor-pointer
            flex
            gap-2
            items-center
            px-4
            py-2
            text-white/70

            hover:bg-white/10
            hover:rounded-xl
            hover:text-white
            hover:underline
        "
		{href}
		{target}
	>
		<slot />
		<span>
			{text}
		</span>
	</a>
</li>
