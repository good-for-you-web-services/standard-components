import type { HTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLDivElement> {
	fullWidth?: boolean;
}

export function Wrapper(properties: Properties) {
	const { fullWidth, children, className, ...otherProperties } = properties;

	return (
		<div
			className={Combine([
				'standard-component',
				'wrapper',
				fullWidth ? 'full' : '',
				styles[fullWidth ? 'wrapper-full' : 'wrapper'],
				className,
			])}
			{...otherProperties}
		>
			{children}
		</div>
	);
}
