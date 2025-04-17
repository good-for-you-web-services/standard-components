import type { ImageOptions } from '../../types/image';

export function getImageSrcFromOptions(image: string, options: ImageOptions) {
	const { width, height, fit, position, format, quality = 90 } = options;
	const imageURL =
		`/.netlify/images/?url=${image}&q=${quality}` +
		`${width ? `&w=${width}` : ''}` +
		`${height ? `&h=${height}` : ''}` +
		`${fit ? `&fit=${fit}` : ''}` +
		`${position ? `&postition=${position}` : ''}` +
		`${format ? `&fm=${format}` : ''}`;

	return imageURL;
}
