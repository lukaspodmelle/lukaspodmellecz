type MenuItems = {
	title: string;
	link: string;
};

const menuItems: MenuItems[] = [
	{ title: 'Co teď dělám', link: 'link' },
	{ title: 'Proč vám píšu', link: 'link' },
	{ title: 'Co nabízím', link: 'link' },
	{ title: 'Projekty', link: 'link' },
	{ title: 'Závěrem', link: 'link' },
];

export default function Menu() {
	return (
		<nav className='bg-white bg-opacity-90 backdrop-blur-sm top-6 py-3 px-2 fixed w-full max-w-fit left-1/2 -translate-x-1/2 border border-slate-100 rounded-full z-50'>
			<ul className='flex gap-2'>
				{menuItems.map((item, index) => (
					<li key={index}>
						<a
							className='px-6 py-[.5rem] rounded-full'
							href={item.link}>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
