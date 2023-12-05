import { motion } from 'framer-motion';
import {
	Chip,
	Button,
	Section,
	Link,
	Skill,
	Card,
	Arrow,
	Socials,
} from './components';
import { skills } from './assets/skills';
import { scrollToContent } from './utils/scrollToContent';
import {
	HandWaving,
	RocketLaunch,
	GithubLogo,
	LinkedinLogo,
	FigmaLogo,
	ArrowDown,
	Code,
	ThumbsDown,
	Fire,
	BookOpen,
	Lightning,
	Intersect,
	SmileyWink,
	Heart,
	PaperPlaneTilt,
	Chats,
	Sunglasses,
} from '@phosphor-icons/react';

export default function Home() {
	return (
		<main className='px-8 lg:px-0 mx-auto lg:text-center'>
			<Section maxWidth='800px'>
				<motion.img
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					src='/images/lukaspodmelle.png'
					alt='Profilová fotka'
					className='inline-block mb-12 w-32'
				/>
				<motion.p
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2 }}
					className='text-4xl lg:text-5xl mb-8'>
					Ahoj, tady Lukáš!{' '}
					<HandWaving weight='fill' className='inlineIcon' /> Design,
					technologie, programování ={' '}
					<Heart weight='fill' className='inlineIcon' /> Občas nevím,
					kam dřív skočit a&nbsp;co dalšího se naučit.{' '}
					<RocketLaunch weight='fill' className='inlineIcon' />
				</motion.p>
				<motion.div
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4 }}
					className='flex flex-col lg:flex-row gap-6 justify-center'>
					<Button
						variant='normal'
						text='Více o mně'
						icon={<ArrowDown />}
						buttonOnClick={() => scrollToContent('muj-pribeh')}
					/>
					<div className='flex gap-2 text-slate-800'>
						<Button
							variant='round'
							icon={<LinkedinLogo size={20} weight='fill' />}
							link={'https://www.linkedin.com/in/lukaspodmelle/'}
						/>
						<Button
							variant='round'
							icon={<GithubLogo size={20} weight='fill' />}
							link={'https://github.com/lukaspodmelle/'}
						/>
					</div>
				</motion.div>
			</Section>
			<Section>
				<div id='muj-pribeh' className='mb-8'>
					<Chip text='Co teď dělám' />
				</div>
				<p className='text-3xl lg:text-4xl'>
					Head of Conversation Design a&nbsp;částečně Marketingový
					specialista v&nbsp;Pardubickém Feedyou.{' '}
					<Chats weight='fill' className='inlineIcon' /> Mám na
					starost realizaci téměř veškerého obsahu.{' '}
					<span className='text-primary'>Web</span>,{' '}
					<span className='text-primary'>sociální sítě</span> nebo{' '}
					<span className='text-primary'>newslettery</span>.
					Implementoval jsem novou{' '}
					<span className='text-primary'>vizuální identitu</span>{' '}
					a&nbsp;dál se o&nbsp;ni starám.{' '}
					<Sunglasses weight='fill' className='inlineIcon' />
				</p>
				<div className='grid grid-cols-3 gap-5 mt-8'>
					<img
						className='rounded-md'
						src='/images/feedyou-socials.png'
						alt=''
					/>
					<img
						className='rounded-md'
						src='/images/feedyou-visual.png'
						alt=''
					/>
					<img
						className='rounded-md'
						src='/images/feedyou-website.png'
						alt=''
					/>
				</div>
			</Section>
			<Section>
				<div className='mb-8'>
					<Chip text='Proč vám píšu' />
				</div>
				<p className='text-3xl lg:text-4xl'>
					Protože jsem postupem času zjistil, že programování mě baví
					mnohem víc. <Code weight='fill' className='inlineIcon' />{' '}
					Začal jsem stavbou webů na WordPressu, úpravami
					a&nbsp;tvorbou šablon, ale to mě moc nechytlo.{' '}
					<ThumbsDown weight='fill' className='inlineIcon' /> Naopak
					jsem se zamiloval do Reactu a&nbsp;svobody při navrhování.{' '}
					<Fire weight='fill' className='inlineIcon' />
				</p>
			</Section>
			<Section>
				<div className='mb-8'>
					<Chip text='Co nabízím' />
				</div>
				<p className='text-3xl lg:text-4xl mb-12'>
					<span className='text-primary'>HTML</span> a{' '}
					<span className='text-primary'>CSS</span> mám zmáknuté
					a&nbsp;na čem pracuji je{' '}
					<span className='text-primary'>JavaScript</span>,{' '}
					<span className='text-primary'>TypeScript</span>,{' '}
					<span className='text-primary'>React</span> a{' '}
					<span className='text-primary'>Next.js</span>. Na psaní CSS
					jsem si zamiloval{' '}
					<span className='text-primary'>Tailwind</span>, taky jsem si
					vyzkoušel práci s&nbsp;headless CMS, třeba{' '}
					<span className='text-primary'>Sanity</span>,{' '}
					<span className='text-primary'>Strapi</span> nebo{' '}
					<span className='text-primary'>Prismic</span>.
				</p>
				<div className='flex flex-wrap lg:justify-center gap-2'>
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
			<Section>
				<div className='mb-8'>
					<Chip text='Moje projekty' />
				</div>
				<p className='text-3xl lg:text-4xl mb-12'>
					Pro svůj tým ve Feedyou jsem navrhl a&nbsp;vytvořil
					nástroje, které s&nbsp;každým projektem usnadňují práci
					a&nbsp;šetří cenný čas:
				</p>
				<div className='flex flex-col md:flex-row gap-12 md:gap-6'>
					<Card
						image='/images/carousel-creator.png'
						alt='Obrázek nástroje Carousel Creator'
						title='Carousel Creator'
						text='Editor pro tvorbu jednoduchých cover obrázků'
						buttonText='Vyzkoušejte'
						buttonLink='https://tools.feedyou.ai/'
						github='https://github.com/lukaspodmelle/'
					/>
					<Card
						image='/images/translation-manager.png'
						alt='Obrázek nástroje Translation Manager'
						title='Translation Manager'
						text='Automatické překlady komunikace chatbotů a voicebotů'
						buttonText='Vyzkoušejte'
						buttonLink='https://tools.feedyou.ai/translation-manager#demo'
						github='https://github.com/lukaspodmelle/'
					/>
				</div>
				<p className='text-3xl lg:text-4xl mt-24 mb-12'>
					A&nbsp;také něco z&nbsp;hrníčku UI:{' '}
					<Link
						icon={<FigmaLogo />}
						link={
							'https://www.figma.com/file/3tpfCV2ukv1hNIl4ElE4vq/Tvoje-mapa-(Concept-UI)?type=design&node-id=0%3A1&mode=design&t=fzMjoTnPdHMWoV2V-1'
						}>
						Koncept editoru
					</Link>{' '}
					pro tvorbu custom map k&nbsp;vytištění:
				</p>
				<Card
					image='/images/tvoje-mapa.png'
					alt='Obrázek konceptu UI editoru'
				/>
			</Section>
			<Section>
				<div className='mb-8'>
					<Chip text='Závěrem' />
				</div>
				<p className='text-3xl lg:text-4xl mb-12'>
					Chtěl bych se podílet se na tvorbě skvělých webových
					projektů, aplikací. Takových, které budou{' '}
					<span className='text-primary'>dobře vypadat</span>, ale
					také{' '}
					<span className='text-primary'>bezchybně fungovat</span>.{' '}
					<Lightning weight='fill' className='inlineIcon' /> Teď za
					sebou sice moc zkušeností z&nbsp;vývoje nemám, ale přináším{' '}
					<span className='text-primary'>
						přesah do dalších odvětví
					</span>{' '}
					<Intersect weight='fill' className='inlineIcon' />,
					maximální zápal pro věc a&nbsp;hlavně{' '}
					<span className='text-primary'>chuť se stále učit</span>.{' '}
					<BookOpen weight='fill' className='inlineIcon' /> Mohli
					bychom si rozumnět?{' '}
					<SmileyWink weight='fill' className='inlineIcon' />
				</p>
			</Section>
			<Section>
				<div className='flex justify-center mb-12'>
					<Arrow />
				</div>
				<div className='mb-6 sm:mb-12 text-center'>
					<Chip text='Těším se na odpověď' color='primary' />
				</div>
				<p className='hidden sm:block text-4xl lg:text-5xl font-bold mb-12 text-center'>
					<a href='mailto:podmellelukas@gmail.com'>
						podmellelukas@gmail.com
					</a>
				</p>
				<div className='mb-6 sm:hidden flex justify-center'>
					<Button
						variant='normal'
						style='text-xl px-12'
						text='Napište mi'
						icon={<PaperPlaneTilt weight='fill' />}
						link='mailto:podmellelukas@gmail.com'
					/>
				</div>
				<div className='flex justify-center gap-4'>
					<Socials />
				</div>
			</Section>
		</main>
	);
}
