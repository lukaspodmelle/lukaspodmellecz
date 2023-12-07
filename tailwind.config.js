/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Inter Tight, sans-serif',
			},
			colors: {
				primary: '#006CF8',
			},
			textDecorationThickness: {
				3: '3px',
			},
		},
	},
	plugins: [],
};
