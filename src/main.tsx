import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Footer } from '../lib/components/root/footer';
import { Header } from '../lib/components/root/header';
import { Page } from '../lib/components/root/main/page';
import { PageSection } from '../lib/components/root/main/page-section';
import './style.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Header>
			<h1>This is a header</h1>
		</Header>
		<Page>
			<PageSection>
				<h1>This is the main section</h1>
			</PageSection>
		</Page>
		<Footer>
			<p>This is a footer</p>
		</Footer>
	</StrictMode>
);
