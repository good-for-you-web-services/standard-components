import type { HTMLAttributes } from 'react';
import { Combine } from '../../../functions/combine';
import { Wrapper } from '../../wrappers/wrapper';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLBaseElement> {}

export function StandardSection(properties: Properties) {
	const { children, className, ...otherProperties } = properties;

	return (
		<section
			className={Combine([
				'standard-component',
				'standard-section',
				styles['standard-section'],
				className,
			])}
			{...otherProperties}
		>
			<Wrapper>{children}</Wrapper>
		</section>
	);
}
