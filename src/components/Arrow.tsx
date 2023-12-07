import { motion } from 'framer-motion';
export default function Arrow(): React.ReactNode {
	return (
		<motion.div
			initial={{ y: 0 }}
			whileInView={{ y: [-10, 0, -10, 0] }}
			transition={{ delay: 0.3 }}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='53'
				viewBox='0 0 24 53'
				fill='none'>
				<path
					d='M13.5 2C13.5 1.17157 12.8284 0.5 12 0.5C11.1716 0.5 10.5 1.17157 10.5 2L13.5 2ZM10.9393 52.0607C11.5251 52.6464 12.4749 52.6464 13.0607 52.0607L22.6066 42.5147C23.1924 41.9289 23.1924 40.9792 22.6066 40.3934C22.0208 39.8076 21.0711 39.8076 20.4853 40.3934L12 48.8787L3.51472 40.3934C2.92893 39.8076 1.97919 39.8076 1.3934 40.3934C0.807614 40.9792 0.807614 41.9289 1.3934 42.5147L10.9393 52.0607ZM10.5 2L10.5 51L13.5 51L13.5 2L10.5 2Z'
					fill='#006CF8'
				/>
			</svg>
		</motion.div>
	);
}
