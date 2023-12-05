type Link = {
	children: React.ReactNode;
	icon?: React.ReactNode;
	link?: string;
	onLinkClick?: () => void;
};
/**
 *
 * @param children Children
 * @param icon Icon component
 * @param link Link URL
 * @param onLinkClick Function on link click
 * @returns Link component
 */
export default function Link({ children, icon, link, onLinkClick }: Link) {
	return (
		<a
			href={link}
			target='_blank'
			onClick={onLinkClick}
			className='text-primary inline-flex items-center gap-2 underline underline-offset-4 decoration-3 cursor-pointer'>
			{children}
			{icon}
		</a>
	);
}
