import type { BaseHTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import styles from './styles.module.css';

type Properties = {} & BaseHTMLAttributes<HTMLBaseElement>;

export function Header(properties: Properties) {
	const { children, className, ...otherProperties } = properties;

	return (
		<header
			className={Combine(['standard-component', 'header', styles['header'], className])}
			{...otherProperties}
		>
			<div className={Combine(['wrapper', styles['wrapper']])}>{children}</div>
		</header>
	);
}
