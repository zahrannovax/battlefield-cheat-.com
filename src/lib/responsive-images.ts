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
 * Homepage / banner hero — compressed WebP ladder (not the 375KB+ PNG master).
 * Native art ~1024×409 (~2.5:1).
 */
export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/images/hero-banner-1536.webp', width: 1536 },
	{ src: '/images/hero-banner-1024.webp', width: 1024 },
	{ src: '/images/hero-banner-768.webp', width: 768 },
];

export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

/** Default LCP src — mid ladder WebP (~56KB). */
export const heroSrc = '/images/hero-banner-1024.webp';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes = '(max-width: 900px) 100vw, 1536px';

/** LCP preload — same compressed WebP. */
export const heroPreloadSrc = heroSrc;
export const heroMimeType = 'image/webp';

/** Exact native dimensions (no zoom crop). */
export const heroWidth = 1024;
export const heroHeight = 409;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
