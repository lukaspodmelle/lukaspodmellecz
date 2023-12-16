import { Section, Chip } from '../components';
import { Lightning, BookOpen } from '@phosphor-icons/react';

export default function Epilogue() {
	return (
		<Section animation='reveal'>
			<div className='mb-8'>
				<Chip text='Závěrem' />
			</div>
			<p className='text-3xl lg:text-4xl mb-10'>
				Chtěl bych se podílet na tvorbě webových projektů, které budou{' '}
				<span className='highlight'>
					dobře vypadat, ale také bezchybně fungovat.{' '}
					<Lightning weight='fill' className='inlineIcon' />
				</span>
			</p>
			<p className='text-3xl lg:text-4xl'>
				Teď za sebou sice moc zkušeností z&nbsp;vývoje nemám, ale
				přináším <span className='highlight'>přesah do designu</span>,
				maximální zápal pro věc a&nbsp;hlavně{' '}
				<span className='highlight'>chuť se učit</span>.{' '}
				<BookOpen weight='fill' className='inlineIcon' />
			</p>
		</Section>
	);
}
