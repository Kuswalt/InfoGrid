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
