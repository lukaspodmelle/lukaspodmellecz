import { ArrowDown } from '@phosphor-icons/react';

type Button = {
	text: string;
};
/**
 *
 * @param text Button text
 * @returns Button component
 */
export default function Button({ text }: Button) {
	return (
		<button className='bg-primary text-white flex justify-center items-center gap-3 px-8 py-3 rounded-full'>
			{text}
			<ArrowDown />
		</button>
	);
}
