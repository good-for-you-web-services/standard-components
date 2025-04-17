import { ImgHTMLAttributes, type CSSProperties } from 'react';
import type { ImageOptions } from '../../../types/image';
import { getImageSrcFromOptions } from '../../../utilities/image';
import styles from './style.module.scss';

interface Properties extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	options?: ImageOptions;
	aspect?: number | 'none';
}

export function StandardImage({
	src,
	options = {},
	aspect = 'none',
	className,
	loading = 'lazy',
	...properties
}: Properties) {
	const imageURL = getImageSrcFromOptions(src, options);

	return (
		<img
			className={`standard-component image ${styles['image']} ${className || ''}`}
			src={process.env.NETLIFY ? imageURL : src}
			loading={loading}
			style={{ '--aspect-ratio': aspect } as CSSProperties}
			{...properties}
		/>
	);
}
