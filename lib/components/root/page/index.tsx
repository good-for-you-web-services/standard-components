import type { HTMLAttributes, ReactElement } from 'react';
import { Combine } from '../../../functions/combine';
import { StandardSection } from '../../sections/standard-section';
import { Wrapper } from '../../wrappers/wrapper';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLBaseElement> {
	meta: {
		sitename: string;
		title: string;
		description: string;
		url: string;
		image: string;
	};
	heading?: ReactElement<HTMLHeadingElement>;
}

export function StandardPage({
	meta,
	heading,
	className,
	children,
	...otherProperties
}: Properties) {
	return (
		<main
			className={Combine(['standard-component', 'page', styles['page'], className])}
			{...otherProperties}
		>
			<meta name='title' content={meta.title} />
			<meta name='description' content={meta.description} />

			<meta property='og:description' content={meta.description} />
			<meta property='og:title' content={meta.title} />
			<meta property='og:url' content={meta.url} />
			<meta property='og:image' content={meta.image} />
			<meta property='og:site_name' content={meta.sitename} />

			<Wrapper className={styles['wrapper']} fullWidth>
				{heading && (
					<StandardSection className='heading-section'>{heading}</StandardSection>
				)}
				{children}
			</Wrapper>
		</main>
	);
}
