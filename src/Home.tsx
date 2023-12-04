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
	ArrowCircleDownRight,
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
} from '@phosphor-icons/react';

export default function Home() {
	return (
		<main className='mx-auto text-center'>
			<Section maxWidth='800px'>
				<img
					src='src/assets/images/lukaspodmelle.png'
					alt='Profilová fotka'
					width={150}
					className='inline-block mb-12'
				/>
				<p className='text-5xl mb-8'>
					Ahoj, tady Lukáš!{' '}
					<HandWaving weight='fill' className='inlineIcon' /> Design,
					technologie, programování ={' '}
					<Heart weight='fill' className='inlineIcon' /> Občas nevím,
					kam dřív skočit a&nbsp;co dalšího se naučit.{' '}
					<RocketLaunch weight='fill' className='inlineIcon' />
				</p>
				<div className='flex gap-6 justify-center'>
					<Button
						style='normal'
						text='Více o mně'
						icon={<ArrowDown />}
						buttonOnClick={() => scrollToContent('muj-pribeh')}
					/>
					<div className='flex gap-2 text-slate-800'>
						<Button
							style='round'
							icon={<LinkedinLogo size={20} weight='fill' />}
							buttonOnClick={() => {}}
						/>
						<Button
							style='round'
							icon={<GithubLogo size={20} weight='fill' />}
							buttonOnClick={() => {}}
						/>
					</div>
				</div>
			</Section>
			<Section>
				<div id='muj-pribeh' className='mb-8'>
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
					<Chip text='Co mohu nabídnout' />
				</div>
				<p className='text-4xl mb-12'>
					<span className='text-primary'>HTML</span> a{' '}
					<span className='text-primary'>CSS</span> mám zmáknuté
					a&nbsp;na čem pracuji je{' '}
					<span className='text-primary'>JavaScript</span>,{' '}
					<span className='text-primary'>TypeScript</span>,{' '}
					<span className='text-primary'>React</span> a{' '}
					<span className='text-primary'>Next.js</span>.{' '}
					<RocketLaunch weight='fill' className='inlineIcon' /> Na
					psaní CSS jsem si zamiloval{' '}
					<span className='text-primary'>Tailwind</span>, taky jsem si
					vyzkoušel práci s&nbsp;headless CMS, třeba{' '}
					<span className='text-primary'>Sanity</span>,{' '}
					<span className='text-primary'>Strapi</span> nebo{' '}
					<span className='text-primary'>Prismic</span>.
				</p>
				<div className='flex flex-wrap justify-center gap-2'>
					{skills.map((skill, index) => (
						<Skill
							text={skill.title}
							key={index}
							isCertified={skill.certified}
						/>
					))}
				</div>
			</Section>
			<Section>
				<div className='mb-8'>
					<Chip text='Moje projekty' />
				</div>
				<p className='text-4xl mb-12'>
					Pro svůj tým ve Feedyou jsem navrhl a&nbsp;vytvořil
					nástroje, které s&nbsp;každým projektem usnadňují práci
					a&nbsp;šetří cenný čas:
				</p>
				<div className='sm:flex gap-6'>
					<Card
						image='src/assets/images/test.png'
						alt='Obrázek nástroje Carousel Creator'
						title='Carousel Creator'
						text='Editor pro tvorbu jednoduchých cover obrázků'
						buttonText='Vyzkoušejte'
						buttonLink='https://tools.feedyou.ai/'
						github='https://github.com/lukaspodmelle/'
					/>
					<Card
						image='src/assets/images/test.png'
						alt='Obrázek nástroje Translation Manager'
						title='Translation Manager'
						text='Automatické překlady komunikace chatbotů a voicebotů'
						buttonText='Vyzkoušejte'
						buttonLink='https://tools.feedyou.ai/translation-manager#demo'
						github='https://github.com/lukaspodmelle/'
					/>
				</div>
				<p className='text-4xl mt-24 mb-12'>
					A&nbsp;také něco z&nbsp;hrníčku UI:{' '}
					<Link
						icon={<FigmaLogo />}
						onLinkClick={() => {
							window.open(
								'https://www.figma.com/file/3tpfCV2ukv1hNIl4ElE4vq/Tvoje-mapa-(Concept-UI)?type=design&node-id=0%3A1&mode=design&t=fzMjoTnPdHMWoV2V-1',
								'_blank'
							);
						}}>
						Koncept editoru
					</Link>{' '}
					pro tvorbu custom map k&nbsp;vytištění:
				</p>
				<Card
					image='src/assets/images/test.png'
					alt='Obrázek konceptu UI editoru'
				/>
			</Section>
			<Section>
				<div className='mb-8'>
					<Chip text='Závěrem' />
				</div>
				<p className='text-4xl mb-12'>
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
				<div className='mb-12'>
					<Chip text='Těším se na odpověď' color='primary' />
				</div>
				<p className='lg:text-5xl font-bold mb-12'>
					podmellelukas@gmail.com
				</p>
				<div className='flex justify-center gap-4'>
					<Socials />
				</div>
			</Section>
		</main>
	);
}
