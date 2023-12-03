type Chip = {
	text: string;
};
/**
 *
 * @param text Chip text
 * @returns Chip component
 */
export default function Chip({ text }: Chip) {
	return (
		<div className='bg-slate-100 text-slate-500 uppercase tracking-[.3rem] inline-block px-6 py-2 rounded-full'>
			{text}
		</div>
	);
}
