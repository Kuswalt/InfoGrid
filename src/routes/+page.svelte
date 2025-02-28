<script>
	import Particles from '$lib/components/pre_components/Particles.svelte';
	import HeadLine from '$lib/components/landing_page/HeadLine.svelte';
	import UserSidebar from '$lib/components/landing_page/UserSidebar.svelte';
	import LandingAnnouncements from '$lib/components/landing_page/LandingAnnouncements.svelte';
	import AboutUs from '$lib/components/landing_page/AboutUs.svelte';
	import LandingService from '$lib/components/landing_page/LandingService.svelte';
	import DotPattern from '$lib/components/pre_components/DotPattern.svelte';

	let seize = ResizeObserver;
</script>

<div class="relative flex min-h-screen w-full flex-col justify-center bg-black">
	<div class="absolute inset-0 h-auto w-full">
		<Particles />
	</div>
	<div class="fixed right-5 top-5 z-50">
		<UserSidebar />
	</div>

	<!-- Headline section -->
	<div>
		<HeadLine />
	</div>

	<!-- About us section -->
	<div class="relative min-h-full w-full bg-black p-10">
		<div class="absolute inset-0 h-full w-full">
			<Particles />
		</div>
		<div class="h-auto w-full rounded-lg bg-dark_c px-7 py-8">
			<AboutUs />
		</div>
	</div>

	<!-- Service list section -->
	<div class="relative min-h-full w-full">
		<DotPattern />
		<div class="relative min-h-full w-full p-10">
			<LandingService />
		</div>

		<!-- Announcement Section -->
		<div class="relative min-h-full w-full p-10">
			<LandingAnnouncements />
		</div>
	</div>
</div>
