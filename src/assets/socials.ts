import { LinkedinLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react';

type Socials = {
	title: string;
	link: string;
	icon: any;
};

export const socials: Socials[] = [
	{
		title: 'LinkedIn',
		link: 'https://www.linkedin.com/in/lukaspodmelle/',
		icon: LinkedinLogo,
	},
	{
		title: 'GitHub',
		link: 'https://github.com/lukaspodmelle/',
		icon: GithubLogo,
	},
	{
		title: 'Instagram',
		link: 'https://www.instagram.com/lukaspodmelle',
		icon: InstagramLogo,
	},
];
