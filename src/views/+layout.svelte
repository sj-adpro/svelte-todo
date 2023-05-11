<script>
	// @ts-nocheck
	export const prerender = true;
	export const ssr = false;
</script>

<main class="container-fluid">
	<slot />
</main>

<style>
	@import "$lib/styles/pico.min.css";
	@import "$lib/styles/transitions.css";

	main {
		overflow-x: hidden;
	}
</style>
