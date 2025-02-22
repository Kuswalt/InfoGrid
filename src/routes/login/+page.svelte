<script>
	import { goto, onNavigate } from '$app/navigation';
	import BlurFade from '$lib/components/pre_components/BlurFade.svelte';
	import InteractiveHover from '$lib/components/pre_components/InteractiveHover.svelte';
	import Particles from '$lib/components/pre_components/Particles.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Lock, Mail } from 'lucide-svelte';

	let input = $state({
		email: '',
		password: ''
	});
</script>

<main class="relative flex h-svh w-full flex-col items-center overflow-y-hidden bg-black px-14">
	<div class="absolute inset-0 h-auto w-full">
		<Particles />
	</div>
	<header class=" mx-auto flex w-full max-w-7xl items-center justify-between px-14 py-5">
		<BlurFade duration={0.5}>
			<div>
				<h1 class="font-inter text-3xl font-black text-primary-shade">FAST</h1>
			</div>
		</BlurFade>

		<BlurFade duration={0.5}>
			<InteractiveHover
				class="rounded-lg px-1 py-2 font-public text-sm font-semibold text-light_c-secondary"
				text="Signup"
				onclick={() => goto('/signup')}
			></InteractiveHover>
		</BlurFade>
	</header>

	<BlurFade duration={0.4} delay={0.2}>
		<div
			class="flex min-h-[calc(100vh-200px)] w-full items-center justify-center rounded-lg bg-dark_c/70 p-10 backdrop-blur-md"
		>
			<div class="flex max-w-4xl items-center">
				<div class="flex items-center justify-center py-12">
					<div class="mx-auto w-[350px] gap-6">
						<h1 class="mb-2 text-center font-inter text-3xl font-black text-light_c-secondary">
							Login
						</h1>
						<p class="mb-2 text-center text-light_c">Please log in to access your account.</p>
						<form class="grid gap-4">
							<div class="relative grid gap-2">
								<Mail
									class="pointer-events-none absolute  inset-y-2.5 left-0 flex w-7 items-center pl-3 text-light_c-secondary"
								/>
								<Input
									id="email"
									type="email"
									placeholder="email"
									required
									class="rounded-xl border-none bg-dark_c-secondary pl-8"
								/>
							</div>

							<div class="relative grid gap-2">
								<Lock
									class="pointer-events-none absolute  inset-y-2.5 left-0 flex w-7 items-center pl-3 text-light_c-secondary"
								/>
								<Input
									id="password"
									type="password"
									required
									placeholder="password"
									class="rounded-xl border-none bg-dark_c-secondary pl-8"
								/>
							</div>
							<Button
								type="submit"
								onclick={() => {
									goto('/admin/announcements');
								}}
								class="w-full rounded-2xl bg-primary px-4 py-5 font-public font-semibold text-white hover:bg-primary-hover hover:ease-in"
							>
								Login
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</BlurFade>
</main>
