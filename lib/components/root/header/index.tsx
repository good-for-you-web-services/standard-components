import type { HTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import { Wrapper } from '../../wrappers/wrapper';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLBaseElement> {}

export function Header(properties: Properties) {
	const { children, className, ...otherProperties } = properties;

	return (
		<header
			className={Combine(['standard-component', 'header', styles['header'], className])}
			{...otherProperties}
		>
			<Wrapper className={styles['wrapper']}>{children}</Wrapper>
		</header>
	);
}
