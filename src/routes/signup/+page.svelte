<script>
	import { goto } from '$app/navigation';
	import BlurFade from '$lib/components/pre_components/BlurFade.svelte';
	import InteractiveHover from '$lib/components/pre_components/InteractiveHover.svelte';
	import Particles from '$lib/components/pre_components/Particles.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import dataFetch from '$lib/utils/service';
	import { Lock, Mail, UserRound } from 'lucide-svelte';

	let input = $state({
		username: '',
		email: '',
		password: ''
	});

	async function handleSignup() {
		const { username, email, password } = input;

		if (!username || !email || !password) {
			alert('Please fill in all fields');
			return;
		}

		const res = await dataFetch('auth/', 'POST', {
			username,
			email,
			password
		});

		if (!res) {
			alert('Error signing up');
			return;
		}

		return 'oke';
	}
</script>

<main class="relative flex h-svh w-full flex-col items-center overflow-y-hidden bg-black px-14">
	<div class="absolute inset-0 h-auto w-full">
		<Particles />
	</div>
	<header class=" mx-auto flex w-full max-w-7xl items-center justify-between px-14 py-5">
		<BlurFade duration={0.4}>
			<div>
				<h1 class=" font-inter text-3xl font-black text-primary-shade">FAST</h1>
			</div>
		</BlurFade>

		<BlurFade duration={0.4}>
			<InteractiveHover
				text="Login"
				class="rounded-lg px-1 py-2 font-public text-sm font-semibold text-light_c-secondary"
				onclick={() => goto('/login')}
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
							Signup
						</h1>
						<p class="mb-2 text-nowrap text-center text-light_c">
							Welcome! Sign up and explore all the features.
						</p>
						<form class="grid gap-4">
							<div class="relative grid gap-2">
								<UserRound
									class="pointer-events-none absolute inset-y-2.5 left-0 flex w-7 items-center pl-3 text-light_c-secondary "
								/>
								<Input
									id="username"
									type="username"
									placeholder="username"
									bind:value={input.username}
									required
									class="rounded-xl border-none bg-dark_c-secondary pl-8"
								/>
							</div>

							<div class="relative grid gap-2">
								<Mail
									class="pointer-events-none absolute inset-y-2.5 left-0 flex w-7 items-center pl-3 text-light_c-secondary "
								/>
								<Input
									id="email"
									type="email"
									placeholder="email"
									bind:value={input.email}
									required
									class="rounded-xl border-none bg-dark_c-secondary pl-8"
								/>
							</div>

							<div class=" relative grid gap-2">
								<Lock
									class="pointer-events-none absolute inset-y-2.5 left-0 flex w-7 items-center pl-3 text-light_c-secondary "
								/>
								<Input
									id="password"
									type="password"
									required
									bind:value={input.password}
									placeholder="password"
									class="rounded-xl border-none bg-dark_c-secondary pl-8"
								/>
							</div>
							<Button
								type="submit"
								onclick={handleSignup}
								class="w-full rounded-2xl bg-primary px-4 py-5 font-public font-semibold text-white hover:bg-primary-hover hover:ease-in"
								>Signup</Button
							>
						</form>
					</div>
				</div>
			</div>
		</div>
	</BlurFade>
</main>
