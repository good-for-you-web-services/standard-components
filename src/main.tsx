import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from '../lib/components/misc/navigation';
import { Footer } from '../lib/components/root/footer';
import { Header } from '../lib/components/root/header';
import { StandardButton } from '../lib/main';
import Test from './pages/test';
import './style.css';
import styles from './styles.module.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Header>
			<h1>This is a header</h1>
			<Navigation
				links={[
					<a href='/'>Page 1</a>,
					<a href='/'>Page 2</a>,
					<a href='/'>Page 3</a>,
					<a href='/'>Page 4</a>,
				]}
			>
				<div className={styles['navigation-buttons']}>
					<StandardButton>Header Button</StandardButton>
				</div>
			</Navigation>
		</Header>
		<Test />
		<Footer>
			<p>This is a footer</p>
		</Footer>
	</StrictMode>
);
