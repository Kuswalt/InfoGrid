<script>
	import { cn } from '$lib/utils';

	let className = '';
	export { className as class };
	export let card = { title: 'Title', desc: 'Description' };
</script>

<div class={cn('px-2 py-0 text-left text-gray-100 sm:px-4 sm:pb-3', className)}>
	<h3 class="mb-1 mt-3 text-lg font-bold tracking-tighter">
		{card.title}
	</h3>
	<p class="text-sm leading-5">{card.desc}</p>
</div>
