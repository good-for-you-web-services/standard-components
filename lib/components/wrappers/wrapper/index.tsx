import type { HTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLDivElement> {
	fullWidth?: boolean;
}

export function Wrapper({ fullWidth, children, className, ...properties }: Properties) {
	return (
		<div
			className={Combine(['standard-component', 'wrapper', styles['wrapper'], className])}
			data-full-width={fullWidth}
			{...properties}
		>
			{children}
		</div>
	);
}
