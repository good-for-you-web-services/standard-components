import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Footer } from '../lib/components/root/footer';
import { Header } from '../lib/components/root/header';
import Test from './pages/test';
import './style.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Header>
			<h1>This is a header</h1>
		</Header>
		<Test />
		<Footer>
			<p>This is a footer</p>
		</Footer>
	</StrictMode>
);
