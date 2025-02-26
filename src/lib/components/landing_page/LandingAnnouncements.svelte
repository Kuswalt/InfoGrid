<script lang="ts">
	import { onMount } from 'svelte';
	import CardBodyImage from '../pre_components/CardBodyImage.svelte';
	import InteractiveHover from '../pre_components/InteractiveHover.svelte';

	let announcements = [
		{
			title: 'Dominc',
			desc: 'Hello world'
		},
		{
			title: 'Dominc',
			desc: 'Hello world'
		},
		{
			title: 'Dominc',
			desc: 'Hello world'
		},
		{
			title: 'Dominc',
			desc: 'Hello world'
		},
		{
			title: 'Dominc',
			desc: 'Hello world'
		},
		{
			title: 'Dominc',
			desc: 'Hello world'
		},
		{
			title: 'Dominc',
			desc: 'Hello world'
		},
		{
			title: 'Dominc',
			desc: 'Hello world'
		}
	];

	let hasOverflow = false;
	let isShowAll = false;

	let container: HTMLDivElement;

	onMount(() => {
		if (typeof window !== 'undefined') {
			const observer = new ResizeObserver((entries) => {
				hasOverflow =
					entries[0].contentRect.height > entries[0].target.clientHeight ||
					announcements.length >= 6;
				isShowAll = hasOverflow;
			});
			observer.observe(container);
			return () => observer.disconnect();
		}
	});
</script>

<div
	class="flex h-full min-h-svh w-full max-w-7xl flex-col p-4"
	bind:this={container}
	class:has-shadow={hasOverflow}
>
	<span
		class="my-6 self-center bg-opacity-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text font-inter text-2xl font-bold text-transparent md:text-5xl"
	>
		Announcements
	</span>

	<div
		class="mx-auto grid h-full w-full max-w-7xl grid-cols-1 justify-center justify-items-center gap-4 lg:grid-cols-3"
	>
		{#each announcements.slice(0, 6) as announcement}
			<div class="group relative aspect-[4/3] overflow-hidden rounded-xl">
				<img
					src="https://i.pinimg.com/564x/e7/e4/a2/e7e4a2bc3409fc3e18fcd2c4c0792cc2.jpg"
					placeholder="blur"
					alt="don corleone"
					class="m-0 w-full object-cover object-center"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/60 to-stone-900/5 backdrop-blur-[2px] transition-all duration-300"
				></div>
				<slot>
					<CardBodyImage
						card={{ title: announcement.title, desc: announcement.desc }}
						class="absolute inset-x-0 bottom-2 flex size-full flex-col justify-end px-4 pb-0.5 md:pb-10"
					/>
				</slot>
			</div>
		{/each}
		{#if isShowAll}
			<div class="flex w-full justify-center">
				<InteractiveHover
					class="  absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-full  border  border-[#3b3b3be6] bg-[#3b3b3be6] py-3 font-public text-sm font-semibold text-light_c-secondary hover:bg-primary-hover "
					text="View All"
				></InteractiveHover>
			</div>
		{/if}
	</div>
</div>

<style>
	.has-shadow {
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
		box-shadow: inset 0 -150px 300px -150px #3b3b3be6;
		overflow: hidden;
	}
</style>
