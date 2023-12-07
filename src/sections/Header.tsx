import { motion } from 'framer-motion';
import { scrollToContent } from '../utils/scrollToContent';
import { Section, Button } from '../components';
import {
	HandWaving,
	Heart,
	RocketLaunch,
	ArrowDown,
	LinkedinLogo,
	GithubLogo,
} from '@phosphor-icons/react';

export default function Header() {
	return (
		<Section maxWidth='800px' type='header'>
			<motion.img
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				src='/images/lukaspodmelle.png'
				alt='Profilová fotka'
				className='inline-block mb-12 w-32'
			/>
			<motion.p
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2 }}
				className='text-4xl lg:text-5xl mb-8'>
				Ahoj, tady Lukáš!{' '}
				<HandWaving weight='fill' className='inlineIcon' /> Design,
				technologie, programování ={' '}
				<Heart weight='fill' className='inlineIcon' /> Občas nevím, kam
				dřív skočit a&nbsp;co dalšího se naučit.{' '}
				<RocketLaunch weight='fill' className='inlineIcon' />
			</motion.p>
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4 }}
				className='flex flex-col lg:flex-row gap-6 justify-center'>
				<Button
					variant='normal'
					text='Více o mně'
					icon={<ArrowDown />}
					buttonOnClick={() => scrollToContent('muj-pribeh')}
				/>
				<div className='flex gap-2 text-slate-800'>
					<Button
						variant='round'
						icon={<LinkedinLogo size={20} weight='fill' />}
						link={'https://www.linkedin.com/in/lukaspodmelle/'}
					/>
					<Button
						variant='round'
						icon={<GithubLogo size={20} weight='fill' />}
						link={'https://github.com/lukaspodmelle/'}
					/>
				</div>
			</motion.div>
		</Section>
	);
}
