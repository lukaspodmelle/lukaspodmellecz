import { Button } from '.';
import { ArrowCircleUpRight, GithubLogo } from '@phosphor-icons/react';

type Card = {
	image?: string;
	alt?: string;
	title?: string;
	text?: string;
	buttonLink?: string;
	buttonText?: string;
	github?: string;
	onImageClick?: () => void;
};
/**
 *
 * @param image Card image
 * @param alt Card image alt text
 * @param title Card title
 * @param text Card text
 * @param buttonLink Primary button link
 * @param buttonText Primary button text
 * @param github Link to github
 * @param onImageClick Function on image click
 * @returns Card component
 */
export default function Card({
	image,
	alt,
	title,
	text,
	buttonLink,
	buttonText,
	github,
	onImageClick,
}: Card) {
	return (
		<div className='flex flex-col w-full items-start gap-6 text-left'>
			{image ? (
				<div className='overflow-hidden w-full border-4 border-slate-100 rounded-md bg-slate-100'>
					<img
						src={image}
						alt={alt}
						className='rounded-[2px] w-ful'
						onClick={onImageClick}
						loading='lazy'
					/>
				</div>
			) : null}

			<div className='sm:max-w-[60%]'>
				<h3 className='mb-2'>{title}</h3>
				<p className='text-lg leading-tight'>{text}</p>
			</div>

			<div className='flex gap-3'>
				{buttonText ? (
					<Button
						variant='normal'
						text={buttonText}
						icon={<ArrowCircleUpRight weight='fill' size={20} />}
						link={buttonLink}
					/>
				) : null}

				{github ? (
					<Button
						variant='round'
						icon={<GithubLogo weight='fill' size={20} />}
						link={github}
					/>
				) : null}
			</div>
		</div>
	);
}
