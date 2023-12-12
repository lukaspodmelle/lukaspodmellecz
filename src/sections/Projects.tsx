import { Card, Section, Chip, Link } from '../components';
import { FigmaLogo } from '@phosphor-icons/react';

export default function Projects() {
	return (
		<Section>
			<div className='mb-8'>
				<Chip text='Moje projekty' />
			</div>
			<p className='text-3xl lg:text-4xl mb-12'>
				Pro svůj tým ve Feedyou jsem vytvořil nástroje, které
				s&nbsp;každým projektem{' '}
				<span className='highlight'>
					usnadňují práci a&nbsp;šetří čas:
				</span>
			</p>
			<div className='flex flex-col md:flex-row gap-12 md:gap-6'>
				<Card
					image='/images/carousel-creator-3.png'
					alt='Obrázek nástroje Carousel Creator'
					title='Carousel Creator'
					text='Editor pro tvorbu jednoduchých cover obrázků'
					buttonText='Vyzkoušejte'
					buttonLink='https://tools.feedyou.ai/'
					github='https://github.com/lukaspodmelle/feedyou-bot-tools'
				/>
				<Card
					image='/images/translation-manager-3.png'
					alt='Obrázek nástroje Translation Manager'
					title='Translation Manager'
					text='Automatické překlady komunikace chatbotů a&nbsp;voicebotů'
					buttonText='Vyzkoušejte'
					buttonLink='https://tools.feedyou.ai/translation-manager#demo'
					github='https://github.com/lukaspodmelle/feedyou-bot-tools'
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
				image='/images/tvoje-mapa-2.png'
				alt='Obrázek konceptu UI editoru'
			/>
		</Section>
	);
}
