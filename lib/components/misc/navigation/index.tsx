import { useMediaQuery } from '@uidotdev/usehooks';
import ListIcon from 'bootstrap-icons/icons/list.svg?react';
import { useState, type HTMLAttributes, type ReactElement } from 'react';
import { Combine } from '../../../functions/combine';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLElement> {
	links: ReactElement[];
	layoutBreakpoint?: string;
}

export default function Navigation({
	links,
	layoutBreakpoint = '1024px',
	children,
	className,
	...properties
}: Properties) {
	const [showMenu, setShowMenu] = useState(false);

	const isAlternateLayout = useMediaQuery(`only screen and (min-width: ${layoutBreakpoint})`);

	const onNavigationButtonClick = () => {
		const newShowMenu = !showMenu;

		document.documentElement.toggleAttribute('data-no-scroll', newShowMenu);

		setShowMenu(newShowMenu);
	};

	return (
		<nav
			className={Combine([
				'standard-component',
				'navigation',
				styles['navigation'],
				className,
			])}
			data-layout={!isAlternateLayout ? 'standard' : 'alternate'}
			{...properties}
		>
			<button
				className={`navigation-button ${styles['navigation-button']}`}
				onClick={onNavigationButtonClick}
			>
				<ListIcon />
			</button>
			<div className={`navigation-menu ${styles['navigation-menu']}`} data-show={showMenu}>
				<div className={`navigation-menu-wrapper ${styles['navigation-menu-wrapper']}`}>
					<ul className={`navigation-list ${styles['navigation-list']}`}>
						{links.map((child) => (
							<li
								className={`navigation-list-item ${styles['navigation-list-item']}`}
							>
								{child}
							</li>
						))}
					</ul>
					{children}
				</div>
			</div>
		</nav>
	);
}
