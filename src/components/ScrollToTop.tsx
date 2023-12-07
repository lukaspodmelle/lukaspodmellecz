import { useState, useEffect } from 'react';
import { ArrowUp } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrollThreshold = 1500;
		const currentScrollPos = window.scrollY;
		setIsVisible(currentScrollPos > scrollThreshold);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0, opacity: 0 }}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: 'spring', stiffness: 400, damping: 15 }}
					onClick={scrollToTop}
					className={`fixed bottom-6 right-6 bg-white border border-slate-200 p-4 rounded-full text-slate-800 hover:bg-accent transition-colors duration-150`}>
					<ArrowUp weight='bold' />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
