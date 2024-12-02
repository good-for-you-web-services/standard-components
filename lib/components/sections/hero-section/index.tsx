import { useMediaQuery } from '@uidotdev/usehooks';
import { type HTMLAttributes, type ReactElement } from 'react';
import { Combine } from '../../../functions/combine';
import { Wrapper } from '../../wrappers/wrapper';
import styles from './styles.module.scss';

interface Properties extends HTMLAttributes<HTMLBaseElement> {
	heading?: ReactElement;
	wideLayoutBreakpoint?: string;
}

export function HeroSection({
	children,
	className,
	heading,
	wideLayoutBreakpoint = '1024px',
	...properties
}: Properties) {
	const isWideLayout = useMediaQuery(`only screen and (min-width: ${wideLayoutBreakpoint})`);

	return (
		<section
			className={Combine([
				'standard-component',
				'section',
				'hero-section',
				styles['hero-section'],
				className,
			])}
			data-layout={!isWideLayout ? 'narrow' : 'wide'}
			{...properties}
		>
			<Wrapper>
				{heading}
				<div className='section-content'>{children}</div>
			</Wrapper>
		</section>
	);
}
