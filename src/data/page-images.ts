import { siteConfig } from './site';
import { tarkovImages } from './battlefield-6';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	'/images/hack-preview-image-1.webp',
	'/images/hack-preview-image-2.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/hack-preview-image-1.webp',
	'bf6-esp': '/images/hack-preview-image-2.webp',
	'bf6-aimbot': '/images/hack-preview-image-3.webp',
	features: '/images/hack-preview-image-1.webp',
	pricing: '/images/hack-preview-image-2.webp',
	setup: '/images/hack-preview-image-3.webp',
	updates: '/images/blog-image-1.jpg',
	faq: '/images/blog-image-2.jpg',
	support: '/images/blog-image-3.webp',
	undetected: '/images/blog-image-4.avif',
	wallhack: '/images/blog-image-5.jpg',
	radar: '/images/blog-image-6.jpg',
	javelin: '/images/blog-image-7.webp',
	'cheats-2026': '/images/blog-image-8.webp',
	hacks: '/images/blog-image-9.webp',
	'cheat-download': '/images/hack-preview-image-1.webp',
	'mod-menu': '/images/hack-preview-image-2.webp',
	'soft-aim': '/images/hack-preview-image-3.webp',
	'best-cheats': '/images/blog-image-1.jpg',
	'aimbot-hack': '/images/blog-image-2.jpg',
	'esp-hack': '/images/blog-image-3.webp',
	'unlock-all': '/images/blog-image-4.avif',
	privacy: '/images/hack-preview-image-1.webp',
	refund: '/images/hack-preview-image-2.webp',
	terms: '/images/hack-preview-image-3.webp',
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
