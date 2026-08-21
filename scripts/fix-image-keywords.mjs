#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'battlefield 6 cheats', espWallhack: 'battlefield 6 cheats wallhack', aimbotCombat: 'battlefield 6 cheats aimbot', squadFight: 'battlefield 6 cheats', playerEsp: 'battlefield 6 cheats esp', headerArt: 'battlefield 6 cheats aimbot', cheatsPackage: 'battlefield 6 cheats radar', rebootFight: 'battlefield 6 cheats aimbot', battleRoyale: 'battlefield 6 cheats', battleRoyaleIsland: 'battlefield 6 cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Battlefield 6 ESP player tags hack'", "imageAlt: 'battlefield 6 cheats esp'"],
	["imageAlt: 'Battlefield 6 ESP radar hack'", "imageAlt: 'battlefield 6 cheats radar'"],
	["imageAlt: 'Battlefield 6 aimbot sniper kill'", "imageAlt: 'battlefield 6 cheats aimbot'"],
	["imageAlt: 'Battlefield 6 aimbot skeleton targeting'", "imageAlt: 'battlefield 6 cheats aimbot'"],
	["imageAlt: 'Battlefield 6 cheats ADS combat'", "imageAlt: 'battlefield 6 cheats'"],
	["imageAlt: 'Battlefield 6 cheats setup PC activation'", "imageAlt: 'battlefield 6 cheats'"],
	["imageAlt: 'Battlefield 6 cheats updates EA Javelin maintenance'", "imageAlt: 'battlefield 6 cheats'"],
	["imageAlt: 'Battlefield 6 cheats FAQ ESP aimbot'", "imageAlt: 'battlefield 6 cheats'"],
	["imageAlt: 'Battlefield 6 cheats support license help'", "imageAlt: 'battlefield 6 cheats'"],
	["imageAlt: 'Undetected battlefield 6 cheats ESP wallhack'", "imageAlt: 'undetected battlefield 6 cheats'"],
	["imageAlt: 'Battlefield 6 wallhack skeleton ESP'", "imageAlt: 'battlefield 6 cheats wallhack'"],
	["imageAlt: 'EA Javelin bypass Battlefield 6 ESP aimbot'", "imageAlt: 'battlefield 6 cheats battleye'"],
	["imageAlt: 'Battlefield 6 cheats 2026 ESP aimbot'", "imageAlt: 'battlefield 6 cheats'"],
	["imageAlt: 'Battlefield 6 cheats combat aimbot'", "imageAlt: 'battlefield 6 cheats'"],
	["imageAlt: 'Battlefield 6 cheat download ESP aimbot'", "imageAlt: 'battlefield 6 cheats download'"],
	["imageAlt: 'Battlefield 6 mod menu ESP aimbot'", "imageAlt: 'battlefield 6 cheats mod menu'"],
	["imageAlt: 'Battlefield 6 soft aim aimbot settings'", "imageAlt: 'battlefield 6 cheats soft aim'"],
	["imageAlt: 'Best battlefield 6 cheats 2026 ESP'", "imageAlt: 'best battlefield 6 cheats'"],
	["imageAlt: 'Battlefield 6 aimbot hack combat'", "imageAlt: 'battlefield 6 cheats aimbot'"],
	["imageAlt: 'Battlefield 6 ESP hack wallhack'", "imageAlt: 'battlefield 6 cheats esp'"],
	["imageAlt: 'Battlefield 6 unlock all ESP aimbot guide'", "imageAlt: 'battlefield 6 cheats'"],
	["imageAlt: 'Battlefield 6 cheats privacy policy'", "imageAlt: 'battlefield 6 cheats'"],
	["imageAlt: 'Battlefield 6 cheats refund policy'", "imageAlt: 'battlefield 6 cheats'"],
	["imageAlt: 'Battlefield 6 cheats terms of use'", "imageAlt: 'battlefield 6 cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Battlefield 6 ${meta.altKeyword}`")
	.join("imageAlt: 'battlefield 6 cheats'")
	.split("galleryTitle: `Battlefield 6 Cheats ${topicName}`")
	.join("galleryTitle: 'battlefield 6 cheats'")
	.split("imageAlt: `Battlefield 6 cheats ${kind} policy`")
	.join("imageAlt: 'battlefield 6 cheats'")
	.split("galleryTitle: `Battlefield 6 Cheats ${kind} resources`")
	.join("galleryTitle: 'battlefield 6 cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
