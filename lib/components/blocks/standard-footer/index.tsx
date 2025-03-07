import type { HTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import { Wrapper } from '../../wrappers/wrapper';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLBaseElement> {}

export function StandardFooter(properties: Properties) {
	const { children, className, ...otherProperties } = properties;

	return (
		<footer
			className={Combine(['standard-component', 'footer', styles['footer'], className])}
			{...otherProperties}
		>
			<Wrapper className={styles['wrapper']}>{children}</Wrapper>
		</footer>
	);
}
