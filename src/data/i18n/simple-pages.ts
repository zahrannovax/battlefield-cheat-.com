import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'AWS & Cloud-DMA',
				paragraphs: [
					'Choose your delivery method — AWS cloud or Cloud-DMA hardware.',
					'AWS runs without any hardware. Cloud-DMA uses a physical DMA card for a more hardware-separated setup.',
				],
				list: ['AWS — cloud option', 'Cloud-DMA — DMA option', 'Both unlock full features'],
			},
			{
				h2: 'Aimbot',
				paragraphs: [
					'Aimbot controls you can tune to feel natural in Battlefield 6.',
					'Set FOV, aim priority, and aim lock before you queue.',
				],
				list: ['Enable / Disable toggle', 'Aim Priority', 'Aim Lock', 'Draw FOV', 'FOV control'],
			},
			{
				h2: 'ESP',
				paragraphs: [
					'Multiple ESP modes so you can pick the overlay that fits your style.',
					'Use Box or Skeleton for quick reads, Health Bar to track fights at a distance.',
				],
				list: ['Box ESP', 'Filled Box', 'Skeleton', 'Health Bar'],
			},
			{
				h2: 'Updates, support & StreamProof',
				paragraphs: [
					'We rebuild after {game} or {antiCheat} patches. Check Status before you queue after a patch.',
					'StreamProof keeps the overlay hidden from capture software. 24/7 Discord support included.',
				],
				list: ['Regular Updates', '24/7 Discord support', 'StreamProof', 'Status page for live build status'],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same AWS, Cloud-DMA, ESP, and aimbot on monthly and lifetime plans.',
				],
				list: ['AWS & Cloud-DMA options', 'ESP and aimbot', 'StreamProof & 24/7 support', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license after checkout'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the refund policy if you need it. Contact support on Discord with your order ID for help.'],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Battlefield 6 Cheats overview',
		ctaSecondaryHref: '/battlefield-6-cheats/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 20 Aug 2026 the package is online for Battlefield 6 on Windows PC. We post a new note here when a game or {antiCheat} patch needs a rebuild.',
					'If Status is green, you can queue. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every match after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Join Discord with your order ID for help'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Battlefield 6 Cheats',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'One license for Battlefield 6 on Windows PC — AWS cloud or Cloud-DMA, plus ESP and aimbot.',
				],
				list: [
					'AWS — cloud option',
					'Cloud-DMA — DMA hardware option',
					'ESP (Box, Filled Box, Skeleton, Health Bar)',
					'Aimbot (Enable, Aim Priority, Aim Lock, Draw FOV, FOV)',
					'StreamProof',
					'{antiCheat} rebuilds after patches',
				],
			},
			{
				h2: 'Built for Battlefield 6',
				paragraphs: [
					'Read enemy positions before you push, hold objectives with ESP advantage, and stay ahead of flanks. Tune aim priority and FOV to keep your gameplay looking natural.',
				],
				list: [
					'<a href="/battlefield-6-esp/">ESP guide</a>',
					'<a href="/battlefield-6-aimbot/">Aimbot controls</a>',
					'<a href="/bf6-dma-cheats/">Cloud-DMA option</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: ['Buy a plan, get your license by email, then follow setup. Check Status after every major patch.'],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Check status</a>',
				],
			},
		],
	}),
	'bf6-esp': page({
		title: 'Battlefield 6 ESP | {brand}',
		description:
			'Battlefield 6 ESP for Windows PC — player boxes, filled box, skeleton, and health bar overlays during matches.',
		h1: 'ESP',
		intro: 'See enemies through walls during Battlefield 6 matches. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Battlefield 6 Cheats overview',
		ctaSecondaryHref: '/battlefield-6-cheats/',
		galleryTitle: 'ESP in match',
		sections: [
			{
				h2: 'ESP modes',
				paragraphs: ['Box, Filled Box, Skeleton, and Health Bar — switch modes to match your playstyle.'],
				list: ['Box ESP', 'Filled Box', 'Skeleton', 'Health Bar'],
			},
			{
				h2: 'When to use it',
				paragraphs: ['Clear buildings, hold objectives, and read flanks without flooding the screen.'],
				list: ['Tune opacity', 'Filter by team', 'Pair with aimbot'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['ESP is included with aimbot and Cloud-DMA in one plan.'],
				list: [
					'<a href="/battlefield-6-cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'bf6-aimbot': page({
		title: 'Battlefield 6 Aimbot | {brand}',
		description:
			'Battlefield 6 aimbot for Windows PC — Enable, Aim Priority, Aim Lock, Draw FOV, and FOV controls you can tune.',
		h1: 'Aimbot',
		intro: 'Aimbot controls you can tune for Battlefield 6. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Battlefield 6 Cheats overview',
		ctaSecondaryHref: '/battlefield-6-cheats/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: ['Set Aim Priority, Aim Lock, FOV, and Draw FOV before you queue.'],
				list: ['Enable / Disable', 'Aim Priority', 'Aim Lock', 'Draw FOV', 'FOV control'],
			},
			{
				h2: 'Play styles',
				paragraphs: ['Keep settings subtle for longer sessions. Raise strength only when you accept more risk.'],
				list: ['Legit aim lock', 'Per-match tuning', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with ESP and Cloud-DMA in one license.'],
				list: [
					'<a href="/battlefield-6-cheats/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'BF6 DMA Cheats | {brand}',
		description:
			'BF6 DMA cheats — Cloud-DMA hardware option for Battlefield 6 on Windows PC. A more hardware-separated approach alongside our AWS cloud solution.',
		h1: 'Cloud-DMA',
		intro: 'A hardware-based DMA option for Battlefield 6. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Battlefield 6 Cheats overview',
		ctaSecondaryHref: '/battlefield-6-cheats/',
		galleryTitle: 'DMA overview',
		sections: [
			{
				h2: 'What it is',
				paragraphs: ['Cloud-DMA runs via a physical DMA card for a hardware-separated setup. The AWS option runs without extra hardware.'],
				list: ['Hardware-separated approach', 'DMA card required', 'Same ESP and aimbot features'],
			},
			{
				h2: 'With ESP & Aimbot',
				paragraphs: ['Both delivery options unlock the full ESP and aimbot feature set.'],
				list: [
					'<a href="/battlefield-6-esp/">ESP guide</a>',
					'<a href="/battlefield-6-cheats/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: ['Buy a plan first. You get a license by email after checkout.'],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the loader as admin, paste your license, then launch {game}.'],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check Status after a patch. Join Discord with your order ID for help.'],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: 'Buy Now',
		ctaSecondary: 'Discord',
		ctaSecondaryHref: 'https://discord.gg/t6n2cUNkPT',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Join our Discord server and open a support ticket. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check FAQ and Status before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: ['Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
