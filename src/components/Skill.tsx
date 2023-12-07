import { motion } from 'framer-motion';
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
