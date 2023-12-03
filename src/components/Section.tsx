type Section = {
	children: React.ReactNode;
	maxWidth?: string;
};
/**
 *
 * @param Children Children
 * @param maxWidth Max-width of inner div, e.g. "760px"
 * @returns Section component
 */
export default function Section({ children, maxWidth }: Section) {
	return (
		<section className='border-b border-slate-100'>
			<div className='max-w-[960px] mx-auto py-32 border-x border-slate-100'>
				<div className='mx-auto' style={{ maxWidth: maxWidth }}>
					{children}
				</div>
			</div>
		</section>
	);
}
