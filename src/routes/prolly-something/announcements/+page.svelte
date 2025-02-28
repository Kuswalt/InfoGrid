<script>
	import { Calendar, TextSearch, ReceiptText, CodeXml } from 'lucide-svelte';
	import BentoCard from '$lib/components/pre_components/BentoCard.svelte';
	import BentoGrid from '$lib/components/pre_components/BentoGrid.svelte';
	import CardBodyImg from '$lib/components/pre_components/CardBodyImg.svelte';

	const features = [
		{
			name: 'Save your files',
			description: 'We automatically save your files as you type.',
			href: '/:id',
			cta: 'Learn more',
			background:
				'https://img.freepik.com/free-photo/vertical-shot-leopard-its-habitat-safari-okavanga-delta-botswana_181624-56588.jpg?ga=GA1.1.1651093152.1740122707',
			class: 'col-span-3 lg:col-span-1'
		},
		{
			name: 'Full text search',
			description: 'Search through all your files in one place.',
			href: '/',
			cta: 'Learn more',
			background:
				'https://images.ctfassets.net/fgtxcfpuxq93/3YDUTMhjE1wgiIHZDBC5gD/94e5eb8c77c636d42f1c627aa945a56b/unnamed__10_.webp',
			class: 'col-span-3 lg:col-span-2'
		},
		{
			name: 'Code Editor',
			description: 'Coding is fun with Editors',
			href: '/',
			cta: 'Edit More',
			background:
				'https://images.ctfassets.net/fgtxcfpuxq93/3YDUTMhjE1wgiIHZDBC5gD/94e5eb8c77c636d42f1c627aa945a56b/unnamed__10_.webp',
			class: 'col-span-3 lg:col-span-2'
		},
		{
			name: 'Calendar',
			description: 'Use the calendar to filter your files by date.',
			href: '/',
			cta: 'Learn more',
			background:
				'https://images.ctfassets.net/fgtxcfpuxq93/1GA7HJUj0iHi5tNSF6wjpO/fed1cc6c85da4982316337c399d41df0/unnamed__11_.webp',
			class: 'col-span-3 lg:col-span-1'
		}
	];
</script>

<div class="flex items-center justify-center p-20">
	<BentoGrid>
		{#each features as item}
			<BentoCard {...item} />
		{/each}
	</BentoGrid>
</div>
