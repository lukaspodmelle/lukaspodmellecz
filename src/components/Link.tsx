type Link = {
	children: React.ReactNode;
	icon?: React.ReactNode;
	onLinkClick?: () => void;
};
/**
 *
 * @param children Children
 * @param icon Icon component
 * @param onLinkClick Function on link click
 * @returns Link component
 */
export default function Link({ children, icon, onLinkClick }: Link) {
	return (
		<a
			onClick={onLinkClick}
			className='text-primary inline-flex items-center gap-2 underline underline-offset-4 decoration-3 cursor-pointer'
		>
			{children}
			{icon}
		</a>
	);
}
