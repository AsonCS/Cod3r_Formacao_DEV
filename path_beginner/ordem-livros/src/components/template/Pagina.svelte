<script>
	import AreaLateral from './AreaLateral.svelte';
	import Cabecalho from './Cabecalho.svelte';
	import Rodape from './Rodape.svelte';
</script>

<div
	class="
    bg-black
    font-sour-gummy
    flex
    flex-col
    min-h-screen
    text-white
"
>
	<Cabecalho />
	<div
		class="
            flex
            flex-col
            gap-2
            grow
            mx-auto
            max-w-screen-lg
            px-8
            w-screen

            md:flex-row-reverse
        "
	>
		<div
			class="
                md:basis-1/4
            "
		>
			<AreaLateral />
		</div>
		<div
			class="
                md:basis-3/4
            "
		>
			<slot />
		</div>
	</div>
	<Rodape />
</div>
