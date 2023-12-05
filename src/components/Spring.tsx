import { motion } from 'framer-motion';

type Spring = {
	children: React.ReactNode;
	scaleTo: number;
};

export default function Spring({ children, scaleTo }: Spring) {
	return (
		<motion.div
			whileHover={{ scale: scaleTo }}
			transition={{
				type: 'spring',
				stiffness: 350,
				damping: 15,
			}}>
			{children}
		</motion.div>
	);
}
