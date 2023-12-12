import { Section, Chip, Button } from '../components';
import {
	ArrowCircleUpRight,
	ChatsCircle,
	HandHeart,
} from '@phosphor-icons/react';

export default function CurrentWork() {
	return (
		<Section animation='reveal'>
			<div id='muj-pribeh' className='mb-8'>
				<Chip text='Co teď dělám' />
			</div>
			<p className='text-3xl lg:text-4xl'>
				Jsem Head of Conversation Design a&nbsp;Marketingový specialista
				ve&nbsp;Feedyou.{' '}
				<ChatsCircle weight='fill' className='inlineIcon' />{' '}
				<span className='highlight'>
					Tvořím téměř veškerý obsah pro web, sociální sítě nebo{' '}
					newslettery.{' '}
				</span>{' '}
				Implementoval jsem novou vizuální identitu a&nbsp;dál se
				o&nbsp;ni starám.{' '}
				<HandHeart weight='fill' className='inlineIcon' />
			</p>

			<div className='grid sm:grid-cols-3 gap-5 my-8'>
				<img
					className='rounded-md'
					src='/images/feedyou-socials.png'
					alt=''
					loading='lazy'
				/>
				<img
					className='rounded-md'
					src='/images/feedyou-visual.png'
					alt=''
					loading='lazy'
				/>
				<img
					className='rounded-md'
					src='/images/feedyou-website.png'
					alt=''
					loading='lazy'
				/>
			</div>

			<div className='flex justify-center'>
				<Button
					variant='normal'
					text='Všechny ukázky práce'
					link='https://drive.google.com/drive/folders/1rj86tDaspXDEXxXLAxqtdLd-0Zkz_Mvo?usp=sharing'
					icon={<ArrowCircleUpRight weight='fill' size={20} />}
				/>
			</div>
		</Section>
	);
}
