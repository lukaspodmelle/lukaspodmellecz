import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

type Section = {
	children: React.ReactNode;
	maxWidth?: string;
	animation?: 'reveal';
	type?: 'header';
};
/**
 *
 * @param children Children
 * @param animation Animation effect
 * @param maxWidth Max-width of inner div, e.g. "760px"
 * @param type Is of type 'header'?
 * @returns Section component
 */
export default function Section({
	children,
	maxWidth,
	animation,
	type,
}: Section) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}
	}, [isInView]);

	if (animation === 'reveal') {
		return (
			<motion.section
				ref={ref}
				variants={{
					hidden: { opacity: 0, y: -20 },
					visible: { opacity: 1, y: 0 },
				}}
				initial='hidden'
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.4 }}
				className='border-b border-slate-100'>
				<div
					className={`${
						type === 'header' ? 'py-8' : 'py-20'
					} max-w-[960px] mx-auto lg:py-32 border-x border-slate-100`}>
					<div className='mx-auto' style={{ maxWidth: maxWidth }}>
						{children}
					</div>
				</div>
			</motion.section>
		);
	}
	return (
		<section className='border-b border-slate-100'>
			<div
				className={`${
					type === 'header' ? 'py-8' : 'py-20'
				} max-w-[960px] mx-auto lg:py-32 border-x border-slate-100`}>
				<div className='mx-auto' style={{ maxWidth: maxWidth }}>
					{children}
				</div>
			</div>
		</section>
	);
}
