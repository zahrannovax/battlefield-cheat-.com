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
		{ src: '/images/bf6-ingame-1.webp', alt: 'Battlefield 6 ESP boxes and player tags in a match', width: 2553, height: 1439 },
		{ src: '/images/bf6-ingame-2.webp', alt: 'Battlefield 6 aim view with the scoreboard and minimap', width: 1920, height: 1080 },
		{ src: '/images/bf6-ingame-3.webp', alt: 'Battlefield 6 wallhack boxes on players through a wall', width: 2557, height: 1432 },
	],
	gallery: [
		{ src: '/images/bf6-ingame-1.webp', alt: 'Battlefield 6 ESP boxes and player tags in a match', width: 2553, height: 1439, featured: true },
		{ src: '/images/bf6-ingame-2.webp', alt: 'Battlefield 6 aim view with the scoreboard and minimap', width: 1920, height: 1080 },
		{ src: '/images/bf6-ingame-3.webp', alt: 'Battlefield 6 wallhack boxes on players through a wall', width: 2557, height: 1432 },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 */
	sitemap: [
		{ src: HERO, title: '', caption: '' },
		{ src: LOGO, title: '', caption: '' },
	],
} as const;
