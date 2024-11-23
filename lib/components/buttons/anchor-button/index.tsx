import type { AnchorHTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import styles from './styles.module.scss';

interface Properties extends AnchorHTMLAttributes<HTMLAnchorElement> {
	appearance?: 'solid' | 'outline';
}

export function AnchorButton({
	children,
	className,
	appearance = 'solid',
	...properties
}: Properties) {
	return (
		<a
			className={Combine([
				'standard-component',
				'anchor-button',
				styles['anchor-button'],
				styles[appearance],
				className,
			])}
			{...properties}
		>
			{children}
		</a>
	);
}
