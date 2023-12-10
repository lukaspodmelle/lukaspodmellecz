import { Section, Chip, Skill } from '../components';
import { skills } from '../assets/skills';

export default function Skills() {
	return (
		<Section>
			<div className='mb-8'>
				<Chip text='Skills' />
			</div>
			<p className='text-3xl lg:text-4xl mb-12'>
				<span className='text-primary'>HTML</span> a{' '}
				<span className='text-primary'>CSS</span> mám zmáknuté a&nbsp;na
				čem pracuji je <span className='text-primary'>JavaScript</span>,{' '}
				<span className='text-primary'>TypeScript</span>,{' '}
				<span className='text-primary'>React</span> a{' '}
				<span className='text-primary'>Next.js</span>. Na psaní CSS jsem
				si oblíbil <span className='text-primary'>Tailwind</span>.{' '}
				Vyzkoušel jsem si také práci s&nbsp;headless CMS, například{' '}
				<span className='text-primary'>Sanity</span>,{' '}
				<span className='text-primary'>Strapi</span> nebo{' '}
				<span className='text-primary'>Prismic</span>.
			</p>
			<div className='flex flex-wrap lg:justify-center gap-3'>
				{skills.map((skill, index) => (
					<Skill
						text={skill.title}
						key={index}
						isCertified={skill.isCertified}
						certificateLink={skill.certificateLink}
					/>
				))}
			</div>
		</Section>
	);
}
