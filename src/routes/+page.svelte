<script lang="ts">
	import { onMount } from 'svelte';
	import { api } from '$lib/api';
	import { apiStore } from '$lib/stores/api';
	import Particles from '$lib/components/pre_components/Particles.svelte';
	import HeadLine from '$lib/components/landing_page/HeadLine.svelte';
	import UserSidebar from '$lib/components/landing_page/UserSidebar.svelte';
	import LandingAnnouncements from '$lib/components/landing_page/LandingAnnouncements.svelte';
	import AboutUs from '$lib/components/landing_page/AboutUs.svelte';
	import LandingService from '$lib/components/landing_page/LandingService.svelte';
	import DotPattern from '$lib/components/pre_components/DotPattern.svelte';

	let seize = ResizeObserver;
	let services: any[] = [];
	let categories: any[] = [];
	let announcements: any[] = [];

	onMount(async () => {
		// Example of fetching multiple resources
		const [servicesRes, categoriesRes, announcementsRes] = await Promise.all([
			api.getServices(),
			api.getCategories(),
			api.getAnnouncements()
		]);

		if (servicesRes.data) services = servicesRes.data;
		if (categoriesRes.data) categories = categoriesRes.data;
		if (announcementsRes.data) announcements = announcementsRes.data;
	});
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

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		text-align: center;
		margin-bottom: 2rem;
	}

	section {
		margin-bottom: 3rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.card {
		background: white;
		border-radius: 8px;
		padding: 1.5rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.card h3 {
		margin: 0 0 1rem 0;
	}

	.card p {
		margin: 0;
		color: #666;
	}
</style>
