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
		<AreaLateral />
		<slot />
	</div>
	<Rodape />
</div>
