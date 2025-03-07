import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StandardFooter } from '../lib/components/blocks/standard-footer';
import { StandardHeader } from '../lib/components/blocks/standard-header';
import Test from './pages/test';
import './style.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StandardHeader>
			<h1>This is a header</h1>
		</StandardHeader>
		<Test />
		<StandardFooter>
			<p>This is a footer</p>
		</StandardFooter>
	</StrictMode>
);
