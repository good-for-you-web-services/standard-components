import { Children, type HTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLDivElement> {}

export function ButtonGroup({ children, className, ...properties }: Properties) {
	return (
		<div
			className={Combine([
				'standard-component',
				'button-group',
				styles['button-group'],
				className,
			])}
			{...properties}
		>
			{Children.map(children, (child) => (
				<div className={styles['button-wrapper']}>{child}</div>
			))}
		</div>
	);
}
