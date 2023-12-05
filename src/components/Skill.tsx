import { Certificate } from '@phosphor-icons/react';

type Skill = {
	text: string;
	isCertified?: boolean;
	certificateLink?: string;
};
/**
 *
 * @param text Skill text
 * @param isCertified Is skill certified? Accepts boolean.
 * @returns Skill component
 */
export default function Skill({ text, isCertified, certificateLink }: Skill) {
	return (
		<div className='sm:text-xl border border-slate-200 inline-block px-8 py-3 rounded-full font-medium relative'>
			{text}
			{isCertified && (
				<a href={certificateLink} target='_blank'>
					<Certificate
						weight='fill'
						className='text-primary absolute -top-3 right-0 bg-white p-1 rounded-full'
						size={32}
					/>
				</a>
			)}
		</div>
	);
}
