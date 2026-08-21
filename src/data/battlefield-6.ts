import { siteConfig } from './site';

/** Product screenshots — BF6 images will be added when provided. */
export const tarkovImages = {
	hero: '/images/hero-banner-new-1.png',
	espWallhack: '/images/hero-banner-new-1.png',
	aimbotCombat: '/images/hero-banner-new-1.png',
	aimbotSkeleton: '/images/hero-banner-new-1.png',
	playerEsp: '/images/hero-banner-new-1.png',
	cheatsCombat: '/images/hero-banner-new-1.png',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases */
	cover: '/images/hero-banner-new-1.png',
	loadoutBuilder: '/images/hero-banner-new-1.png',
	squadFight: '/images/hero-banner-new-1.png',
	cheatsPackage: '/images/hero-banner-new-1.png',
	headerArt: '/images/hero-banner-new-1.png',
	battleRoyaleCombat: '/images/hero-banner-new-1.png',
	extractFight: '/images/hero-banner-new-1.png',
	rebootFight: '/images/hero-banner-new-1.png',
	scavRunCombat: '/images/hero-banner-new-1.png',
	scavRunMode: '/images/hero-banner-new-1.png',
	battleRoyaleIsland: '/images/hero-banner-new-1.png',
	raidMap: '/images/hero-banner-new-1.png',
	product: [
		{ src: '/images/hack-preview-image-1.webp', alt: 'Battlefield 6 cheats ESP overlay' },
		{ src: '/images/hack-preview-image-2.webp', alt: 'Battlefield 6 cheats aimbot view' },
		{ src: '/images/hack-preview-image-3.webp', alt: 'Battlefield 6 Cloud-DMA option' },
		{ src: '/images/hack-preview-image-1.webp', alt: 'Battlefield 6 cheats AWS option' },
		{ src: '/images/hack-preview-image-2.webp', alt: 'Battlefield 6 cheats features overview' },
		{ src: '/images/hack-preview-image-3.webp', alt: 'Battlefield 6 cheats StreamProof' },
	],
	gallery: [
		{ src: '/images/hack-preview-image-1.webp', alt: 'Battlefield 6 cheats ESP boxes', featured: true },
		{ src: '/images/hack-preview-image-2.webp', alt: 'Battlefield 6 aimbot FOV ring' },
		{ src: '/images/hack-preview-image-3.webp', alt: 'Battlefield 6 Cloud-DMA overlay' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/hero-banner-new-1.png', title: '', caption: '' },
		{ src: '/images/hero-banner-new-1.png', title: '', caption: '' },
	],
} as const;
