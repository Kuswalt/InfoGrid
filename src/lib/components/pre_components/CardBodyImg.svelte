<script lang="ts">
	import { cn } from '$lib/utils';

	let className = '';
	export { className as class };
	
	// Default card data
	let card = {
		title: 'The Godfather',
		desc: "A man who doesn't spend time with his family can never be a real man."
	};
	
	// Accept service prop
	export let service: any = null;
	
	// Use service data if available
	$: displayTitle = service?.name || card.title;
	$: displayDesc = service?.description || card.desc;
</script>

<div class={cn('px-2 py-0 text-left text-gray-100 sm:px-4 sm:pb-3', className)}>
	<h3 class="mb-1 mt-3 text-lg font-bold tracking-tighter">
		{displayTitle}
	</h3>
	<p class="text-sm leading-5">{displayDesc}</p>
</div>
