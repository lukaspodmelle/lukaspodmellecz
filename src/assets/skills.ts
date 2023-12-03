export type Skill = {
	title: string;
	certified: boolean;
};

export const skills: Skill[] = [
	{ title: 'HTML', certified: false },
	{ title: 'CSS', certified: false },
	{ title: 'JavaScript', certified: true },
	{ title: 'TypeScript', certified: true },
	{ title: 'React', certified: false },
	{ title: 'Next.js', certified: false },
	{ title: 'Tailwind CSS', certified: false },
	{ title: 'Figma', certified: false },
];
