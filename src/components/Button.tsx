type Button = {
	style: 'normal' | 'round';
	text?: string;
	icon?: React.ReactNode;
	buttonOnClick: () => void;
};
/**
 *
 * @param style Button style
 * @param text Button text
 * @param icon Icon component
 * @param buttonOnClick On click function
 * @returns Button component
 */
export default function Button({ style, text, icon, buttonOnClick }: Button) {
	if (style === 'normal') {
		return (
			<button
				className='bg-primary text-white flex justify-center items-center gap-3 px-8 py-3 rounded-full'
				onClick={buttonOnClick}>
				{text}
				{icon}
			</button>
		);
	} else if (style === 'round') {
		return (
			<button
				className='w-12 h-12 flex justify-center items-center border border-slate-200 rounded-full'
				onClick={buttonOnClick}>
				{icon}
			</button>
		);
	}
}
