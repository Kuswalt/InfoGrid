<script>
	import { Eye, PackageSearch, Settings } from 'lucide-svelte';
	import FeatureCard from '../pre_components/FeatureCard.svelte';

	let data = [
		{
			id: 1,
			title: 'Streamlined Access to DFA Services',
			content:
				'Explore FAST’s intuitive platform to effortlessly access essential Department of Foreign Affairs (DFA) services, saving time and eliminating confusion with real-time updates on office locations and service requirements.',
			image: 'https://i.pinimg.com/736x/ca/aa/49/caaa49d386d84f2d037d0abcc919778f.jpg',
			icon: PackageSearch
		},
		{
			id: 2,
			title: 'Real-Time Service Updates',
			content:
				'Stay informed with FAST’s real-time notifications on DFA service changes, processing times, and announcements, ensuring you’re always up-to-date and ready to act.',
			image: 'https://i.pinimg.com/736x/a5/dc/0a/a5dc0af50d185b7f9111949b17e17e1a.jpg',
			icon: Settings
		},
		{
			id: 3,
			title: 'User-Friendly Interface',
			content:
				'Experience a clean, mobile-ready interface that simplifies passport applications, visa processing, and consular services, making navigation hassle-free for first-time users and returning visitors alike.',
			image: 'https://i.pinimg.com/736x/b1/b9/c2/b1b9c230143fb0d8540eabe5b74adf27.jpg',
			icon: Eye
		}
	];
</script>

<div></div>

<FeatureCard {data} />
