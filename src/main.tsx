import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import Home from './Home.tsx';
import './index.css';
import { ScrollToTop } from './components/';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Home />
		<ScrollToTop />
		<Analytics />
	</React.StrictMode>
);
