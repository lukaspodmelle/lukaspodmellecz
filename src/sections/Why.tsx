import { Section, Chip } from '../components';
import { RocketLaunch, Fire } from '@phosphor-icons/react';

export default function Why() {
	return (
		<Section>
			<div className='mb-8'>
				<Chip text='Proč vám píšu' />
			</div>
			<p className='text-3xl lg:text-4xl'>
				Postupně jsem se našel více v programování a&nbsp;
				<span className='highlight'>hledám nový začátek.</span>{' '}
				<RocketLaunch weight='fill' className='inlineIcon' /> Začínal
				jsem na WordPressu a nakonec jsem se{' '}
				<span className='highlight'>zamiloval do Reactu</span>{' '}
				<Fire weight='fill' className='inlineIcon' /> a&nbsp;svobody při
				navrhování.{' '}
			</p>
		</Section>
	);
}
