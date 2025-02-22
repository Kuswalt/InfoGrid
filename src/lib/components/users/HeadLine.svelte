<script>
	import BlurFade from '../pre_components/BlurFade.svelte';
	import BlurIn from '../pre_components/BlurIn.svelte';
	import ButtonMagnetic from '../pre_components/ButtonMagnetic.svelte';
	import InteractiveHover from '../pre_components/InteractiveHover.svelte';
	import Spotlight from '../pre_components/Spotlight.svelte';
</script>

<section
	class="bg-grid-white/[0.02] relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center"
>
	<Spotlight class="-top-40 left-0 md:-top-8 md:left-40" fill="white" />
	<div class=" relative z-10 mx-auto w-full max-w-7xl p-4">
		<BlurIn
			class="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-inter text-4xl font-bold text-transparent md:text-7xl"
			word="Explore DFA "
		/>
		<BlurIn
			class="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-inter text-4xl font-bold text-transparent md:text-7xl"
			word="Services Effortlessly"
		/>

		<BlurIn
			word="Your Interactive Guide to the Department of Foreign Affairs."
			class="mx-auto mt-3 max-w-lg text-center font-public text-base font-normal text-neutral-300"
		/>
		<BlurIn
			word="Find essential information, locate offices, and navigate DFA services with ease."
			class="mx-auto  max-w-lg text-center font-public text-base font-normal text-neutral-300"
		/>

		<BlurFade duration={0.5}>
			<div class="mt-4 flex items-center justify-center gap-3">
				<InteractiveHover
					text="Explore"
					class="min-w-fit rounded-xl border-none bg-primary py-3 font-public text-sm font-semibold text-light_c-secondary hover:bg-primary-hover"
				></InteractiveHover>
				<ButtonMagnetic
					class="min-w-fit rounded-xl bg-dark_c-secondary py-3 font-public text-sm font-semibold text-light_c-secondary"
					>Services</ButtonMagnetic
				>
			</div>
		</BlurFade>
	</div>
</section>
