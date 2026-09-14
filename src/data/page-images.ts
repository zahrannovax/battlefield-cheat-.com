import { siteConfig } from './site';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

const HERO = '/images/hero-banner-new-2.png';
const LOGO = '/images/navbar-logo.webp';

/** Existing on-disk photos only — missing files 404 in Search Console. */
export const crawlPhotoPool = [HERO, LOGO] as const;

/**
 * One primary crawl/OG photo per product page.
 * All paths must exist in /public.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: HERO,
	'bf6-esp': HERO,
	'bf6-aimbot': HERO,
	features: HERO,
	pricing: HERO,
	setup: HERO,
	updates: HERO,
	faq: HERO,
	support: HERO,
	undetected: HERO,
	wallhack: HERO,
	radar: HERO,
	javelin: HERO,
	'cheats-2026': HERO,
	hacks: HERO,
	'cheat-download': HERO,
	'mod-menu': HERO,
	'soft-aim': HERO,
	'best-cheats': HERO,
	'aimbot-hack': HERO,
	'esp-hack': HERO,
	'unlock-all': HERO,
	privacy: HERO,
	refund: HERO,
	terms: HERO,
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
