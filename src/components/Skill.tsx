import { motion } from 'framer-motion';
import { Certificate } from '@phosphor-icons/react';

type Skill = {
	text: string;
	isCertified?: boolean;
	certificateLink?: string;
	isHighlighted?: boolean;
};
/**
 *
 * @param text Skill text
 * @param isCertified Is skill certified? Accepts boolean.
 * @param isHighlighted Is skill highlighted? Accepts boolean.
 * @param certificateLink Link to certificate
 * @returns Skill component
 */
export default function Skill({
	text,
	isCertified,
	isHighlighted,
	certificateLink,
}: Skill) {
	return (
		<div
			className={`${
				isHighlighted
					? 'font-bold text-slate-800'
					: 'font-medium text-slate-600'
			} sm:text-xl border border-slate-200 inline-block px-8 py-3 rounded-full relative`}>
			{text}
			{isCertified && (
				<motion.a
					className='text-primary absolute -top-3 right-0 bg-white p-1 rounded-full'
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.1 }}
					href={certificateLink}
					target='_blank'>
					<Certificate weight='fill' size={25} />
				</motion.a>
			)}
		</div>
	);
}
