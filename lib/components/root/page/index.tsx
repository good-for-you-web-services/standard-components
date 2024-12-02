import type { HTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import { Wrapper } from '../../wrappers/wrapper';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLBaseElement> {}

export function Page(properties: Properties) {
	const { children, className, ...otherProperties } = properties;

	return (
		<main
			className={Combine(['standard-component', 'page', styles['page'], className])}
			{...otherProperties}
		>
			<Wrapper className={styles['wrapper']} fullWidth>
				{children}
			</Wrapper>
		</main>
	);
}
