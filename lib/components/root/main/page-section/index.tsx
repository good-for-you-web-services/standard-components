import type { HTMLAttributes } from 'react';
import { Combine } from '../../../../functions/combine';
import { Wrapper } from '../../../wrappers/wrapper';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLBaseElement> {}

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
			<Wrapper>{children}</Wrapper>
		</section>
	);
}
