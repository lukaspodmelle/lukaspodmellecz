import { Chip, Button, Section, Link, Skill } from './components';
import { skills } from './assets/skills';
import {
	HandWaving,
	RocketLaunch,
	GithubLogo,
	LinkedinLogo,
	ArrowCircleDownRight,
	Code,
	ThumbsDown,
	Fire,
} from '@phosphor-icons/react';

export default function Home() {
	const inlineIcon = 'inline-block text-primary';
	return (
		<main className='mx-auto text-center'>
			<Section maxWidth='780px'>
				<p className='text-5xl mb-8'>
					Ahoj, tady Lukáš!{' '}
					<HandWaving weight='fill' className={inlineIcon} /> Jsem
					zapálený do designu, technologií, marketingu a&nbsp;mnohem
					víc. Občas nevím, kam dřív skočit a&nbsp;co dalšího
					vyzkoušet nebo se naučit.{' '}
					<RocketLaunch weight='fill' className={inlineIcon} />
				</p>
				<div className='flex gap-6 justify-center'>
					<Button text='Můj příběh' />
					<div className='flex gap-2 text-slate-800'>
						<button className='w-12 h-12 flex justify-center items-center border border-slate-200 rounded-full'>
							<LinkedinLogo size={20} weight='fill' />
						</button>
						<button className='w-12 h-12 flex justify-center items-center border border-slate-200 rounded-full'>
							<GithubLogo size={20} weight='fill' />
						</button>
					</div>
				</div>
			</Section>
			<Section>
				<div className='mb-8'>
					<Chip text='Co teď dělám' />
				</div>
				<p className='text-4xl'>
					Head of Conversation Design a&nbsp;částečně Marketingový
					specialista v&nbsp;Pardubickém Feedyou. Mám na starost
					realizaci téměř veškerého marketingového obsahu.{' '}
					<Link icon={<ArrowCircleDownRight weight='fill' />}>
						Web
					</Link>
					,{' '}
					<Link icon={<ArrowCircleDownRight weight='fill' />}>
						sociální sítě
					</Link>{' '}
					nebo newslettery. Implementoval jsem novou{' '}
					<Link icon={<ArrowCircleDownRight weight='fill' />}>
						vizuální identitu
					</Link>{' '}
					a&nbsp;dál se o ni starám.
				</p>
			</Section>
			<Section>
				<div className='mb-8'>
					<Chip text='Proč vám píšu' />
				</div>
				<p className='text-4xl'>
					Protože jsem postupem času zjistil, že programování mě baví
					mnohem víc. <Code weight='fill' className={inlineIcon} />{' '}
					Začal jsem stavbou webů na WordPressu, úpravami
					a&nbsp;tvorbou šablon, ale to mě moc nechytlo.{' '}
					<ThumbsDown weight='fill' className={inlineIcon} /> Naopak
					jsem se zamiloval do Reactu a&nbsp;svobody při navrhování.{' '}
					<Fire weight='fill' className={inlineIcon} />
				</p>
			</Section>
			<Section>
				<div className='mb-8'>
					<Chip text='Co mohu nabídnout' />
				</div>
				<p className='text-4xl'>
					<span className='text-primary'>HTML</span> a{' '}
					<span className='text-primary'>CSS</span> mám zmáknuté a na
					čem pracuji je{' '}
					<span className='text-primary'>JavaScript</span>,{' '}
					<span className='text-primary'>TypeScript</span>,{' '}
					<span className='text-primary'>React</span> a{' '}
					<span className='text-primary'>Next.js</span>.{' '}
					<RocketLaunch weight='fill' className={inlineIcon} /> Na
					psaní CSS jsem si zamiloval{' '}
					<span className='text-primary'>Tailwind</span>, taky jsem si
					vyzkoušel práci s headless CMS, třeba{' '}
					<span className='text-primary'>Sanity</span>,{' '}
					<span className='text-primary'>Strapi</span> nebo{' '}
					<span className='text-primary'>Prismic</span>.
				</p>
				<div>{skills.map((skill) => console.log(skill))}</div>
			</Section>
		</main>
	);
}
