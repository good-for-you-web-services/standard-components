import type { BaseHTMLAttributes } from 'react';
import { Combine } from '../../../../functions/combine';
import styles from './styles.module.css';

type Properties = {} & BaseHTMLAttributes<HTMLBaseElement>;

export function Page(properties: Properties) {
	const { children, className, ...otherProperties } = properties;

	return (
		<main
			className={Combine(['standard-component', 'page', styles['page'], className])}
			{...otherProperties}
		>
			<div className={Combine(['wrapper', styles['wrapper']])}>{children}</div>
		</main>
	);
}
