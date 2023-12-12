interface Skill {
	title: string;
	isCertified: boolean;
	certificateLink?: string;
	isHighlighted?: boolean;
}

export const skills: Skill[] = [
	{ title: 'HTML', isCertified: false },
	{ title: 'CSS', isCertified: false },
	{
		title: 'JavaScript',
		isCertified: true,
		certificateLink:
			'https://www.freecodecamp.org/certification/lukaspodmelle/javascript-algorithms-and-data-structures',
		isHighlighted: true,
	},
	{
		title: 'TypeScript',
		isCertified: true,
		certificateLink:
			'https://www.codecademy.com/profiles/lukaspodmelle/certificates/56fb1e71303e37b643bb1905f31c8a09',
		isHighlighted: true,
	},
	{
		title: 'React',
		isCertified: true,
		certificateLink:
			'https://www.codecademy.com/profiles/lukaspodmelle/certificates/af00e5032d0a68cc84879983f5d8333b',
		isHighlighted: true,
	},
	{ title: 'Next.js', isCertified: false, isHighlighted: true },
	{ title: 'Tailwind CSS', isCertified: false, isHighlighted: true },
	{ title: 'Figma', isCertified: false, isHighlighted: true },
	{ title: 'Photoshop', isCertified: false },
	{ title: 'Illustrator', isCertified: false },
	{ title: 'Premiere Pro', isCertified: false },
	{ title: 'Blender', isCertified: false },
	{ title: 'Git', isCertified: false },
	{ title: 'GitHub', isCertified: false },
];
