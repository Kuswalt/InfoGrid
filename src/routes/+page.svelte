<script>
	import Particles from '$lib/components/pre_components/Particles.svelte';
	import Spotlight from '$lib/components/pre_components/Spotlight.svelte';
	import Header from '$lib/components/users/Header.svelte';
	import HeadLine from '$lib/components/users/HeadLine.svelte';
</script>

<div class="relative h-screen w-full bg-black">
	<div class="absolute inset-0 h-auto w-full">
		<Particles />
	</div>
	<div class="fixed right-5 top-5 z-50">
		<Header />
	</div>

	<div>
		<HeadLine />
	</div>
</div>
