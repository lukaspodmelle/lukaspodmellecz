export function scrollToContent(targetId: string) {
	const targetElement = document.getElementById(targetId);
	const offset = 100;

	if (targetElement) {
		const yOffset =
			targetElement.getBoundingClientRect().top + window.scrollY - offset;
		window.scrollTo({ top: yOffset, behavior: 'smooth' });
	}
}
