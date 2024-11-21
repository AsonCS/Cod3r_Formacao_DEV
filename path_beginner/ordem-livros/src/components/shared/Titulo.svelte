<script lang="ts">
	export let principal = '';
	export let secundario = '';
</script>

<div
	class="
        flex
        flex-col
    "
>
	<h1
		class="
            font-black
            text-3xl
        "
	>
		{principal}
	</h1>
	<p
        class="
            text-sm
            text-zinc-400
        "
    >
		{secundario}
	</p>
</div>
