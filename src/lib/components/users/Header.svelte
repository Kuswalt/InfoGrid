<script>
	import logo from '$lib/assets/logo1.png';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Home, MenuIcon } from 'lucide-svelte';

	const menu = [
		{
			name: 'Home',
			icon: Home,
			link: '/'
		}
	];
</script>

<Sheet.Root>
	<Sheet.Trigger class="text-white  ">
		<MenuIcon class="h-6 w-6" />
	</Sheet.Trigger>
	<Sheet.Content class="border-none bg-dark_c/75">
		<Sheet.Header>
			<Sheet.Title class="flex items-center  gap-1 text-light_c-secondary">
				<img src={logo} alt="logo" class="h-20 w-20" />
				<h1 class="text-base font-semibold">Foreign Affairs Services Tools</h1>
			</Sheet.Title>
			<Sheet.Description>
				<ul>
					{#each menu as items}
						<div
							class="group flex w-full items-center gap-2 text-light_c-secondary hover:underline"
						>
							<items.icon class="h-6 w-6" />
							<a class="font-semibold" href={items.link}>{items.name}</a>
						</div>
					{/each}
				</ul>
			</Sheet.Description>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>

<!-- <header class=" top-0 z-50 mx-auto max-w-screen-lg rounded-lg bg-dark_c/75 backdrop-blur-md">
	<div
		class="mx-auto flex max-w-7xl items-center justify-between px-10 py-1 text-light_c-secondary"
	>
		<img class="h-20" src={logo} alt="logo" />

		<nav class="hidden items-center justify-center gap-10 lg:flex">
			<a href="/" class="text-slate text-sm font-semibold transition-colors hover:text-light_c">
				Home
			</a>
			<a
				href="#about"
				class="text-slate text-sm font-semibold transition-colors hover:text-light_c"
			>
				About
			</a>
			<a
				href="#features"
				class="text-slate text-sm font-semibold transition-colors hover:text-light_c"
			>
				Services
			</a>
		</nav>

		<div class="flex items-center lg:hidden">
			<button
				class="text-teal hover:bg-slate/5 rounded-lg p-2 transition-colors"
				aria-label="Toggle menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="#495F76"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
	</div>

	
</header> -->
