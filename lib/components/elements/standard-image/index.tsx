import { ImgHTMLAttributes } from 'react';

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
}

export function StandardImage({ className, src, options = {}, ...properties }: Properties) {
	const { width, height, fit, position, format, quality = 90 } = options;

	const imageURL = `/.netlify/images/?url=${src}&q=${quality}${width ? `&w=${width}` : ''}${
		height ? `&h=${height}` : ''
	}${fit ? `&fit=${fit}` : ''}${position ? `&postition=${position}` : ''}${
		format ? `&fm=${format}` : ''
	}`;

	return (
		<img
			className={`standard-component image ${className || ''}`}
			src={import.meta.env.NETLIFY ? imageURL : src}
			{...properties}
		/>
	);
}
