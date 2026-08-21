import { brand, fillBrandTokens, seoDescription, seoTitle } from './brand';

/**
 * Title clamp lives here — NOT in brand.ts.
 * Brand Studio rewrites brand.ts on every save; helpers here stay stable.
 */
export function seoPageTitle(template: string): string {
	const text = fillBrandTokens(template).trim();
	/** Google SERP titles typically display ~50–60 chars; clamp at 60. */
	return text.length <= 60 ? text : `${text.slice(0, 57).trim()}…`;
}

export { brand, fillBrandTokens, seoDescription, seoTitle };

const copyDefaults = {
	tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and DMA for PC',
	summary:
		'{brand} is an undetected {game} cheat package for Windows PC. Includes AWS cloud, Cloud-DMA, ESP, and aimbot, with {antiCheat} maintenance after patches.',
	heroLede: 'Undetected ESP, aimbot, and DMA options for Battlefield 6 on Windows PC.',
	blogLabel: 'BF6 Intel',
	ctaBuy: 'Get Access',
	ctaBuyShort: 'Buy',
	featuresIntro: 'Everything included in one license for {game} on Windows PC.',
	storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
	statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
	previewIntro: '{brand} for Battlefield 6 — ESP, aimbot, AWS cloud, Cloud-DMA, and {antiCheat} rebuilds after patches.',
	setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
	supportIntro: 'Need help with {brand}? Join our Discord server for fast support.',
	faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
	reviewsIntro: 'Real feedback from {brand} buyers — ESP, aimbot, DMA, and support.',
	chipEsp: 'ESP / boxes',
	chipAim: 'Aimbot',
	chipRadar: 'Cloud-DMA',
	chipUpdates: 'Patch updates',
	navPreview: 'Cheats',
	navFeatures: 'Features',
	navStore: 'Store',
	navStatus: 'Status',
	navReviews: 'Reviews',
} as const;

const seoDefaults = {
	homeTitle: 'Battlefield 6 Cheats | Official Windows PC Site',
	homeDescription:
		'{primaryKeyword} for Windows PC — AWS, Cloud-DMA, ESP, and aimbot with {antiCheat} maintenance. Compare plans and buy.',
	featuresTitle: '{game} Features | {brand}',
	featuresDescription:
		'Everything in one {game} license for Windows PC — AWS cloud, Cloud-DMA, ESP, aimbot, and patch updates.',
	storeTitle: '{game} Store | {brand}',
	storeDescription: 'Monthly and lifetime {game} plans. Same features. Instant delivery after payment.',
	statusTitle: '{game} Status | {brand}',
	statusDescription:
		'Live status for {brand} after {game} or {antiCheat} patches. Check before you queue.',
	previewTitle: 'Battlefield 6 Cheats | Undetected ESP & Aimbot',
	previewDescription:
		'Buy undetected battlefield 6 cheats for Windows PC. AWS, Cloud-DMA, ESP, aimbot, and EA Javelin patch updates in one license.',
	setupTitle: '{game} Setup | {brand}',
	setupDescription: 'Install and launch {brand} on Windows PC. Short setup steps after you buy.',
	supportTitle: '{game} Support | {brand}',
	supportDescription: 'Get help with {brand}. Join our Discord server with your order ID.',
	faqTitle: '{game} FAQ | {brand}',
	faqDescription: 'Short answers about {brand} — delivery, setup, updates, and refunds.',
	reviewsTitle: '{brand} Reviews | Buyer Feedback',
	reviewsDescription:
		'Real buyer reviews for {brand} — ESP, aimbot, DMA, and patch updates for Battlefield 6 on Windows PC.',
	blogTitle: '{game} Intel | {brand}',
	blogDescription: 'Guides and notes for {game} — map tips, ESP, aimbot, DMA, and {antiCheat} updates.',
} as const;

type SeoShape = typeof seoDefaults;
type CopyShape = typeof copyDefaults;

/** Always-safe copy/seo — Brand Studio saves must never crash the site. */
const brandExtra = brand as typeof brand & { seo?: Partial<SeoShape>; copy?: Partial<CopyShape> };
export const brandSeo: SeoShape = { ...seoDefaults, ...brandExtra.seo };
export const brandCopy: CopyShape = { ...copyDefaults, ...brandExtra.copy };

/** Resolved EN home meta */
export function homeSeo() {
	return {
		title: seoPageTitle(brandSeo.homeTitle),
		description: seoDescription(brandSeo.homeDescription),
	};
}

/** Site config derived from brand — import this in layouts/components. */
export const siteConfig = {
	name: brand.name,
	url: brand.url,
	locale: brand.locale,
	market: brand.market,
	supportEmail: brand.supportEmail,
	logo: brand.logo,
	logoRaster: brand.logoRaster,
	logoRasterWidth: brand.logoRasterWidth,
	logoRasterHeight: brand.logoRasterHeight,
	logoAlt: brand.logoAlt,
	checkoutUrl: brand.checkoutUrl,
	defaultOgImage: brand.defaultOgImage,
	heroImage: brand.heroImage,
} as const;

/** Prefer brand.keywords — kept for Layout meta keywords. */
export const seoKeywords = brand.keywords.list;

/** Blog eyebrow / title suffix */
export const blogLabel = fillBrandTokens(brandCopy.blogLabel);

export const productInfo = {
	name: brand.name,
	shortName: brand.game,
	brand: brand.name,
	tagline: fillBrandTokens(brandCopy.tagline),
	summary: fillBrandTokens(brandCopy.summary),
	game: brand.game,
	delivery: 'Digital license delivery after purchase confirmation',
	platforms: [...brand.platforms],
	updateCadence: fillBrandTokens(
		'Updates are published when {game} or {antiCheat} patches need a rebuild',
	),
	supportHours: '24/7 support via Discord',
	plans: brand.plans.map((p) => ({ ...p })),
	currency: brand.currency,
	heroLede: fillBrandTokens(brandCopy.heroLede),
	features: {
		delivery: [
			'AWS — cloud option',
			'Cloud-DMA — DMA option',
		],
		aimbot: [
			'Aimbot — Enable',
			'Aim Priority',
			'Aim Lock',
			'Draw FOV',
			'FOV control',
		],
		esp: [
			'ESP — Box',
			'Filled Box',
			'Skeleton',
			'Health Bar',
		],
		general: [
			'Regular Updates',
			'24/7 Support',
			'StreamProof',
			fillBrandTokens('{antiCheat} maintenance after patches'),
			'Digital delivery after checkout',
		],
	},
} as const;
