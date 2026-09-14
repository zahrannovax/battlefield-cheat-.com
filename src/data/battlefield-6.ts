import { siteConfig } from './site';

const HERO = '/images/hero-banner-new-2.png';
const LOGO = '/images/navbar-logo.webp';

/** Product screenshots — only files that exist in /public/images. */
export const tarkovImages = {
	hero: HERO,
	espWallhack: HERO,
	aimbotCombat: HERO,
	aimbotSkeleton: HERO,
	playerEsp: HERO,
	cheatsCombat: HERO,
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases */
	cover: HERO,
	loadoutBuilder: HERO,
	squadFight: HERO,
	cheatsPackage: HERO,
	headerArt: HERO,
	battleRoyaleCombat: HERO,
	extractFight: HERO,
	rebootFight: HERO,
	scavRunCombat: HERO,
	scavRunMode: HERO,
	battleRoyaleIsland: HERO,
	raidMap: HERO,
	product: [
		{ src: HERO, alt: 'Battlefield 6 cheats ESP overlay' },
		{ src: LOGO, alt: 'Battlefield 6 Cheats logo' },
		{ src: HERO, alt: 'Battlefield 6 cheats on Windows PC' },
	],
	gallery: [
		{ src: HERO, alt: 'Battlefield 6 cheats ESP boxes', featured: true },
		{ src: LOGO, alt: 'Battlefield 6 Cheats brand mark' },
		{ src: HERO, alt: 'Battlefield 6 cheats in-match overlay' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 */
	sitemap: [
		{ src: HERO, title: '', caption: '' },
		{ src: LOGO, title: '', caption: '' },
	],
} as const;
