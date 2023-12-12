import { Section, Chip, Arrow, Button, Socials } from '../components';
import { PaperPlaneTilt } from '@phosphor-icons/react';

export default function Contact() {
	return (
		<Section>
			<div className='flex justify-center mb-12'>
				<Arrow />
			</div>
			<div className='mb-6 sm:mb-12 text-center'>
				<Chip text='Těším se na odpověď' color='primary' />
			</div>
			<p className='hidden sm:block text-4xl lg:text-5xl font-bold mb-12 text-center'>
				<a href='mailto:ahoj@lukaspodmelle.cz '>
					ahoj@lukaspodmelle.cz
				</a>
			</p>
			<div className='mb-6 sm:hidden flex justify-center'>
				<Button
					variant='normal'
					style='text-xl px-12'
					text='Napište mi'
					icon={<PaperPlaneTilt weight='fill' />}
					link='mailto:ahoj@lukaspodmelle.cz'
				/>
			</div>
			<div className='flex justify-center gap-4'>
				<Socials />
			</div>
		</Section>
	);
}
