import type { HTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLButtonElement> {
	appearance?: 'solid' | 'outline';
}

export function Button({ appearance = 'solid', ...properties }: Properties) {
	const { children, className, ...otherProperties } = properties;

	return (
		<button
			className={Combine(['standard-input', 'button', styles['button'], styles[appearance]])}
			{...otherProperties}
		>
			{children}
		</button>
	);
}
