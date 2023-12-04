type Tip = {
	text: string;
};
/**
 *
 * @param text Tip text
 * @returns Tip component
 */
export default function Tip({ text }: Tip) {
	return { text };
}
