import { Spring } from '.';

type Button = {
	variant: 'normal' | 'round';
	text?: string;
	icon?: React.ReactNode;
	style?: string;
	link?: string;
	buttonOnClick?: () => void;
};
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
				<a href={link} target='_blank'>
					<button
						className={`bg-primary text-white flex justify-center items-center gap-3 px-8 py-3 rounded-full ${style}`}
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
						className={`w-12 h-12 flex justify-center items-center bg-white border border-slate-200 rounded-full ${style}`}
						onClick={buttonOnClick}>
						{icon}
					</button>
				</a>
			</Spring>
		);
	}
}
