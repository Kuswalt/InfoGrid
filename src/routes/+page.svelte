<script>
	import Particles from '$lib/components/pre_components/Particles.svelte';
	import HeadLine from '$lib/components/landing_page/HeadLine.svelte';
	import UserSidebar from '$lib/components/landing_page/UserSidebar.svelte';
	import LandingAnnouncements from '$lib/components/landing_page/LandingAnnouncements.svelte';

	let seize = ResizeObserver;
</script>

<div class="relative min-h-screen w-full bg-black">
	<div class="absolute inset-0 h-auto w-full">
		<Particles />
	</div>
	<div class="fixed right-5 top-5 z-50">
		<UserSidebar />
	</div>

	<div>
		<HeadLine />
	</div>
	<div class="relative min-h-full w-full bg-black p-10">
		<div class="absolute inset-0 h-full w-full">
			<Particles />
		</div>
		<div class="h-auto w-full">
			<LandingAnnouncements />
		</div>

		<!-- another div for another component -->
	</div>
</div>
