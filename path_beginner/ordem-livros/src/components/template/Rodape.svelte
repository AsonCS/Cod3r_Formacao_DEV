<script>
	function getDate() {
		const date = new Date();
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		return `${year}/${month}/${day}`;
	}
</script>

<footer
	class="
        border-t-2
        border-t-gray-900
        font-bold
        font-caveat
        p-0
        text-lg
        text-center
        text-gray-400

        sm:p-1
        sm:text-xl
        md:border-t-4
        md:text-2xl
        lg:p-1
        lg:text-3xl
    "
>
	By AsonCS &copy; {getDate()}
</footer>
