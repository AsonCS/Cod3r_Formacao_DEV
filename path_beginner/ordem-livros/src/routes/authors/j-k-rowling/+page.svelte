<script>
	import ConteudoAutor from "../../../components/autor/ConteudoAutor.svelte";
	import autores from "../../../constants/autores";
</script>

<main
    class="
        md:basis-3/4
    "
>
    <ConteudoAutor author={autores.find(a => a.id === 'j-k-rowling')} />
</main>
