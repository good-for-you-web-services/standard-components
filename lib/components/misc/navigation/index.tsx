import ListIcon from 'bootstrap-icons/icons/list.svg?react';
import { Children, useState, type HTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLElement> {}

export default function Naviation({ children, className, ...properties }: Properties) {
	const [showMenu, setShowMenu] = useState(false);

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
			{...properties}
		>
			<button
				className={`navigation-button ${styles['navigation-button']}`}
				onClick={onNavigationButtonClick}
			>
				<ListIcon />
			</button>
			<div className={`navigation-menu ${styles['navigation-menu']}`} data-show={showMenu}>
				<ul className={`navigation-list ${styles['navigation-list']}`}>
					{Children.map(children, (child) => (
						<li className={`navigation-list-item ${styles['navigation-list-item']}`}>
							{child}
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
