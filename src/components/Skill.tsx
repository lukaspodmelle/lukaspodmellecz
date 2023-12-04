import { Certificate } from '@phosphor-icons/react';

type Skill = {
	text: string;
	isCertified?: boolean;
};
/**
 *
 * @param text Skill text
 * @param isCertified Is skill certified? Accepts boolean.
 * @returns Skill component
 */
export default function Skill({ text, isCertified }: Skill) {
	return (
		<div className='text-xl border border-slate-200 inline-block px-8 py-3 rounded-full font-medium relative'>
			{text}
			{isCertified && (
				<Certificate
					weight='fill'
					className='text-primary absolute -top-2 right-0'
					size={24}
				/>
			)}
		</div>
	);
}
