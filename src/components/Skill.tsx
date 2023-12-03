import { Certificate } from '@phosphor-icons/react';

type Skill = {
	text: string;
	certified?: boolean;
};
/**
 *
 * @param text Skill text
 * @param certified Is skill certified? Accepts boolean.
 * @returns Skill component
 */
export default function Skill({ text, certified }: Skill) {
	return (
		<div className='text-xl border border-slate-200 inline-block px-8 py-3 rounded-full'>
			{text}
		</div>
	);
}
