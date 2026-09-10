/**
 * Responsive image helpers — prefer compressed WebP for LCP and below-fold media.
 */

export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

export function contentSrcSet(baseSrc: string): string | undefined {
	return undefined;
}

/**
 * Homepage hero — native-resolution ladder from hero-banner-new-2.png (1671×941).
 * Desktop uses the PNG master so the banner stays sharp.
 */
export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/images/hero-banner-960.webp', width: 960 },
	{ src: '/images/hero-banner-1280.webp', width: 1280 },
	{ src: '/images/hero-banner-new-2.png', width: 1671 },
];

export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

/** Default LCP src — original PNG. */
export const heroSrc = '/images/hero-banner-new-2.png';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes = '100vw';

/** LCP preload — same master PNG. */
export const heroPreloadSrc = heroSrc;
export const heroMimeType = 'image/png';

/** Native art dimensions. */
export const heroWidth = 1671;
export const heroHeight = 941;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
