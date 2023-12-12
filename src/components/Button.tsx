import { Spring } from '.';

type Button = {
	variant: 'normal' | 'secondary' | 'round';
	text?: string;
	icon?: React.ReactNode;
	style?: string;
	link?: string;
	buttonOnClick?: () => void;
};

const variantNormal = `bg-primary text-white font-medium flex justify-center items-center gap-3 px-8 py-3 rounded-full`;
const variantSecondary = `bg-white border border-slate-200 font-medium flex justify-center items-center gap-3 px-8 py-3 rounded-full`;
const variantRound = `w-12 h-12 flex justify-center items-center bg-white border border-slate-200 rounded-full`;
/**
 *
 * @param variant Button style variant
 * @param text Button text
 * @param icon Icon component
 * @param link Button link
 * @param style Additional Tailwind classes
 * @param buttonOnClick On click function
 * @returns Button component
 */
export default function Button({
	variant,
	text,
	icon,
	style,
	link,
	buttonOnClick,
}: Button) {
	if (variant === 'normal') {
		return (
			<Spring scaleTo={1.05}>
				<a href={link} target='_blank' className='max-w-fit'>
					<button
						className={variantNormal + ' ' + style}
						onClick={buttonOnClick}>
						{text}
						{icon}
					</button>
				</a>
			</Spring>
		);
	} else if (variant === 'secondary') {
		return (
			<Spring scaleTo={1.05}>
				<a href={link} target='_blank' className='max-w-fit'>
					<button
						className={variantSecondary + ' ' + style}
						onClick={buttonOnClick}>
						{text}
						{icon}
					</button>
				</a>
			</Spring>
		);
	} else if (variant === 'round') {
		return (
			<Spring scaleTo={1.05}>
				<a href={link} target='_blank'>
					<button
						className={variantRound + ' ' + style}
						onClick={buttonOnClick}>
						{icon}
					</button>
				</a>
			</Spring>
		);
	}
}
