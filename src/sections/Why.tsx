import { Section, Chip } from '../components';
import { RocketLaunch, Fire } from '@phosphor-icons/react';

export default function Why() {
	return (
		<Section animation='reveal'>
			<div className='mb-8'>
				<Chip text='Proč vám píšu' />
			</div>
			<p className='text-3xl lg:text-4xl'>
				Postupně jsem se našel více v&nbsp;programování a&nbsp;
				<span className='highlight'>hledám nový začátek.</span>{' '}
				<RocketLaunch weight='fill' className='inlineIcon' /> Začínal
				jsem na WordPressu a&nbsp;nakonec jsem se{' '}
				<span className='highlight'>zamiloval do Reactu</span>{' '}
				a&nbsp;svobody při navrhování.{' '}
				<Fire weight='fill' className='inlineIcon' />
			</p>
		</Section>
	);
}
