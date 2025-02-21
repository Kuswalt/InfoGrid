<script>
	import { cn } from '$lib/utils';

	let className = '';
	export { className as class };
	let card = {
		title: 'The Godfather',
		desc: 'A man who doesn’t spend time with his family can never be a real man.'
	};
</script>

<div class={cn('px-2 py-0 text-left text-gray-100 sm:px-4 sm:pb-3', className)}>
	<h3 class="mb-1 mt-3 text-lg font-bold tracking-tighter">
		{card.title}
	</h3>
	<p class="text-sm leading-5">{card.desc}</p>
</div>
