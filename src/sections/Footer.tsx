import { GithubLogo } from '@phosphor-icons/react';

export default function Footer() {
	return (
		<div className='flex justify-center items-center gap-2 py-8 text-slate-500'>
			<p>
				Lukáš Podmelle 👨‍💻 Prohlédněte si{' '}
				<a
					className='underline underline-offset-4 decoration-1'
					href='https://github.com/lukaspodmelle/lukaspodmellecz'
					target='_blank'>
					kód tohoto webu
				</a>
			</p>
			<GithubLogo weight='fill' />
		</div>
	);
}
