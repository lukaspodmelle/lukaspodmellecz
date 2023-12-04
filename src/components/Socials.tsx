import { motion } from 'framer-motion';
import { socials } from '../assets/socials';

type Socials = {};

export default function Socials() {
	return socials.map((profile, index) => (
		<motion.a
			key={index}
			whileHover={{ scale: 1.3 }}
			transition={{
				type: 'spring',
				stiffness: 350,
				damping: 15,
			}}
			href={profile.link}
			target='_blank'>
			<profile.icon weight='fill' size={40} />
		</motion.a>
	));
}
