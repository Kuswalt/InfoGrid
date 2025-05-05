<script lang="ts">
	import { onMount } from 'svelte';
	import CardBodyImg from '../pre_components/CardBodyImg.svelte';
	import * as Carousel from '$lib/components/ui/carousel';
	import { api } from '$lib/api';

	let services: any[] = [];
	let loading = true;

	onMount(async () => {
		const response = await api.getServices();
		if (response.data) {
			services = response.data;
		}
		loading = false;
	});
</script>

<section class="relative flex h-auto w-full flex-col items-center justify-center">
	<h1
		class="my-6 self-center bg-opacity-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text font-inter text-6xl font-bold text-transparent md:text-5xl"
	>
		Services
	</h1>

	<Carousel.Root>
		<Carousel.Content class="h-auto w-full bg-black text-white">
			{#if loading}
				<div class="flex w-full justify-center py-8">
					<span class="text-white">Loading services...</span>
				</div>
			{:else if services.length === 0}
				<div class="flex w-full justify-center py-8">
					<span class="text-white">No services available</span>
				</div>
			{:else}
				{#each services as service, i (service.id || i)}
					<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
						<div class="group relative aspect-[4/3] overflow-hidden rounded-2xl">
							<img
								src={service.image || "https://i.pinimg.com/564x/78/43/6d/78436dfe6edfea96f451285557605d9f.jpg"}
								placeholder="blur"
								alt={service.name}
								class="m-0 w-full object-cover"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/10"
							></div>

							<slot>
								<CardBodyImg
									class="absolute inset-x-0 bottom-2 mx-2 flex flex-col justify-end rounded-2xl bg-gray-600/25 px-4 pb-2 backdrop-blur-lg sm:pb-2"
									service={service}
								/>
							</slot>
						</div>
					</Carousel.Item>
				{/each}
			{/if}
		</Carousel.Content>
	</Carousel.Root>
</section>
