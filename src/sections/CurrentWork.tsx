import { Section, Chip } from '../components';
import { Chats, Sunglasses } from '@phosphor-icons/react';

export default function CurrentWork() {
	return (
		<Section>
			<div id='muj-pribeh' className='mb-8'>
				<Chip text='Co teď dělám' />
			</div>
			<p className='text-3xl lg:text-4xl'>
				Head of Conversation Design a&nbsp;částečně Marketingový
				specialista v&nbsp;Pardubickém Feedyou.{' '}
				<Chats weight='fill' className='inlineIcon' /> Mám na starost
				realizaci téměř veškerého obsahu.{' '}
				<span className='text-primary'>Web</span>,{' '}
				<span className='text-primary'>sociální sítě</span> nebo{' '}
				<span className='text-primary'>newslettery</span>. Implementoval
				jsem novou{' '}
				<span className='text-primary'>vizuální identitu</span>{' '}
				a&nbsp;dál se o&nbsp;ni starám.{' '}
				<Sunglasses weight='fill' className='inlineIcon' />
			</p>
			<div className='grid sm:grid-cols-3 gap-5 mt-8'>
				<img
					className='rounded-md'
					src='/images/feedyou-socials.png'
					alt=''
				/>
				<img
					className='rounded-md'
					src='/images/feedyou-visual.png'
					alt=''
				/>
				<img
					className='rounded-md'
					src='/images/feedyou-website.png'
					alt=''
				/>
			</div>
		</Section>
	);
}
