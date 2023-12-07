import {
	Header,
	CurrentWork,
	Why,
	Skills,
	Projects,
	Epilogue,
	Contact,
	Footer,
} from './sections';

export default function Home() {
	return (
		<main className='px-8 lg:px-0 mx-auto lg:text-center'>
			<Header />
			<CurrentWork />
			<Why />
			<Skills />
			<Projects />
			<Epilogue />
			<Contact />
			<Footer />
		</main>
	);
}
