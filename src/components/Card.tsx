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
}: Card) {
	return (
		<div className='flex flex-col w-full items-start gap-6 text-left'>
			{image ? (
				<img src={image} alt={alt} className='rounded-md w-full' />
			) : null}
			<div className='max-w-[60%]'>
				<h3 className='mb-2'>{title}</h3>
				<p className='text-lg leading-tight'>{text}</p>
			</div>
			<div className='flex gap-2'>
				{buttonText ? (
					<Button
						style='normal'
						text={buttonText}
						icon={<ArrowCircleUpRight weight='fill' size={20} />}
						buttonOnClick={() => {
							window.open(buttonLink, '_blank');
						}}
					/>
				) : null}
				{github ? (
					<Button
						style='round'
						icon={<GithubLogo weight='fill' size={20} />}
						buttonOnClick={() => {
							window.open(github, '_blank');
						}}
					/>
				) : null}
			</div>
		</div>
	);
}
