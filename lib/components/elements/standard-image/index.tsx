import { ImgHTMLAttributes, type CSSProperties } from 'react';
import styles from './style.module.scss';

interface Properties extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	options?: {
		width?: number;
		height?: number;
		fit?: 'contain' | 'cover' | 'fill';
		position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
		format?: 'avif' | 'jpg' | 'png' | 'webp' | 'gif' | 'blurhash';
		quality?: number;
	};
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
	const { width, height, fit, position, format, quality = 90 } = options;
	const imageURL =
		`/.netlify/images/?url=${src}&q=${quality}` +
		`${width ? `&w=${width}` : ''}` +
		`${height ? `&h=${height}` : ''}` +
		`${fit ? `&fit=${fit}` : ''}` +
		`${position ? `&postition=${position}` : ''}` +
		`${format ? `&fm=${format}` : ''}`;

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
