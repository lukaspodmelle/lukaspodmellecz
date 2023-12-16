import { motion } from 'framer-motion';
import { scrollToContent } from '../utils/scrollToContent';
import { Section, Button } from '../components';
import {
	HandWaving,
	ArrowCircleDown,
	LinkedinLogo,
	RocketLaunch,
	FileArrowDown,
} from '@phosphor-icons/react';

export default function Header() {
	return (
		<Section maxWidth='790px' type='header'>
			<motion.img
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				src='/images/lukaspodmelle.png'
				alt='Profilová fotka'
				className='inline-block mb-12 w-32'
				loading='lazy'
			/>
			<motion.p
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2 }}
				className='text-4xl lg:text-6xl mb-12 font-medium text-slate-800'
			>
				Ahoj, tady Lukáš!{' '}
				<HandWaving weight='fill' className='inlineIcon' /> Junior
				front-end developer, co shání práci.{' '}
				<RocketLaunch weight='fill' className='inlineIcon' />
			</motion.p>
			<motion.div
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4 }}
				className='flex flex-col lg:flex-row gap-6 justify-center'
			>
				<Button
					variant='normal'
					text='Více o mně'
					icon={<ArrowCircleDown weight='fill' size={20} />}
					buttonOnClick={() => scrollToContent('muj-pribeh')}
				/>
				<div className='flex gap-2 text-slate-800'>
					<Button
						variant='secondary'
						text='CV'
						icon={<FileArrowDown weight='fill' size={20} />}
						link='/lukas-podmelle-cv.pdf'
					/>
					<Button
						variant='round'
						icon={<LinkedinLogo size={20} weight='fill' />}
						link={'https://www.linkedin.com/in/lukaspodmelle/'}
					/>
				</div>
			</motion.div>
		</Section>
	);
}
