import type { HTMLAttributes, ReactElement } from 'react';
import { Combine } from '../../../functions/combine';
import { StandardSection } from '../../sections/standard-section';
import { Wrapper } from '../../wrappers/wrapper';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLBaseElement> {
	heading?: ReactElement<HTMLHeadingElement>;
}

export function Page(properties: Properties) {
	const { heading, children, className, ...otherProperties } = properties;

	return (
		<main
			className={Combine(['standard-component', 'page', styles['page'], className])}
			{...otherProperties}
		>
			<Wrapper className={styles['wrapper']} fullWidth>
				{heading && (
					<StandardSection className='heading-section'>{heading}</StandardSection>
				)}
				{children}
			</Wrapper>
		</main>
	);
}
