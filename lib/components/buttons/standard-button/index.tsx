import type { HTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLButtonElement> {
	appearance?: 'solid' | 'outline';
}

export function StandardButton({
	children,
	className,
	appearance = 'solid',
	...properties
}: Properties) {
	return (
		<button
			className={Combine([
				'standard-input',
				'standard-button',
				styles['standard-button'],
				className,
			])}
			data-appearance={appearance}
			{...properties}
		>
			{children}
		</button>
	);
}
