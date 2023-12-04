import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.tsx';
import './index.css';
import { ScrollToTop, Menu } from './components/';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Home />
		<ScrollToTop />
	</React.StrictMode>
);
