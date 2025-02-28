<script lang="ts">
	import logo from '$lib/assets/logo1.png';
	import * as Sheet from '$lib/components/ui/sheet';
	import {
		HandHelpingIcon,
		Home,
		MenuIcon,
		MessageCircleQuestion,
		Newspaper,
		Speech
	} from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';

	const menu = [
		{
			name: 'Home',
			icon: Home,
			link: '/'
		},
		{
			name: 'Services',
			icon: HandHelpingIcon,
			link: '/prolly-something/services'
		},
		{
			name: 'Announcements',
			icon: Speech,
			link: '/prolly-something/announcements'
		},
		{
			name: 'News',
			icon: Newspaper,
			link: '/prolly-something/news'
		}
	];
</script>

<Sheet.Root>
	<Sheet.Trigger class="text-white  ">
		<MenuIcon class="h-6 w-6" />
	</Sheet.Trigger>
	<Sheet.Content class="flex flex-col items-start justify-center border-none  bg-dark_c/75">
		<Sheet.Header class="flex-grow">
			<Sheet.Title class="flex items-center  gap-1 text-light_c-secondary">
				<img src={logo} alt="logo" class="h-20 w-20" />
				<h1 class="text-base font-semibold">Foreign Affairs Services Tools</h1>
			</Sheet.Title>
			<Sheet.Description>
				<ul class="flex w-full flex-col items-center justify-center gap-2">
					{#each menu as items}
						<Button
							onclick={() => goto(items.link)}
							class=" flex w-full items-center justify-start gap-2 text-wrap rounded-lg  bg-transparent text-xl font-medium text-light_c-secondary hover:bg-dark_c-secondary"
						>
							<items.icon class="group h-5 w-5" />
							{items.name}
						</Button>

						<!-- {#if }{/if} -->
					{/each}
				</ul>
			</Sheet.Description>
		</Sheet.Header>

		<Sheet.Footer class="flex w-full  items-center">
			<Button
				onclick={() => goto('/prolly-something/faqs')}
				class=" flex w-full items-center justify-start gap-2 text-wrap rounded-lg  bg-transparent text-xl font-medium text-light_c-secondary hover:bg-dark_c-secondary"
			>
				<MessageCircleQuestion class="group h-5 w-5" />
				FAQS
			</Button>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
