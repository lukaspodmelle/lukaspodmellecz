interface Skill {
	title: string;
	isCertified: boolean;
	certificateLink?: string;
}

export const skills: Skill[] = [
	{ title: 'HTML', isCertified: false },
	{ title: 'CSS', isCertified: false },
	{
		title: 'JavaScript',
		isCertified: true,
		certificateLink:
			'https://www.freecodecamp.org/certification/lukaspodmelle/javascript-algorithms-and-data-structures',
	},
	{
		title: 'TypeScript',
		isCertified: true,
		certificateLink:
			'https://www.codecademy.com/profiles/lukaspodmelle/certificates/56fb1e71303e37b643bb1905f31c8a09',
	},
	{
		title: 'React',
		isCertified: true,
		certificateLink:
			'https://www.codecademy.com/profiles/lukaspodmelle/certificates/af00e5032d0a68cc84879983f5d8333b',
	},
	{ title: 'Next.js', isCertified: false },
	{ title: 'Tailwind CSS', isCertified: false },
	{ title: 'Figma', isCertified: false },
	{ title: 'Photoshop', isCertified: false },
	{ title: 'Illustrator', isCertified: false },
	{ title: 'Premiere Pro', isCertified: false },
	{ title: 'Blender', isCertified: false },
	{ title: 'Git', isCertified: false },
	{ title: 'GitHub', isCertified: false },
];
