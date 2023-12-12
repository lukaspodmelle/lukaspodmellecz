import { Section, Chip, Skill } from '../components';
import { skills } from '../assets/skills';

export default function Skills() {
	return (
		<Section>
			<div className='mb-8'>
				<Chip text='Skills' />
			</div>
			<p className='text-3xl lg:text-4xl mb-12'>
				Zaměřuji se na{' '}
				<span className='highlight'>
					JavaScript, TypeScript, React a Next.js.
				</span>{' '}
				Na psaní CSS jsem si oblíbil Tailwind. Vyzkoušel jsem také
				headless CMS, například{' '}
				<span className='highlight'>Sanity, Strapi nebo Prismic.</span>
			</p>
			<div className='flex flex-wrap lg:justify-center gap-3'>
				{skills.map((skill, index) => (
					<Skill
						text={skill.title}
						key={index}
						isCertified={skill.isCertified}
						certificateLink={skill.certificateLink}
						isHighlighted={skill.isHighlighted}
					/>
				))}
			</div>
		</Section>
	);
}
