<script>
	import CardBodyImg from '../pre_components/CardBodyImg.svelte';
	import * as Carousel from '$lib/components/ui/carousel';
</script>

<section class="relative flex h-auto w-full flex-col items-center justify-center">
	<h1
		class="my-6 self-center bg-opacity-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text font-inter text-6xl font-bold text-transparent md:text-5xl"
	>
		Services
	</h1>

	<Carousel.Root>
		<Carousel.Content class=" h-auto w-full bg-black text-white">
			{#each Array(5) as _, i (i)}
				<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
					<div class="group relative aspect-[4/3] overflow-hidden rounded-2xl">
						<img
							src="https://i.pinimg.com/564x/78/43/6d/78436dfe6edfea96f451285557605d9f.jpg"
							placeholder="blur"
							alt="don corleone"
							class="m-0 w-full object-cover"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/10"
						></div>

						<slot>
							<CardBodyImg
								class="absolute inset-x-0 bottom-2 mx-2 flex flex-col  justify-end rounded-2xl  bg-gray-600/25 px-4 pb-2 backdrop-blur-lg sm:pb-2"
							/>
						</slot>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</section>
