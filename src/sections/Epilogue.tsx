import { Section, Chip } from '../components';
import { Lightning, BookOpen, SmileyWink } from '@phosphor-icons/react';

export default function Epilogue() {
	return (
		<Section>
			<div className='mb-8'>
				<Chip text='Závěrem' />
			</div>
			<p className='text-3xl lg:text-4xl'>
				Chtěl bych se podílet na tvorbě skvělých webových projektů.
				Takových, které budou{' '}
				<span className='highlight'>
					dobře vypadat, ale také bezchybně fungovat.{' '}
				</span>
				<Lightning weight='fill' className='inlineIcon' /> Teď za sebou
				sice moc zkušeností z&nbsp;vývoje nemám, ale přináším{' '}
				<span className='highlight'>přesah do designu</span>, maximální
				zápal pro věc a&nbsp;hlavně{' '}
				<span className='highlight'>chuť se stále učit</span>.{' '}
				<BookOpen weight='fill' className='inlineIcon' /> Mohli bychom
				si rozumět? <SmileyWink weight='fill' className='inlineIcon' />
			</p>
		</Section>
	);
}
