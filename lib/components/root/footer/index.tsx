import type { BaseHTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import styles from './styles.module.css';

type Properties = {} & BaseHTMLAttributes<HTMLBaseElement>;

export function Footer(properties: Properties) {
	const { children, className, ...otherProperties } = properties;

	return (
		<footer
			className={Combine(['standard-component', 'footer', styles['footer'], className])}
			{...otherProperties}
		>
			<div className={Combine(['wrapper', styles['wrapper']])}>{children}</div>
		</footer>
	);
}
