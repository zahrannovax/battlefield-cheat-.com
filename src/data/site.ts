export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/battlefield-6-cheats/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/battlefield-6-cheats/' },
	{ label: fillBrandTokens('{game} esp'), href: '/battlefield-6-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/battlefield-6-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/battlefield-6-cheats/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/battlefield-6-wallhack/' },
	{ label: fillBrandTokens('bf6 dma cheats'), href: '/bf6-dma-cheats/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/battlefield-6-cheats/' },
	{ label: 'Aimbot', href: '/battlefield-6-aimbot/' },
	{ label: 'ESP', href: '/battlefield-6-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} cheats pillar'), href: '/battlefield-6-cheats/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/battlefield-6-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/battlefield-6-aimbot/' },
	{ label: fillBrandTokens('BF6 DMA cheats'), href: '/bf6-dma-cheats/' },
	{ label: fillBrandTokens('Full {game} feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for Battlefield 6 on Windows PC. It includes AWS cloud, Cloud-DMA, ESP, and aimbot controls, with {antiCheat} maintenance after patches and 24/7 Discord support.',
		slug: 'what-are-battlefield-6-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, aimbot, AWS, and Cloud-DMA for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-battlefield-6-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'What delivery options are available?',
		answer:
			'{brand} offers two options — AWS cloud and Cloud-DMA. AWS is a software-based cloud solution. Cloud-DMA runs via a hardware DMA card. Both unlock the same ESP and aimbot features.',
		slug: 'aws-vs-cloud-dma-options',
		seoTitle: 'AWS vs Cloud-DMA Options | FAQ',
		seoDescription:
			'{brand} offers AWS cloud and Cloud-DMA options for Battlefield 6 on Windows PC — both include ESP and aimbot.',
	}),
	faq({
		question: 'What is included — ESP, aimbot, or DMA?',
		answer:
			'{brand} bundles AWS cloud, Cloud-DMA, ESP (Box, Filled Box, Skeleton, Health Bar), and aimbot (Enable, Aim Priority, Aim Lock, Draw FOV, FOV) in one license. Plus StreamProof and 24/7 support. See Features for the full list.',
		slug: 'esp-aimbot-dma-included',
		seoTitle: 'What Is Included: ESP, Aimbot, DMA | FAQ',
		seoDescription:
			'One {brand} license includes AWS, Cloud-DMA, ESP, aimbot, StreamProof, and 24/7 support for Battlefield 6 on Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a Battlefield 6 or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a Battlefield 6 or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or join our Discord server. Include your order details and a clear description of the issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or Discord with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows enemy players through walls. {brand} includes Box, Filled Box, Skeleton, and Health Bar ESP modes with toggleable categories.',
		slug: 'what-is-a-battlefield-6-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals enemies through walls — with Box, Filled Box, Skeleton, and Health Bar modes.',
	}),
	faq({
		question: 'Does {brand} include Cloud-DMA?',
		answer:
			'Yes. {brand} includes a Cloud-DMA option that runs via a hardware DMA card — offering a more hardware-separated approach alongside the standard AWS cloud option.',
		slug: 'does-bf6-cheats-include-cloud-dma',
		seoTitle: 'Does {brand} Include Cloud-DMA? | FAQ',
		seoDescription:
			'Yes — {brand} includes Cloud-DMA as a hardware-based option alongside the AWS cloud solution for Battlefield 6.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
		slug: 'ea-javelin-and-battlefield-6-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with AWS, Cloud-DMA, ESP, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-battlefield-6-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — AWS, Cloud-DMA, ESP, and aimbot in one stack. Compare pricing before checkout.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0_BF6',
		rating: 5,
		text: 'The aimbot in battlefield 6 cheats feels smooth on conquest. Aim Lock is clean. After a couple of matches I had the FOV dialed in perfectly.',
		short: 'The aimbot feels smooth. Aim Lock is clean on conquest.',
		slug: 'bf6-aimbot-review-xkrypt0',
		seoTitle: 'Aimbot Review by @xKrypt0_BF6 — 5/5 | {brand}',
		seoDescription: '@xKrypt0_BF6 rates {brand} aimbot 5/5 for conquest on Windows PC.',
		date: '2026-07-24',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'DMA_Wizard99',
		rating: 5,
		text: 'Cloud-DMA option is exactly what I needed. Setup was straightforward, and it stayed up after the last EA Javelin update when my old tool failed. Lifetime was a great buy.',
		short: 'Cloud-DMA stayed up after the last EA Javelin update. Lifetime was a great buy.',
		slug: 'bf6-cloud-dma-review-dma-wizard99',
		seoTitle: 'Cloud-DMA Review by @DMA_Wizard99 — 5/5 | {brand}',
		seoDescription: '@DMA_Wizard99 rates {brand} Cloud-DMA 5/5 after an {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Cloud-DMA',
	}),
	reviewMeta({
		handle: 'ctrl_player88',
		rating: 4,
		text: 'The ESP boxes and skeleton view are really clean. Health bars make reading engagements much easier. Menu is clear and easy to use.',
		short: 'ESP boxes and skeleton view are clean. Health bars help a lot.',
		slug: 'bf6-esp-review-ctrl-player88',
		seoTitle: 'ESP Review by @ctrl_player88 — 4/5 | {brand}',
		seoDescription: '@ctrl_player88 rates {brand} ESP 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'stormBF6_07',
		rating: 4,
		text: 'battlefield 6 cheats works well once it is running. First launch took a few minutes but support on Discord replied fast. StreamProof works perfectly for my streams.',
		short: 'StreamProof works perfectly. Discord support replied fast.',
		slug: 'bf6-streamproof-review-stormbf6',
		seoTitle: 'StreamProof Review by @stormBF6_07 — 4/5 | {brand}',
		seoDescription: '@stormBF6_07 rates {brand} StreamProof 4/5. Discord support was fast after setup.',
		date: '2026-06-15',
		tag: 'StreamProof',
	}),
	reviewMeta({
		handle: 'AWSRulez',
		rating: 5,
		text: 'AWS option is clean and runs without any hardware. Paired with the ESP it is a complete package for Battlefield 6. Bought monthly to try, going lifetime next.',
		short: 'AWS option is clean and runs without hardware.',
		slug: 'bf6-aws-review-awsrulez',
		seoTitle: 'AWS Review by @AWSRulez — 5/5 | {brand}',
		seoDescription: '@AWSRulez rates {brand} AWS option 5/5 for Battlefield 6 on Windows PC.',
		date: '2026-08-01',
		tag: 'AWS',
	}),
	reviewMeta({
		handle: 'rankedGrind_BF6',
		rating: 4,
		text: 'I switched from another tool to battlefield 6 cheats. The Aim Priority and Draw FOV settings are great for keeping things subtle. Status updates after EA Javelin patches are prompt.',
		short: 'Aim Priority and Draw FOV settings are great for subtle play.',
		slug: 'bf6-aimbot-review-rankedgrindbf6',
		seoTitle: 'Aim Priority Review by @rankedGrind_BF6 — 4/5 | {brand}',
		seoDescription: '@rankedGrind_BF6 rates {brand} aimbot 4/5 for ranked on Windows PC.',
		date: '2026-07-07',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'patchDayPro',
		rating: 4,
		text: 'Most tools go down on patch day. battlefield 6 cheats posted on the status page within hours and was back the next morning. Support on Discord was helpful.',
		short: 'battlefield 6 cheats was back the morning after a patch.',
		slug: 'bf6-update-review-patchdaypro',
		seoTitle: 'Status Review by @patchDayPro — 4/5 | {brand}',
		seoDescription: '@patchDayPro rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'espSniper_',
		rating: 5,
		text: 'Skeleton ESP plus aimbot in battlefield 6 cheats is excellent for long-range engagements. Simple settings, strong results.',
		short: 'Skeleton ESP plus aimbot is excellent for long range.',
		slug: 'bf6-skeleton-esp-review-espsniper',
		seoTitle: 'Skeleton ESP by @espSniper_ — 5/5 | {brand}',
		seoDescription: '@espSniper_ rates {brand} skeleton ESP 5/5 with aimbot on Windows PC.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'bf6_rush_only',
		rating: 5,
		text: 'Using battlefield 6 cheats on Rush mode is just incredible. The wallhack gives you full vision on defenders and the aimbot holds steady under fire. Worth every dollar.',
		short: 'Wallhack on Rush mode is incredible. Aimbot holds steady.',
		slug: 'bf6-rush-review-bf6rushonly',
		seoTitle: 'Rush Mode Review by @bf6_rush_only — 5/5 | {brand}',
		seoDescription: '@bf6_rush_only rates {brand} 5/5 for Rush mode play on Windows PC.',
		date: '2026-08-03',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'QuietPeak99',
		rating: 4,
		text: 'Very smooth setup compared to other tools I have tried. The radar overlay is compact and clean. Would love a minimap mode but overall really solid.',
		short: 'Smooth setup, compact radar overlay. Very solid overall.',
		slug: 'bf6-radar-review-quietpeak99',
		seoTitle: 'Radar Review by @QuietPeak99 — 4/5 | {brand}',
		seoDescription: '@QuietPeak99 rates {brand} radar 4/5 on Windows PC.',
		date: '2026-07-29',
		tag: 'Radar',
	}),
	reviewMeta({
		handle: 'hardpoint_hunterX',
		rating: 5,
		text: 'Perfect for competitive modes. Loot ESP helps me prioritise ammo and med kits fast. Aimbot smoothness is configurable enough to not look obvious in killcams.',
		short: 'Loot ESP and configurable aimbot smoothness are excellent.',
		slug: 'bf6-competitive-review-hardpointhunterx',
		seoTitle: 'Competitive Review by @hardpoint_hunterX — 5/5 | {brand}',
		seoDescription: '@hardpoint_hunterX rates {brand} 5/5 for competitive Battlefield 6 on PC.',
		date: '2026-07-18',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'zer0_recoil_bf',
		rating: 5,
		text: 'battlefield 6 cheats paid for itself in the first week. No bans, no crashes. The EA Javelin bypass is legit and support keeps the tool live after every patch.',
		short: 'Paid for itself in a week. No bans, no crashes.',
		slug: 'bf6-javelin-bypass-review-zer0recoil',
		seoTitle: 'EA Javelin Review by @zer0_recoil_bf — 5/5 | {brand}',
		seoDescription: '@zer0_recoil_bf rates {brand} 5/5 for staying undetected after EA Javelin updates.',
		date: '2026-08-05',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'lurker_mode_on',
		rating: 4,
		text: 'I play very cautiously and the visuals-only mode is perfect for me. Having ESP without aimbot is a great option. Clean overlay, no performance hits.',
		short: 'Visuals-only mode is great. Clean overlay, no performance hits.',
		slug: 'bf6-visuals-review-lurkermodeon',
		seoTitle: 'Visuals-Only Review by @lurker_mode_on — 4/5 | {brand}',
		seoDescription: '@lurker_mode_on rates {brand} ESP-only mode 4/5 on Windows PC.',
		date: '2026-06-30',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'SniperSquad_BF',
		rating: 5,
		text: 'Best DMA cheat I have used for Battlefield. The read speed is excellent and there is zero delay on the ESP. Running it on a second PC and it is completely invisible.',
		short: 'Best DMA cheat for Battlefield. ESP read speed is excellent.',
		slug: 'bf6-dma-review-snipersquadbf',
		seoTitle: 'DMA Review by @SniperSquad_BF — 5/5 | {brand}',
		seoDescription: '@SniperSquad_BF rates {brand} DMA cheat 5/5 for Battlefield 6 on PC.',
		date: '2026-08-07',
		tag: 'Cloud-DMA',
	}),
	reviewMeta({
		handle: 'inf_loop_gamer',
		rating: 4,
		text: 'Decent lifetime deal. The wallhack visibility is top tier, I can see through smoke and dark corners easily. Would like more colour customisation options but otherwise great.',
		short: 'Top tier wallhack visibility. Great lifetime deal.',
		slug: 'bf6-wallhack-review-infloogamer',
		seoTitle: 'Wallhack Review by @inf_loop_gamer — 4/5 | {brand}',
		seoDescription: '@inf_loop_gamer rates {brand} wallhack 4/5 on Windows PC.',
		date: '2026-07-14',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'PTFO_King_BF6',
		rating: 5,
		text: 'Using this on Conquest is a completely different experience. Spotting enemies across the map before they reach flags gives such a tactical edge. Status was back up same day after the latest patch.',
		short: 'Spotting across the map on Conquest is a game changer.',
		slug: 'bf6-conquest-review-ptfokingbf6',
		seoTitle: 'Conquest Review by @PTFO_King_BF6 — 5/5 | {brand}',
		seoDescription: '@PTFO_King_BF6 rates {brand} 5/5 for Conquest mode on Battlefield 6 PC.',
		date: '2026-08-09',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'vaultbreaker_vb',
		rating: 5,
		text: 'Delivery was instant, setup took under 10 minutes. The bone ESP is incredibly accurate and the aimbot bone priority options are more granular than any tool I have tried.',
		short: 'Instant delivery, setup under 10 minutes. Bone ESP is incredible.',
		slug: 'bf6-bone-esp-review-vaultbreakervb',
		seoTitle: 'Bone ESP Review by @vaultbreaker_vb — 5/5 | {brand}',
		seoDescription: '@vaultbreaker_vb rates {brand} bone ESP 5/5 with granular aimbot options on PC.',
		date: '2026-08-11',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'flashpoint_fx',
		rating: 4,
		text: 'Solid purchase. The ESP distance markers are precise and the radar gives a real advantage in close-quarters maps. A few small UI tweaks would make it perfect.',
		short: 'ESP distance markers are precise. Radar helps on close-quarters maps.',
		slug: 'bf6-esp-distance-review-flashpointfx',
		seoTitle: 'ESP Distance Review by @flashpoint_fx — 4/5 | {brand}',
		seoDescription: '@flashpoint_fx rates {brand} ESP distance markers 4/5 for Battlefield 6 on PC.',
		date: '2026-07-22',
		tag: 'ESP',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.5,
	totalCount: customerReviews.length,
} as const;
