import type { BaseHTMLAttributes } from 'react';
import { Combine } from '../../../../functions/combine';
import styles from './styles.module.css';

type Properties = {} & BaseHTMLAttributes<HTMLBaseElement>;

export function PageSection(properties: Properties) {
	const { children, className, ...otherProperties } = properties;

	return (
		<section
			className={Combine([
				'standard-component',
				'page-section',
				styles['page-section'],
				className,
			])}
			{...otherProperties}
		>
			<div className={Combine(['wrapper', styles['wrapper']])}>{children}</div>
		</section>
	);
}
