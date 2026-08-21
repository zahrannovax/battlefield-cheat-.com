/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'battlefield 6 cheats',
	/** Short product label if needed */
	shortName: 'bf6 cheats',
	/** Canonical origin — no trailing slash */
	url: 'https://battlefieldcheat.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: '',
	/** Discord invite link — used in place of support email */
	discordUrl: 'https://discord.gg/t6n2cUNkPT',
	checkoutUrl: 'https://zadeyo.com/go/ZAHRAN?to=%2Fproducts%2FBF6',

	/** Game this template instance targets */
	game: 'Battlefield 6',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'EA Javelin',

	logo: '/images/zadeyo-logo.webp',
	logoRaster: '/images/zadeyo-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'battlefield 6 cheats logo',
	defaultOgImage: '/images/hero-banner-new-1.png',
	heroImage: '/images/hero-banner-new-1.png',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#f97316',
		bg: '#0a0805',
		soft: '#fb923c',
		deep: '#c2410c',
		hover: '#ea6d0e',
		panel: '#0c0905',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'battlefield 6 cheats',
		list: [
			'battlefield 6 cheats',
			'battlefield 6 hacks',
			'bf6 dma cheats',
			'battlefield 6 esp',
			'battlefield 6 aimbot',
			'undetected battlefield 6 cheats',
			'bf6 cheats',
			'bf6 hacks',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {discord} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /battlefield-6-cheats/ owns the head term. */
		homeTitle: 'Battlefield 6 Cheats | Official Windows PC Site',
		homeDescription:
			'Official battlefield 6 cheats site for Windows PC. Compare features, store plans, and live status — then buy ESP, aimbot, and DMA options in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — AWS cloud, Cloud-DMA, ESP, aimbot, and {antiCheat} patch updates. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. AWS and Cloud-DMA options, ESP, and aimbot on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue on Windows PC today.',
		/** Money page meta — primary target for "battlefield 6 cheats". */
		previewTitle: 'Battlefield 6 Cheats | Undetected ESP & Aimbot',
		previewDescription:
			'Buy undetected battlefield 6 cheats for Windows PC. AWS, Cloud-DMA, ESP, aimbot, and EA Javelin patch updates in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can play faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Join our Discord server for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Battlefield 6 — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, aimbot, DMA options, and patch updates for Battlefield 6 on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — map tips, ESP, aimbot, DMA options, and {antiCheat} update coverage for Windows PC players.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
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
		previewIntro:
			'{brand} for Battlefield 6 — ESP, aimbot, AWS cloud, Cloud-DMA, and {antiCheat} rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Join our Discord server for fast support.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, aimbot, DMA, and support.',
		chipEsp: 'ESP / boxes',
		chipAim: 'Aimbot',
		chipRadar: 'Cloud-DMA',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {discord} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-20',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/hero-banner-new-1.png',
				title: 'battlefield 6 cheats hero',
				caption: 'battlefield 6 cheats ESP and aimbot on Windows PC',
			},
			{
				src: '/images/hero-banner-new-1.png',
				title: 'battlefield 6 cheats preview',
				caption: 'battlefield 6 cheats — AWS, Cloud-DMA, ESP, aimbot',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {discord} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.discordUrl)
		.replaceAll('{discord}', brand.discordUrl)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
