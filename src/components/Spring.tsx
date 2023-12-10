import { motion } from 'framer-motion';

type Spring = {
	children: React.ReactNode;
	scaleTo: number;
};
/**
 *
 * @param children Animated component
 * @param scaleTo Number to scale to on transition
 * @returns Animation
 */
export default function Spring({ children, scaleTo }: Spring) {
	return (
		<motion.div
			whileHover={{ scale: scaleTo }}
			transition={{
				type: 'spring',
				stiffness: 350,
				damping: 15,
			}}
			className='max-w-fit'>
			{children}
		</motion.div>
	);
}
