import { Section, Chip } from '../components';
import { ThumbsDown, Fire, Code } from '@phosphor-icons/react';

export default function Why() {
	return (
		<Section>
			<div className='mb-8'>
				<Chip text='Proč vám píšu' />
			</div>
			<p className='text-3xl lg:text-4xl'>
				Protože jsem se postupem času našel více v programování
				a&nbsp;hledám nový začátek.{' '}
				<Code weight='fill' className='inlineIcon' /> Začal jsem stavbou
				webů na WordPressu, úpravami a&nbsp;tvorbou šablon, ale to mě
				moc nechytlo.{' '}
				<ThumbsDown weight='fill' className='inlineIcon' /> Naopak jsem
				se zamiloval do Reactu a&nbsp;svobody při navrhování.{' '}
				<Fire weight='fill' className='inlineIcon' />
			</p>
		</Section>
	);
}
