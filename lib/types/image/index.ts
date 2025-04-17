export interface ImageOptions {
	width?: number;
	height?: number;
	fit?: 'contain' | 'cover' | 'fill';
	position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
	format?: 'avif' | 'jpg' | 'png' | 'webp' | 'gif' | 'blurhash';
	quality?: number;
}
