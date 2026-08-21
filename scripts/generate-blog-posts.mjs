#!/usr/bin/env node
/**
 * Generates src/data/blog/posts.generated.ts — NLP-first Battlefield 6 Intel posts.
 * Natural language, entity-rich copy for Google semantic matching.
 * Run: node scripts/generate-blog-posts.mjs
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'blog', 'posts.generated.ts');

const LOCALES = ['en'];

const EXT = {
	battlefield-6:
		'<a href="https://www.escapefromtarkov.com/" target="_blank" rel="noopener noreferrer">Battlefield 6</a>',
	status:
		'<a href="https://www.escapefromtarkov.com/support/" target="_blank" rel="noopener noreferrer">Battlefield 6 Support</a>',
	javelin:
		'<a href="https://www.battleye.com/" target="_blank" rel="noopener noreferrer">EA Javelin</a>',
};

/** @typedef {{ h2: string, paragraphs: string[] }} Section */
/** @typedef {{ id: string, imageKey: string, published: string, updated: string, category: string, featured?: boolean, slug: string, title: string, metaDescription: string, h1: string, intro: string, keywords: string[], imageAlt: string, sections: Section[] }} SourcePost */

/** @type {SourcePost[]} */
const sources = [
	{
		id: 'patch-notes-breakdown',
		imageKey: 'squadFight',
		published: '2026-07-29',
		updated: '2026-08-13',
		category: 'Patch Notes',
		featured: false,
		slug: 'battlefield-6-patch-notes-guide',
		title: 'How to Read Battlefield 6 Patch Notes',
		metaDescription:
			'Learn how Battlefield 6 patch notes change PMC loadouts, ammo economy, and maps. What to do after EA Javelin and wipe updates in 2026.',
		h1: 'How to Read Battlefield 6 Patch Notes Without Guessing',
		intro:
			'When Battlestate Games drops a patch, most players skim the headline and queue anyway. That is how you walk into Customs with the wrong ammo and a gun that just lost its armor pen. Here is a calmer way to read Battlefield 6 patch notes so your next raid still makes sense.',
		keywords: [
			'Battlefield 6 patch notes',
			'battlefield-6 wipe update',
			'battleye patch',
			'pmc loadout',
			'battlefield-6 intel',
		],
		imageAlt: 'Player reviewing Battlefield 6 patch notes before a PMC raid',
		sections: [
			{
				h2: 'What actually matters in a Battlefield 6 patch?',
				paragraphs: [
					`Official notes live on ${EXT.battlefield-6}. Treat that page as the source of truth — Discord rumors and streamer hot takes come second. Ask three plain questions for every bullet: Does this change how I kill armored PMCs? Does this change what loot is worth looting? Does this change which extract or map I should run tonight?`,
					'Ammo tables, armor classes, boss spawn rates, and trader unlocks move the real economy. A small recoil tweak on an M4 looks boring in a video title, but it quietly reshapes mid-range fights on Woods and Interchange. Cosmetic lines and UI polish almost never decide whether you survive dorms.',
					`If you also run third-party tools, separate game balance from anti-cheat maintenance. After a ${EXT.battleye} or client update, check our <a href="/updates/">Battlefield 6 Cheats status page</a> before you blame your own aim.`,
				],
			},
			{
				h2: 'Buffs, nerfs, and removed items — a simple framework',
				paragraphs: [
					'When an item is removed from raid loot pools, delete it from your mental shopping list the same day. Heavy nerfs demote a weapon from “default kit” to “situational.” Light nerfs are fine if you already shoot cleaner than most lobbies. Buffs deserve a short test block — ten focused raids — before you rebuild your entire stash around them.',
					'Armor and ammunition changes usually matter more than a single gun’s recoil number. If a popular round loses penetration against class-five plates, your Customs push into three-stacks suddenly needs a different mag. Pair this reading habit with our <a href="/blog/battlefield-6-weapon-tier-list/">Battlefield 6 weapon tier list</a> so you are not chasing streamer kits that ignore your budget.',
				],
			},
			{
				h2: 'How patches reshuffle loadouts and map plans',
				paragraphs: [
					'When mid-range rifles feel strong, prioritize optics and ammo that win 40–70 meter peeks. When healing items get tighter, play more conservatively near extracts and avoid ego third-parties. When a map POI shifts — new locked rooms, moved spawns, boss path changes — rewrite your first three minutes on that map before you farm it for quests.',
					'Keep cosmetic shop chatter out of patch-day focus. Skin talk is fun; time-to-kill and extract camping patterns are what get you killed. For aggressive Scav timing after a meta shift, see our <a href="/blog/battlefield-6-scav-run-aggressive-strategies/">Scav run strategies</a>.',
					`On big mornings, confirm ${EXT.status} looks healthy before you assume your client is broken. Then run a short checklist: note removed items, update your stash “buy list,” play five intentional raids, and only then lock a new main kit.`,
				],
			},
		],
	},
	{
		id: 'battlefield-6-skin-leaks',
		imageKey: 'headerArt',
		published: '2026-07-27',
		updated: '2026-08-13',
		category: 'Cosmetics',
		featured: false,
		slug: 'battlefield-6-skin-leaks-guide',
		title: 'Battlefield 6 Cosmetics & Skin Leaks: What Is Worth Buying',
		metaDescription:
			'Sensible advice on Battlefield 6 cosmetics and skin leaks — what to buy on the Flea Market, what to skip, and how looks affect raid readability.',
		h1: 'Battlefield 6 Cosmetics and Skin Leaks: Buy Smart, Not Impulsive',
		intro:
			'Leaks make every wipe feel like a fashion drop. Before you dump roubles into another loud outfit, decide whether the skin helps you play Battlefield 6 — or just looks cool in a screenshot.',
		keywords: [
			'battlefield-6 skins',
			'battlefield-6 cosmetics',
			'flea market skins',
			'Battlefield 6 apparel',
			'battlefield-6 intel',
		],
		imageAlt: 'Battlefield 6 character cosmetics and gear appearance options',
		sections: [
			{
				h2: 'Why most impulse cosmetic buys feel bad after a week',
				paragraphs: [
					`Shop rotations and official apparel come from ${EXT.battlefield-6}. Leaks are entertainment, not a shopping list. Many players spend hard-earned flea money the night before a wipe, then realize they still need meds, ammo, and a backup kit.`,
					'Controversial but useful: most cosmetics do not raise your survival rate. Some loud patterns even make you easier to spot in bushes on Woods or in dark Interchange hallways. Pros often prefer quieter silhouettes so enemy outlines stay readable in chaotic peeks.',
				],
			},
			{
				h2: 'A simple worth-it checklist for Battlefield 6 cosmetics',
				paragraphs: [
					'Buy if you will still wear it in ninety days and it stays readable in night raids. Pause if it overlaps three outfits you already own. Skip FOMO bundles packed with fillers you will never equip. Always keep a rouble floor for ammo and healing before fashion.',
					'Do the math on bundles. Paying extra for two fillers you hate is worse than waiting for a single piece on the Flea Market. If a leak only hypes one jacket, wait for confirmation instead of panic-buying a full set.',
				],
			},
			{
				h2: 'How to use leaks without getting played',
				paragraphs: [
					'Treat late-wipe leak waves as theme previews, not release dates. Decide a budget before something hits the store, not during the five-minute panic. A quiet daily habit works: open the shop for one minute, check your wishlist, then leave.',
					'For competitive readability tips that actually affect fights, pair this with our <a href="/blog/battlefield-6-pro-settings-guide/">pro settings guide</a>. Looking clean matters less than seeing the other PMC first.',
				],
			},
		],
	},
	{
		id: 'battlefield-6-weapon-tier-list',
		imageKey: 'aimbotCombat',
		published: '2026-07-25',
		updated: '2026-08-13',
		category: 'Weapons',
		featured: true,
		slug: 'battlefield-6-weapon-tier-list',
		title: 'Battlefield 6 Weapon Tier List: Best Guns for Raids',
		metaDescription:
			'A practical Battlefield 6 weapon tier list for PMC and Scav raids — ARs, SMGs, bolt-actions, ammo, and when each gun actually wins fights.',
		h1: 'Battlefield 6 Weapon Tier List: What Wins Raids in 2026',
		intro:
			'Creator tier lists love flashy guns. Battlefield 6 rewards expected value: armor penetration, recoil you can control, and a kit you can rebuild after you die. Here is how to rank weapons for real raids — not highlight reels.',
		keywords: [
			'battlefield-6 weapon tier list',
			'best battlefield-6 guns',
			'battlefield-6 meta weapons',
			'm4a1 battlefield-6',
			'battlefield-6 intel',
		],
		imageAlt: 'Battlefield 6 weapons laid out for a PMC loadout comparison',
		sections: [
			{
				h2: 'How should you define S-tier in Battlefield 6?',
				paragraphs: [
					'S-tier means the best expected value across a hundred PMC fights on maps like Customs, Woods, and Interchange — not the gun that looks strongest in a controlled offline range. Mid-range rifles win many of the fights that actually decide raids: forty to seventy meters through doorways, parking lots, and tree lines.',
					'Shotguns still own tight interiors. Bolt-actions still punish long peeks on Shoreline and Lighthouse. Everything between those extremes is usually assault-rifle country, which is why a well-built M4A1 or similar 5.56 platform stays relevant wipe after wipe when ammo and mods are available.',
					`Always re-check live values after patches on ${EXT.battlefield-6}. The hierarchy logic stays useful even when numbers nudge.`,
				],
			},
			{
				h2: 'Ammo, TTK, and peek discipline matter more than brand names',
				paragraphs: [
					'Time-to-kill in Battlefield 6 is really time-to-pen. A soft gun with the right rounds beats a loud meta rifle feeding trash ammo into class-five armor. Learn which rounds you can afford this wipe, then pick a platform that controls recoil at your skill level.',
					'First-shot accuracy decides many peeks. A clean cadence — peek, fire a short burst, jiggle back, re-peek — beats standing still for ego sprays. Pair this mid-range plan with loot discipline from our <a href="/blog/battlefield-6-loot-routes-guide/">loot routes guide</a> so you actually spawn with the ammo you planned to use.',
				],
			},
			{
				h2: 'Loadout pairings and common mistakes',
				paragraphs: [
					'A durable kit is usually a reliable mid rifle, a close-range option for dorms or Factory, enough meds, and an armor class you can replace after deaths. In Scav runs, that same spine supports the aggression patterns in our <a href="/blog/battlefield-6-scav-run-aggressive-strategies/">Scav strategies article</a>.',
					'Common mistakes: full-spraying from eighty meters, re-peeking the same pixel, swapping to an SMG at forty meters out of habit, and never practicing controlled bursts offline. If you also use aim-assist tooling, lock sensitivity and fundamentals first, then review <a href="/battlefield-6-aimbot/">Battlefield 6 aimbot settings</a>.',
				],
			},
		],
	},
	{
		id: 'battlefield-6-scav-run-meta',
		imageKey: 'battleRoyaleCombat',
		published: '2026-07-22',
		updated: '2026-08-13',
		category: 'Scav Runs',
		featured: true,
		slug: 'battlefield-6-scav-run-aggressive-strategies',
		title: 'Battlefield 6 Scav Run Strategies That Actually Print Loot',
		metaDescription:
			'Five aggressive but smart Battlefield 6 Scav strategies — timings, extracts, third-parties, and how to leave raids with gear instead of empty pockets.',
		h1: 'Battlefield 6 Scav Run Strategies: How to Leave With Gear',
		intro:
			'Passive Scav players wait behind a bush while two PMC teams erase each other, then spray into the mess and die. Strong Scav runs manufacture a short advantage, grab what matters, and extract before the map collapses on you.',
		keywords: [
			'battlefield-6 scav run',
			'scav strategies',
			'Battlefield 6 scav',
			'battlefield-6 extracts',
			'battlefield 6 esp',
		],
		imageAlt: 'Scav player moving toward extract with loot in Battlefield 6',
		sections: [
			{
				h2: 'Why so many Scav runs feel soft',
				paragraphs: [
					'Scav kits are random, timers are limited, and player Scavs can turn on you. Waiting forever for a “perfect” third-party often means you arrive late to a wiped lobby with nothing left. Information tools like <a href="/battlefield-6-esp/">Battlefield 6 ESP</a> can help you see fights early — but you still need an exit plan.',
					'Decide your extract before you swing. Take a clear damage window, grab high-value loot, then leave. The usual third-party clock in hot POIs is only a few seconds long once gunfire starts.',
				],
			},
			{
				h2: 'Five aggressive habits that still work',
				paragraphs: [
					'Pre-aim common corners on Customs dorms and Interchange tech stores so you clear angles in under a second. Enter rooms with an exit path, not a panic turn. Fake one side of a doorway, then finish from the safer angle when their magazine is weak.',
					`Stay close to hard cover while you move — never more than a short sprint from a wall or vehicle. Pressure late rotates near extracts when players are silhouetted and greedy. Mode rules evolve with ${EXT.battlefield-6} wipes; the geometry of first-shot advantage does not.`,
				],
			},
			{
				h2: 'Warmup checklist before you queue a Scav',
				paragraphs: [
					'Know your map’s main extracts, bring a simple med plan, and pick two POIs with cover ladders instead of open fields. Pair this article with <a href="/blog/battlefield-6-loot-routes-guide/">loot routes</a>, <a href="/blog/battlefield-6-weapon-tier-list/">weapon tiers</a>, and <a href="/blog/battlefield-6-warmup-maps-ranked/">warmup routines</a>.',
					'Try one session where you force early contact only when you have armor and a usable gun — then track whether you extracted before the third-party window closed.',
				],
			},
		],
	},
	{
		id: 'battlefield-6-tournament-meta',
		imageKey: 'rebootFight',
		published: '2026-07-20',
		updated: '2026-08-13',
		category: 'Competitive',
		featured: false,
		slug: 'battlefield-6-tournament-meta-guide',
		title: 'What Competitive Battlefield 6 Players Optimize For',
		metaDescription:
			'What strong Battlefield 6 competitors optimize — spawn plans, loadouts, mid-raid habits, and which tournament habits help normal PMC queues.',
		h1: 'What Competitive Battlefield 6 Players Optimize For',
		intro:
			'Tournament winners and high-level duos are not lucky spawn gods. They optimize expected value: safer loot paths, cleaner mid-raid habits, and fights they choose on purpose. Here is what translates into your normal Battlefield 6 queues.',
		keywords: [
			'battlefield-6 competitive',
			'battlefield-6 tournament',
			'battlefield-6 meta',
			'pmc habits',
			'battlefield-6 intel',
		],
		imageAlt: 'Competitive Battlefield 6 players reviewing raid strategy',
		sections: [
			{
				h2: 'Watch competitive VODs like a coach, not a fan',
				paragraphs: [
					`Start with schedules and film from ${EXT.battlefield-6} community events or trusted creators, then tag habits instead of memorizing a single POI name. Note the landing plan, first heal, first rotate, first voluntary fight, and the key late-raid decision.`,
					'Five clear timestamps beat a full passive watch. You are stealing decision patterns, not cosplaying someone else’s spawn.',
				],
			},
			{
				h2: 'Spawn EV and loadout patterns that keep showing up',
				paragraphs: [
					'Score every spawn on contest rate, loot quality in the first few minutes, extract pain, exit paths, and split potential with teammates. Edge spawns with clean exits often beat “sexy” mid-map landmarks that look good on stream and then get third-partied.',
					'Expect a reliable mid rifle, a close-range option, mobility or stamina management, and enough meds. High-tier loot is taken when free, not forced — matching the mindset in our <a href="/blog/battlefield-6-weapon-tier-list/">weapon tier list</a>.',
				],
			},
			{
				h2: 'What actually translates to normal raids',
				paragraphs: [
					'Steal loot-timer discipline, a simple loadout spine, earlier rotates, and selective fights. Do not blindly mirror a trio drop when you solo queue. Winners rotate early enough to choose sides — the same idea shows up in our <a href="/blog/battlefield-6-scav-run-aggressive-strategies/">Scav aggression guide</a>.',
					'Try this: watch fifteen minutes of a strong VOD with five timestamps. Steal one mid-raid habit only. Run it for a six-raid PMC block before adding another.',
				],
			},
		],
	},
	{
		id: 'battlefield-6-loot-routes',
		imageKey: 'battleRoyaleIslandMap',
		published: '2026-07-18',
		updated: '2026-08-13',
		category: 'Loot Routes',
		featured: true,
		slug: 'battlefield-6-loot-routes-guide',
		title: 'Battlefield 6 Loot Routes That Leave Spawn Ready to Fight',
		metaDescription:
			'High-percentage Battlefield 6 loot routes for Customs, Woods, and Interchange — how to leave spawn with guns, armor, and meds that win mid-raid fights.',
		h1: 'Battlefield 6 Loot Routes: Leave Spawn Ready to Fight',
		intro:
			'Winning in Battlefield 6 starts before the first gunfight. Random looting gets you killed with a pistol and no meds. These route habits consistently convert a spawn into a kit you can actually fight with.',
		keywords: [
			'battlefield-6 loot routes',
			'customs loot path',
			'interchange loot',
			'battlefield-6 spawn guide',
			'battlefield 6 esp',
		],
		imageAlt: 'Loot route planning across an Battlefield 6 map',
		sections: [
			{
				h2: 'Why early inventory is the real bottleneck',
				paragraphs: [
					'Many early raid deaths happen because players loot like tourists. Strong players treat the first ninety seconds like a shopping list: usable gun, enough ammo, basic armor, and a heal. Drop spot matters less than sequence — a mediocre POI with discipline beats a stacked landmark with panic looting.',
					'Secure a primary weapon and meds before hunting kills. Early ego chases are how hot-spawn players stay broke.',
				],
			},
			{
				h2: 'Three route archetypes that keep printing gear',
				paragraphs: [
					'Contested edge POI: land outer loot, snake inward, leave before late third parties. Uncontested chain: sacrifice early fights for a fuller kit by minute three. Mid-map surge: vacuum piles ninety to one hundred fifty seconds after hot spawns empty out.',
					`Timing targets help: first gun quickly, clear a cluster, grab heals, then upgrade or leave. Slot priority is usually gun, ammo, armor, meds, then flex loot. POI names shift with ${EXT.battlefield-6} wipes — keep the geometry, not just the landmark brand.`,
				],
			},
			{
				h2: 'Convert a strong spawn into a win',
				paragraphs: [
					'Pair these routes with <a href="/blog/battlefield-6-scav-run-aggressive-strategies/">Scav aggression</a> and <a href="/blog/battlefield-6-weapon-tier-list/">weapon tiers</a>. Leave spawn rich so mid-raid becomes a skill check instead of a scavenger panic.',
					'If you practice with loot markers, read <a href="/battlefield-6-esp/">Battlefield 6 ESP</a> for category toggles — then still run the timer so your habits stay sharp without overlays.',
				],
			},
		],
	},
	{
		id: 'battlefield-6-pro-settings',
		imageKey: 'cheatsPackage',
		published: '2026-07-12',
		updated: '2026-08-13',
		category: 'Settings',
		featured: false,
		slug: 'battlefield-6-pro-settings-guide',
		title: 'Battlefield 6 Pro Settings That Actually Help You See Enemies',
		metaDescription:
			'Practical Battlefield 6 settings used by strong players — visibility, audio cues, sensitivity, and what to copy vs ignore from pro configs.',
		h1: 'Battlefield 6 Settings Guide: See More, Panic Less',
		intro:
			'Copying a champion’s entire config will not make you one. But a few Battlefield 6 settings reliably improve visibility, audio reads, and aim consistency. Here is what is worth stealing.',
		keywords: [
			'battlefield-6 settings',
			'battlefield-6 sensitivity',
			'battlefield-6 visibility',
			'battlefield-6 audio settings',
			'battlefield-6 intel',
		],
		imageAlt: 'Battlefield 6 graphics and control settings menu',
		sections: [
			{
				h2: 'Visibility and performance before fancy numbers',
				paragraphs: [
					'If your frame rate collapses in Streets of Battlefield 6 or Interchange interiors, no sensitivity tip will save you. Prioritize a stable FPS and readable shadows over maximum eye candy. Many strong players lower clutter so PMC silhouettes pop sooner in tree lines and warehouse lighting.',
					'Test changes in offline mode or a quiet Scav before locking them for serious PMC raids. Your eyes adapt in a few sessions — give settings that long before declaring them useless.',
				],
			},
			{
				h2: 'Sensitivity, ADS, and muscle memory',
				paragraphs: [
					'Pick one hip-fire and ADS relationship and stick with it for at least a week. Constantly rewriting sens after every death trains nothing. Warm up with the routine in our <a href="/blog/battlefield-6-warmup-maps-ranked/">warmup guide</a> so your hands match the new numbers.',
					'If you later add soft aim tooling, match the in-game sens first, then tune FOV in the <a href="/battlefield-6-aimbot/">aimbot guide</a>. Tools on top of a chaotic sens feel robotic and obvious.',
				],
			},
			{
				h2: 'Audio cues that win extracts',
				paragraphs: [
					'Footsteps, magazine reloads, and extract buzzing often matter more than a tiny graphics slider. Use headphones, keep voice chat from drowning game audio, and learn the sound difference between a scav AI shuffle and a player PMC push.',
					'Settings are leverage, not a cheat code. Pair them with map knowledge from our <a href="/blog/battlefield-6-loot-routes-guide/">loot routes</a> article so you know where those sounds are coming from.',
				],
			},
		],
	},
	{
		id: 'battlefield-6-warmup-maps',
		imageKey: 'playerEsp',
		published: '2026-07-10',
		updated: '2026-08-13',
		category: 'Warmup',
		featured: false,
		slug: 'battlefield-6-warmup-maps-ranked',
		title: 'Battlefield 6 Warmup Routine Before Serious PMC Raids',
		metaDescription:
			'A short Battlefield 6 warmup routine before PMC raids — aim, peeks, audio focus, and what to practice offline so your first fight is not your warmup.',
		h1: 'Battlefield 6 Warmup Routine Before You Queue PMC',
		intro:
			'Queuing cold into Factory or dorms is how you donate a kit. A short Battlefield 6 warmup — even ten to fifteen minutes — makes your first real fight feel like your third.',
		keywords: [
			'battlefield-6 warmup',
			'battlefield-6 aim practice',
			'pmc warmup routine',
			'battlefield-6 offline practice',
			'battlefield-6 intel',
		],
		imageAlt: 'Player warming up aim before an Battlefield 6 PMC raid',
		sections: [
			{
				h2: 'Why your first raid should not be the warmup',
				paragraphs: [
					'Most players boot the game, slap on a kit, and die to the first clean peeker. Hands are cold, audio is not dialed, and map timing feels off. Treat warmup as part of the session, not optional fluff.',
					'Offline practice, shooting range habits, and a couple of low-stakes Scav runs exist so your expensive PMC kit is not the experiment.',
				],
			},
			{
				h2: 'A simple 15-minute routine that scales',
				paragraphs: [
					'Minutes 1–5: tracking and short bursts on a range or offline bots. Minutes 6–10: peek practice on common angles — jiggle, counter-strafe, pre-aim head height. Minutes 11–15: one focused Scav or offline fight block where you only work one habit, like holding an extract or clearing a room.',
					'Keep the routine identical for a week so improvements are measurable. Rotate maps later — Customs one day, Woods the next — after the habit sticks.',
				],
			},
			{
				h2: 'What to do right before you ready up',
				paragraphs: [
					'Check stash meds and ammo, confirm your map extracts, and skim <a href="/updates/">cheat status</a> if you use overlays after a patch. Pair warmup with <a href="/blog/battlefield-6-pro-settings-guide/">settings</a> and <a href="/blog/battlefield-6-weapon-tier-list/">weapon tiers</a> so you are not reinventing the kit every night.',
					'If the first two PMC deaths feel mechanical, stop stacking kits and repeat five minutes of peek practice. Ego queueing while tilted is not a strategy.',
				],
			},
		],
	},
	{
		id: 'battlefield-6-cheats-complete-guide',
		imageKey: 'espWallhack',
		published: '2026-07-30',
		updated: '2026-08-13',
		category: 'Cheats Guide',
		featured: true,
		slug: 'battlefield-6-cheats-complete-guide-2026',
		title: 'Battlefield 6 Cheats 2026: Complete Undetected Guide',
		metaDescription:
			'A clear 2026 guide to battlefield 6 cheats — what ESP, soft aim, and radar actually do in Battlefield 6, how EA Javelin maintenance works, and how to buy safely.',
		h1: 'Battlefield 6 Cheats in 2026: What They Are and How to Use Them Carefully',
		intro:
			'People search “battlefield 6 cheats” for a simple reason: Battlefield 6 is information-heavy, punishing, and full of extract campers. This guide explains what modern undetected packages actually include, how EA Javelin maintenance works, and how to decide whether a tool fits your play style.',
		keywords: [
			'battlefield 6 cheats',
			'undetected battlefield 6 cheats',
			'battlefield 6 esp',
			'battlefield 6 aimbot',
			'javelin',
		],
		imageAlt: 'Overview of Battlefield 6 Cheats ESP soft aim and radar tools for 2026',
		sections: [
			{
				h2: 'What do people mean when they say battlefield 6 cheats?',
				paragraphs: [
					'In plain language, battlefield 6 cheats are third-party tools that add information or aim assistance on top of the Battlefield 6 client. The common stack is ESP wallhack for players and loot, a 2D radar for threats outside your view, and configurable soft aim for firefights. One license should cover that loop instead of forcing you to juggle separate downloads.',
					'Searchers also say “escape from battlefield 6 cheats,” “eft hacks,” or “battlefield-6 wallhack.” Those phrases usually point at the same intent: survive raids with better reads. Start at our <a href="/battlefield-6-cheats/">battlefield 6 cheats pillar</a> if you want the product overview without the long essay.',
				],
			},
			{
				h2: 'ESP, soft aim, and radar — what each tool is for',
				paragraphs: [
					'ESP answers “who is near me and what is worth looting?” Soft aim answers “can I finish the fight once I choose it?” Radar answers “is someone flanking while I heal?” Used together, they cover information and combat. Used badly, they create noisy overlays and obvious aim corrections.',
					'Deep dives live on <a href="/battlefield-6-esp/">ESP</a>, <a href="/battlefield-6-aimbot/">aimbot</a>, <a href="/battlefield-6-wallhack/">wallhack</a>, and <a href="/bf6-dma-cheats/">radar</a>. Read those before you buy if you only need one job done well.',
				],
			},
			{
				h2: 'EA Javelin, “undetected,” and honest expectations',
				paragraphs: [
					`${EXT.battleye} protects Battlefield 6. No seller can promise permanent undetected status. What a serious vendor can offer is maintenance: rebuilds after patches, a public status note, and clear setup steps. That workflow is documented on <a href="/undetected-battlefield-6-cheats/">undetected battlefield 6 cheats</a> and <a href="/ea-javelin-bypass/">EA Javelin maintenance</a>.`,
					'Before every patch-day queue, read <a href="/updates/">Updates</a>. If status is quiet, wait. Responsible settings matter as much as the binary itself.',
				],
			},
			{
				h2: 'How to buy and set up without wasting a night',
				paragraphs: [
					'Compare monthly and lifetime on <a href="/pricing/">Pricing</a>, then follow <a href="/setup/">Setup</a> after delivery. Keep your order ID ready for <a href="/support/">Support</a>. If you are still shopping, the <a href="/blog/escape-from-battlefield-6-cheats-buyers-guide/">buyers guide</a> lists the checklist we wish every shopper used.',
					'Battlefield 6 Cheats is built for Windows PC PMC and Scav play. It will not replace map knowledge — it amplifies the reads you already practice in raids.',
				],
			},
		],
	},
	{
		id: 'escape-from-battlefield-6-cheats-buyers-guide',
		imageKey: 'cheatsPackage',
		published: '2026-07-28',
		updated: '2026-08-13',
		category: 'Buyers Guide',
		featured: true,
		slug: 'escape-from-battlefield-6-cheats-buyers-guide',
		title: 'Battlefield 6 Cheats Buyers Guide',
		metaDescription:
			'What to check before you buy escape from battlefield 6 cheats — status pages, ESP features, soft aim, refunds, pricing, and red flags in 2026.',
		h1: 'Battlefield 6 Cheats: What to Check Before You Buy',
		intro:
			'Buying escape from battlefield 6 cheats is noisy. Every storefront promises “undetected,” instant delivery, and god mode. This buyers guide slows you down with a practical checklist so you spend money on maintenance and clarity — not banners.',
		keywords: [
			'escape from battlefield 6 cheats',
			'battlefield 6 cheats buyers guide',
			'buy battlefield 6 cheats',
			'undetected eft cheats',
			'battlefield-6 pricing',
		],
		imageAlt: 'Checklist for buying Battlefield 6 cheats safely',
		sections: [
			{
				h2: 'Start with status, not screenshots',
				paragraphs: [
					'Ask whether the seller publishes a dated status page after EA Javelin or client patches. Fancy galleries do not help if the tool is offline for three days. Battlefield 6 Cheats posts rebuild notes on <a href="/updates/">Updates</a> for that reason.',
					'If a shop only answers in private Discord and never writes public notes, assume you will miss patch windows.',
				],
			},
			{
				h2: 'Feature checklist that matches real Battlefield 6 raids',
				paragraphs: [
					'For Battlefield 6, useful features usually mean player ESP with distance, loot filters, extract awareness, radar for flanks, and soft aim you can tone down. “Unlock all” marketing and battle-royale leftovers are red flags that the page was cloned from another game.',
					'Compare the stack on <a href="/features/">Features</a>, <a href="/battlefield-6-esp/">ESP</a>, and <a href="/battlefield-6-aimbot/">Aimbot</a>. If radar matters to how you hold extracts, confirm it exists before checkout.',
				],
			},
			{
				h2: 'Price, delivery, and support questions worth asking',
				paragraphs: [
					'Know whether you are paying monthly or lifetime, how the license arrives, and how fast support replies with an order ID. Read the <a href="/refund-policy/">refund policy</a> before you pay — digital tools often have narrow windows.',
					'Our plans live on <a href="/pricing/">Pricing</a>. Setup steps are on <a href="/setup/">Setup</a>. If something fails after a patch, <a href="/support/">Support</a> needs your order details, Windows version, and what you already tried.',
				],
			},
		],
	},
	{
		id: 'battlefield-6-cheats-2026-whats-new',
		imageKey: 'hero',
		published: '2026-07-26',
		updated: '2026-08-13',
		category: 'Product Updates',
		featured: false,
		slug: 'battlefield-6-cheats-2026-whats-new',
		title: 'Battlefield 6 Cheats 2026: What Changed This Year',
		metaDescription:
			'What changed for battlefield 6 cheats in 2026 — wipe cadence, EA Javelin maintenance habits, ESP focus, and how Battlefield 6 Cheats adapted for Battlefield 6.',
		h1: 'What Changed for Battlefield 6 Cheats in 2026',
		intro:
			'2026 did not invent cheating in Battlefield 6 — it raised the bar for maintenance. Wipes, EA Javelin pushes, and map updates punish stale builds. Here is what changed in how serious battlefield 6 cheats packages need to operate.',
		keywords: [
			'battlefield 6 cheats 2026',
			'eft cheats 2026',
			'battleye 2026',
			'battlefield-6 wipe',
			'battlefield 6 cheats updates',
		],
		imageAlt: '2026 updates for Battlefield 6 Cheats on Battlefield 6',
		sections: [
			{
				h2: 'Why 2026 buyers care more about status pages',
				paragraphs: [
					'Players got tired of “undetected forever” slogans. They want a dated note after patches. That is why we invest in the <a href="/updates/">Updates</a> log and the <a href="/undetected-battlefield-6-cheats/">undetected explainer</a> instead of empty guarantees.',
					`${EXT.battleye} and Battlestate client updates still force rebuilds. The shops that survive are the ones that communicate during those windows.`,
				],
			},
			{
				h2: 'Feature focus shifted toward raid information',
				paragraphs: [
					'The winning feature set in 2026 is still ESP, radar, and tunable soft aim — because Battlefield 6 fights are about information and first peeks. Loud rage features matter less than readable overlays you can turn down near extracts.',
					'See the current stack on <a href="/features/">Features</a> and the pillar at <a href="/battlefield-6-cheats/">battlefield 6 cheats</a>.',
				],
			},
			{
				h2: 'What we recommend you do differently this year',
				paragraphs: [
					'Check status before patch-day queues. Keep soft aim conservative. Use loot ESP filters so your screen stays clean. Read the <a href="/blog/battlefield-6-cheats-complete-guide-2026/">complete 2026 guide</a> if you are new to the category.',
					'Pricing remains monthly and lifetime on <a href="/pricing/">Pricing</a> with digital delivery after payment.',
				],
			},
		],
	},
	{
		id: 'battlefield-6-aimbot-settings-guide',
		imageKey: 'aimbotCombat',
		published: '2026-07-24',
		updated: '2026-08-13',
		category: 'Aimbot',
		featured: false,
		slug: 'battlefield-6-aimbot-settings-guide',
		title: 'Battlefield 6 Aimbot Settings: Smooth FOV Without Looking Robotic',
		metaDescription:
			'How to tune battlefield 6 aimbot and soft aim settings — FOV, smoothness, bone priority, and per-weapon profiles that feel natural in Battlefield 6 raids.',
		h1: 'Battlefield 6 Aimbot Settings That Feel Natural',
		intro:
			'A harsh aimbot gets you killed by reports and by your own bad habits. Soft, tunable aim assistance is what most Battlefield 6 players actually want. Here is how to think about FOV, smoothness, and weapon profiles.',
		keywords: [
			'battlefield 6 aimbot settings',
			'battlefield-6 soft aim',
			'aimbot fov',
			'battlefield-6 aim assist',
			'battlefield 6 cheats',
		],
		imageAlt: 'Soft aim and FOV settings for Battlefield 6 aimbot on Windows PC',
		sections: [
			{
				h2: 'Start softer than you think you need',
				paragraphs: [
					'Begin with a smaller FOV and higher smoothness so the assist helps tracking instead of snapping. Play five raids on Customs or Factory and only then widen FOV. If friends watching a demo say it looks robotic, you went too far.',
					'Full control docs live on <a href="/battlefield-6-aimbot/">Battlefield 6 Aimbot</a> and <a href="/battlefield-6-soft-aim/">soft aim</a>.',
				],
			},
			{
				h2: 'Per-weapon profiles beat one global slider',
				paragraphs: [
					'ARs, SMGs, and bolt-actions want different assist. Save separate profiles so dorms sprays and long Woods peeks do not share the same magnet. Bone priority should favor what you can actually hit under stress — usually upper chest to head transitions, not miracles.',
					'Hotkeys matter mid-raid. You need to disable assist when you are looting friendlies or holding a suspicious angle where obvious corrections would look wrong.',
				],
			},
			{
				h2: 'Pair aim settings with information tools',
				paragraphs: [
					'Soft aim finishes fights that ESP and radar help you choose. If your overlays are noisy, fix <a href="/battlefield-6-esp/">ESP categories</a> before blaming aim. After EA Javelin patches, confirm <a href="/updates/">Updates</a> before you tune anything on an old build.',
				],
			},
		],
	},
	{
		id: 'battlefield-6-esp-wallhack-explained',
		imageKey: 'espWallhack',
		published: '2026-07-21',
		updated: '2026-08-13',
		category: 'ESP',
		featured: false,
		slug: 'battlefield-6-esp-wallhack-explained',
		title: 'Battlefield 6 ESP and Wallhack Explained in Plain English',
		metaDescription:
			'What Battlefield 6 ESP and wallhack actually show in Battlefield 6 — players, loot, distance, extracts — and how to keep overlays readable in raids.',
		h1: 'Battlefield 6 ESP and Wallhack Explained Clearly',
		intro:
			'“ESP” and “wallhack” get used interchangeably. In Battlefield 6 they both mean information through walls — but the useful details are distance, filters, and what you choose to hide so your screen stays readable.',
		keywords: [
			'battlefield 6 esp',
			'battlefield-6 wallhack',
			'eft esp',
			'loot esp battlefield-6',
			'battlefield 6 cheats',
		],
		imageAlt: 'ESP wallhack overlay showing players and loot in Battlefield 6',
		sections: [
			{
				h2: 'What ESP shows during a real raid',
				paragraphs: [
					'Player ESP outlines PMCs and Scavs through walls and terrain, often with distance. Loot ESP highlights containers or high-value items. Extract cues help you avoid camping surprises. That information gap is why people search for battlefield 6 esp in the first place.',
					'Read the dedicated pages for <a href="/battlefield-6-esp/">ESP</a> and <a href="/battlefield-6-wallhack/">wallhack</a> if you want category-level detail.',
				],
			},
			{
				h2: 'How to keep overlays from becoming noise',
				paragraphs: [
					'Toggle categories. During a hot push you may want players only. During a loot route you may want containers. Near extract you may want threats and exits. Too many boxes at once create hesitation — the opposite of an advantage.',
					'Pair ESP with <a href="/bf6-dma-cheats/">radar</a> for flanks outside your field of view. Visibility wins information wars; aim tools cover the firefight afterward.',
				],
			},
			{
				h2: 'Maintenance and responsible use',
				paragraphs: [
					'ESP modules rebuild after EA Javelin patches like everything else. Check <a href="/updates/">Updates</a> and the <a href="/undetected-battlefield-6-cheats/">undetected guide</a>. No overlay replaces listening and map knowledge — it shortens the time between “I heard something” and “I know where.”',
				],
			},
		],
	},
	{
		id: 'undetected-battlefield-6-cheats-battleye',
		imageKey: 'playerEsp',
		published: '2026-07-19',
		updated: '2026-08-13',
		category: 'Undetected',
		featured: true,
		slug: 'undetected-battlefield-6-cheats-battleye',
		title: 'Undetected Battlefield 6 Cheats and EA Javelin Reality',
		metaDescription:
			'What “undetected battlefield 6 cheats” really means under EA Javelin — maintenance, patch days, risk, and how to read status before you queue Battlefield 6.',
		h1: 'Undetected Battlefield 6 Cheats: What EA Javelin Reality Looks Like',
		intro:
			'“Undetected” is the most abused word in cheat marketing. Under EA Javelin, it means a package is being maintained against current detections — not that bans are impossible. Here is the honest version for Battlefield 6 players.',
		keywords: [
			'undetected battlefield 6 cheats',
			'battleye battlefield-6',
			'battlefield-6 ban risk',
			'eft undetected',
			'battlefield-6 status',
		],
		imageAlt: 'EA Javelin maintenance status for undetected Battlefield 6 cheats',
		sections: [
			{
				h2: 'What undetected can honestly mean',
				paragraphs: [
					`EA Javelin is documented at ${EXT.battleye}. It evolves. Vendors who care publish rebuild notes when ESP, radar, or aim modules need work. Battlefield 6 Cheats does that on <a href="/updates/">Updates</a> and explains the workflow on <a href="/ea-javelin-bypass/">EA Javelin maintenance</a>.`,
					'If a seller says “100% undetected forever,” treat it as advertising. Your risk also depends on how obviously you play.',
				],
			},
			{
				h2: 'Patch-day habits that reduce pain',
				paragraphs: [
					`After a Battlefield 6 or EA Javelin update, wait for a status note before queueing. Confirm Battlestate services on ${EXT.status} if the launcher itself is failing. Do not run yesterday’s build into today’s anti-cheat and call it bad luck.`,
					'Keep soft aim conservative and avoid highlight-reel rage settings that attract reports even when the binary is clean.',
				],
			},
			{
				h2: 'Where to go next',
				paragraphs: [
					'Read <a href="/undetected-battlefield-6-cheats/">undetected battlefield 6 cheats</a>, the <a href="/blog/battlefield-6-cheats-complete-guide-2026/">2026 complete guide</a>, and <a href="/pricing/">Pricing</a> if you want the maintained stack. Undetected status is a process you check — not a sticker on the box.',
				],
			},
		],
	},
	{
		id: 'battlefield-6-cheats-vs-cheatvault',
		imageKey: 'cheatsPackage',
		published: '2026-07-15',
		updated: '2026-08-13',
		category: 'Comparisons',
		featured: false,
		slug: 'battlefield-6-cheats-vs-cheatvault-comparison',
		title: 'Battlefield 6 Cheats vs Typical Budget EFT Shops',
		metaDescription:
			'How Battlefield 6 Cheats compares to typical budget Battlefield 6 cheat shops — ESP depth, radar, status pages, pricing, and what “cheap” usually skips.',
		h1: 'Battlefield 6 Cheats vs Typical Budget EFT Cheat Shops',
		intro:
			'Budget Battlefield 6 stores often look identical: neon banners, “undetected” badges, and a low weekly price. Battlefield 6 Cheats costs more than the cheapest tier on purpose. Here is what you usually trade when you chase the lowest sticker.',
		keywords: [
			'battlefield 6 cheats comparison',
			'budget eft cheats',
			'battlefield 6 cheats vs other shops',
			'esp radar pricing',
			'battlefield 6 cheats',
		],
		imageAlt: 'Comparing Battlefield 6 Cheats features against budget EFT cheat shops',
		sections: [
			{
				h2: 'What budget shops usually optimize for',
				paragraphs: [
					'Low entry price and fast checkout. That can be fine for a weekend experiment. The common gaps are thin loot ESP, no real radar, Discord-only status, and slow rebuild communication after EA Javelin pushes.',
					'Battlefield 6 Cheats focuses on a full raid stack — player ESP, loot filters, radar, soft aim profiles — with a public <a href="/updates/">Updates</a> page. See <a href="/features/">Features</a> for the list.',
				],
			},
			{
				h2: 'Price versus what you touch every raid',
				paragraphs: [
					'If you only want basic player boxes in casual raids, a cheaper shop might feel enough. If you hold extracts, run loot routes, and hate dying to unseen flanks, radar and clean filters pay for themselves quickly.',
					'Our monthly and lifetime options are on <a href="/pricing/">Pricing</a>. Read the <a href="/blog/escape-from-battlefield-6-cheats-buyers-guide/">buyers guide</a> before you compare three storefronts at once.',
				],
			},
			{
				h2: 'How to decide without brand loyalty',
				paragraphs: [
					'Write down must-haves: dated status, loot ESP, radar, soft aim profiles, Windows PC support. Open each seller’s status channel and feature list side by side. If a shop fails the status test, price does not matter.',
					'Then return to <a href="/battlefield-6-cheats/">battlefield 6 cheats</a> and <a href="/undetected-battlefield-6-cheats/">undetected notes</a> if that checklist matches what we ship.',
				],
			},
		],
	},
	{
		id: 'elitefn-two-week-test',
		imageKey: 'aimbotSkeleton',
		published: '2026-07-08',
		updated: '2026-08-13',
		category: 'Comparisons',
		featured: false,
		slug: 'elitefn-vs-battlefield-6-cheats-two-week-test',
		title: 'I Tested Another Battlefield 6 Cheat for 2 Weeks First',
		metaDescription:
			'A two-week test of another Battlefield 6 cheat before switching to Battlefield 6 Cheats — ESP feel, soft aim, patch downtime, and support differences.',
		h1: 'I Tested Another Battlefield 6 Cheat for Two Weeks Before Switching',
		intro:
			'My Discord kept recommending a popular Battlefield 6 cheat brand. I gave it fourteen days on the same PC and playlists, then moved to Battlefield 6 Cheats. This is what actually differed — without the usual affiliate script.',
		keywords: [
			'battlefield 6 cheats review',
			'eft cheat comparison',
			'battlefield-6 cheat downtime',
			'soft aim test',
			'battlefield 6 cheats',
		],
		imageAlt: 'Two week hands-on comparison between Battlefield 6 cheat providers',
		sections: [
			{
				h2: 'Week one — setup and first impressions',
				paragraphs: [
					'Delivery was fine: license in email, loader as admin, overlays disabled. Menu learning took a couple evenings. Player ESP was readable. Loot ESP felt secondary. I ran several nights with information tools only and no aim assist so I could judge visibility on its own.',
					'Battlefield 6 Cheats later felt similar on install time, but filters for loot and extracts were easier to toggle independently during loot routes.',
				],
			},
			{
				h2: 'Soft aim and the mid-raid feel',
				paragraphs: [
					'Conservative FOV soft aim helped SMG and AR tracking. Sniping needed manual profile swaps that slowed me down. When I pushed smoothness too low, corrections looked obvious in review clips. Tuning toward smoother tracking fixed kills and reduced the robotic look.',
					'On Battlefield 6 Cheats I relied more on per-weapon profiles so dorms and long peeks did not share one magnet. Details are in the <a href="/battlefield-6-aimbot/">aimbot guide</a>.',
				],
			},
			{
				h2: 'The patch window that ended the trial',
				paragraphs: [
					'A Battlefield 6 plus EA Javelin update landed mid-test. The other tool’s status went quiet without a clear ETA. I skipped queues while my group played without me. A rebuild arrived days later; stability was mixed. That downtime — not a single feature screenshot — pushed me to switch.',
					'Battlefield 6 Cheats won me over with written notes on <a href="/updates/">Updates</a>. I still do not queue blind after patches on any tool.',
				],
			},
			{
				h2: 'After switching — what improved for my raids',
				paragraphs: [
					'Independent loot and player toggles cleaned late-raid screens. Radar helped extract holds. Support replies with order ID were fast enough during setup week. Pricing math favored a single full stack over stacking weekly subs — see <a href="/pricing/">Pricing</a>.',
					'If you run your own test, measure patch downtime hours, not just day-one vibes. Then read <a href="/setup/">Setup</a> before you buy anything.',
				],
			},
		],
	},
	{
		id: 'battlefield-6-cheats-vs-ghostware',
		imageKey: 'espWallhack',
		published: '2026-07-05',
		updated: '2026-08-13',
		category: 'Comparisons',
		featured: false,
		slug: 'battlefield-6-cheats-vs-ghostware-features-pricing',
		title: 'Full-Stack Battlefield 6 Cheats vs Minimal ESP Tools',
		metaDescription:
			'Full-stack Battlefield 6 Cheats versus minimal ESP-only Battlefield 6 tools — feature depth, radar, soft aim, pricing, and who should buy which style.',
		h1: 'Full-Stack Battlefield 6 Cheats vs Minimal ESP-Only Tools',
		intro:
			'Some Battlefield 6 tools sell a slim ESP module and call it a day. Battlefield 6 Cheats ships the wider raid stack. Neither philosophy is automatically wrong — they fit different players. Here is a clear comparison.',
		keywords: [
			'battlefield 6 esp only cheat',
			'battlefield 6 cheats features',
			'radar vs esp',
			'battlefield-6 cheat pricing',
			'battlefield 6 cheats',
		],
		imageAlt: 'Full stack Battlefield 6 Cheats compared with minimal ESP-only tools',
		sections: [
			{
				h2: 'Two philosophies: minimal surface vs full raid loop',
				paragraphs: [
					'Minimal tools focus on player boxes and light assist. Fewer features can mean a simpler menu and a lower price. Full-stack tools add loot filters, radar, and soft aim profiles so one menu covers information and fights.',
					'Battlefield 6 Cheats is intentionally full-stack. If you only need outlines in quiet raids, a slim ESP product may feel enough. If you rotate, loot, and hold extracts, missing radar becomes obvious.',
				],
			},
			{
				h2: 'Feature and pricing reality check',
				paragraphs: [
					'Battlefield 6 Cheats monthly is $35 and lifetime is $150 for ESP, radar, and soft aim together. Slimmer competitors often undercut sticker price while charging extra for modules you assumed were included. Always read the feature list, not the banner.',
					'Our public comparison points live on <a href="/features/">Features</a>, <a href="/battlefield-6-esp/">ESP</a>, <a href="/bf6-dma-cheats/">radar</a>, and <a href="/pricing/">Pricing</a>.',
				],
			},
			{
				h2: 'Detection talk without fairy tales',
				paragraphs: [
					'Smaller user bases generate fewer public ban screenshots — that is not proof of safety. Larger brands generate more noise even when maintenance is solid. Judge sellers by patch communication speed and whether you can find a dated status note.',
					'Battlefield 6 Cheats documents maintenance on <a href="/ea-javelin-bypass/">EA Javelin workflow</a> and <a href="/undetected-battlefield-6-cheats/">undetected notes</a>.',
				],
			},
			{
				h2: 'Which style should you buy?',
				paragraphs: [
					'Choose minimal ESP if budget is tight, you play casually, and you accept Discord-only status tracking. Choose Battlefield 6 Cheats if radar, loot filters, configurable soft aim, and a public Updates URL are must-haves.',
					'Decide your must-haves on paper first. Then open <a href="/battlefield-6-cheats/">battlefield 6 cheats</a> or keep shopping slim tools — but do not skip patch-day checks on either path.',
				],
			},
		],
	},
];

function translationBlock(src) {
	const sections = src.sections
		.map(
			(s) => `			{
				h2: ${JSON.stringify(s.h2)},
				paragraphs: [
${s.paragraphs.map((p) => `					${JSON.stringify(p)},`).join('\n')}
				],
			}`,
		)
		.join(',\n');

	return `{
		slug: ${JSON.stringify(src.slug)},
		title: ${JSON.stringify(src.title)},
		metaDescription: ${JSON.stringify(src.metaDescription)},
		h1: ${JSON.stringify(src.h1)},
		intro: ${JSON.stringify(src.intro)},
		keywords: ${JSON.stringify(src.keywords)},
		imageAlt: ${JSON.stringify(src.imageAlt)},
		sections: [
${sections}
		],
	}`;
}

function buildPost(src) {
	const translations = LOCALES.map((code) => `\t\t${code}: ${translationBlock(src)},`).join('\n');
	return `	{
		id: ${JSON.stringify(src.id)},
		imageKey: ${JSON.stringify(src.imageKey)},
		published: ${JSON.stringify(src.published)},
		updated: ${JSON.stringify(src.updated)},
		category: ${JSON.stringify(src.category)},
		featured: ${src.featured ? 'true' : 'false'},
		translations: {
${translations}
		},
	}`;
}

const file = `/* Auto-generated by scripts/generate-blog-posts.mjs — do not edit by hand. */
import type { BlogPostDefinition } from './types';

export const blogPosts: BlogPostDefinition[] = [
${sources.map(buildPost).join(',\n')}
];
`;

writeFileSync(OUT, file);
console.log(`Wrote ${sources.length} NLP blog posts → ${OUT}`);
