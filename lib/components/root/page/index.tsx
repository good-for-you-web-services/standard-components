import { Fragment, type HTMLAttributes, type ReactElement } from 'react';
import { Combine } from '../../../functions/combine';
import { StandardSection } from '../../sections/standard-section';
import { Wrapper } from '../../wrappers/wrapper';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLBaseElement> {
	meta?: {
		sitename?: string;
		title?: string;
		description?: string;
		url?: string;
		image?: string;
		other?: {
			name: string;
			content: string;
		}[];
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
			{meta && (
				<Fragment>
					{meta.title && <meta name='title' content={meta.title} />}
					{meta.description && <meta name='description' content={meta.description} />}

					{meta.sitename && <meta property='og:site_name' content={meta.sitename} />}
					{meta.title && <meta property='og:title' content={meta.title} />}
					{meta.description && (
						<meta property='og:description' content={meta.description} />
					)}
					{meta.url && <meta property='og:url' content={meta.url} />}
					{meta.image && <meta property='og:image' content={meta.image} />}

					{meta.other &&
						meta.other.map((item) => <meta name={item.name} content={item.content} />)}
				</Fragment>
			)}

			<Wrapper className={styles['wrapper']} fullWidth>
				{heading && (
					<StandardSection className='heading-section'>{heading}</StandardSection>
				)}
				{children}
			</Wrapper>
		</main>
	);
}
