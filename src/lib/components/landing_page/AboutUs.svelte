<script>
	import { Eye, PackageSearch, Settings } from 'lucide-svelte';
	import FeatureCard from '../pre_components/FeatureCard.svelte';
	import BoxReveal from '../pre_components/BoxReveal.svelte';

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

<section class="flex h-full w-full justify-center gap-5 overflow-hidden pt-8">
	<div class="w-full max-w-[50%]">
		<BoxReveal boxColor={'#906CD5'} duration={0.5}>
			<p class="font-inter text-[3.5rem] font-bold text-light_c">
				What is <span class="text-primary-shade">Fast</span>?
			</p>
		</BoxReveal>

		<BoxReveal boxColor={'#906CD5'} duration={0.7}>
			<p class="mt-[.5rem] text-justify font-public text-[1rem] text-neutral-200">
				FAST (Foreign Affairs Service Tool) is an innovative, interactive platform designed to
				simplify and streamline access to essential services provided by the Department of Foreign
				Affairs (DFA). We serve citizens, travelers, and expatriates by offering a user-friendly,
				mobile-ready interface that makes navigating DFA services effortless.
			</p>
		</BoxReveal>
	</div>
	<div class="w-full max-w-[50%]">
		<BoxReveal boxColor={'#906CD5'} duration={0.5}>
			<p class="font-inter text-[3.5rem] font-bold text-light_c">
				What <span class="text-primary-shade">Fast</span> does?
			</p>
		</BoxReveal>

		<BoxReveal boxColor={'#906CD5'} duration={0.7}>
			<ul>
				<li>
					<p class="mt-[.5rem] text-justify font-public text-[1rem] text-neutral-200">
						<strong>Streamlines Access:</strong> FAST acts as your go-to information hub, providing real-time
						updates on DFA news, service requirements, and announcements—eliminating confusion and saving
						time.
					</p>
				</li>
				<li>
					<p class="mt-[.5rem] text-justify font-public text-[1rem] text-neutral-200">
						<strong>Enhances Efficiency:</strong> Our intuitive design empowers users to manage passport
						applications, visa processing, and consular services with ease, whether you’re a first-time
						applicant or a frequent visitor.
					</p>
				</li>
			</ul>
		</BoxReveal>
	</div>
</section>

<section
	class="mt-5 flex h-full w-full
flex-col items-center justify-center"
>
	<BoxReveal boxColor={'#906CD5'} duration={0.5}>
		<p class="font-inter text-[3.5rem] font-bold text-light_c">
			What <span class="text-primary-shade">Fast</span> offer?
		</p>
	</BoxReveal>
	<BoxReveal boxColor={'#906CD5'} duration={0.7}>
		<FeatureCard {data} />
	</BoxReveal>
</section>
