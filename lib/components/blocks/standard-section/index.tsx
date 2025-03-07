import type { HTMLAttributes, ReactElement } from 'react';
import { Combine } from '../../../functions/combine';
import { Wrapper } from '../../wrappers/wrapper';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLBaseElement> {
	heading?: ReactElement;
}

export function StandardSection({ children, className, heading, ...properties }: Properties) {
	return (
		<section
			className={Combine([
				'standard-component',
				'section',
				'standard-section',
				styles['standard-section'],
				className,
			])}
			{...properties}
		>
			<Wrapper>
				{heading}
				<div className='section-content'>{children}</div>
			</Wrapper>
		</section>
	);
}
