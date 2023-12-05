type Chip = {
	text: string;
	color?: 'primary';
};
/**
 *
 * @param text Chip text
 * @returns Chip component
 */
export default function Chip({ text, color }: Chip) {
	if (color === 'primary') {
		return (
			<div className='text-slate-500 sm:bg-primary sm:text-white uppercase tracking-[.3rem] inline-block px-6 py-2 rounded-full'>
				<h2>{text}</h2>
			</div>
		);
	}
	return (
		<div className='bg-slate-100 text-slate-500 uppercase tracking-[.3rem] inline-block px-6 py-2 rounded-full'>
			<h2>{text}</h2>
		</div>
	);
}
