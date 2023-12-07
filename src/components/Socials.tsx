import { socials } from '../assets/socials';
import { Spring } from '.';

export default function Socials() {
	return socials.map((profile, index) => (
		<Spring scaleTo={1.3} key={index}>
			<a href={profile.link} target='_blank'>
				<profile.icon weight='fill' size={40} />
			</a>
		</Spring>
	));
}
