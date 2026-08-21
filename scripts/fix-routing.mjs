#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Battlefield 6 source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['bf6-esp', 'bf6-esp'],
	['bf6-aimbot', 'bf6-aimbot'],
	['javelin', 'javelin'],
	['undetected-battlefield-6-cheats', 'undetected-battlefield-6-cheats'],
	['battlefield-6-wallhack', 'battlefield-6-wallhack'],
	['battlefield-6-radar-hack', 'battlefield-6-radar-hack'],
	['battlefield-6-cheats-2026', 'battlefield-6-cheats-2026'],
	['battleye-bypass', 'battleye-bypass'],
	['battlefieldcheat.com', 'battlefieldcheat.com'],
	['trucos-battlefield-6', 'trucos-battlefield-6'],
	['triche-battlefield-6', 'triche-battlefield-6'],
	['battlefield-6-cheats', 'escape-from-battlefield-6-cheats'],
	['cheats-battlefield-6', 'cheats-battlefield-6'],
	['trucchi-battlefield-6', 'trucchi-battlefield-6'],
	['cheaty-battlefield-6', 'cheaty-battlefield-6'],
	['chity-battlefield-6', 'chity-battlefield-6'],
	['chitov-battlefield-6', 'chitov-battlefield-6'],
	['chitiv-battlefield-6', 'chitiv-battlefield-6'],
	['cheatow-battlefield-6', 'cheatow-battlefield-6'],
	['hile-battlefield-6', 'hile-battlefield-6'],
	['battlefield-6-hile', 'battlefield-6-hile'],
	['battlefield-6-esp-chity', 'battlefield-6-esp-chity'],
	['battlefield-6-aimbot-chity', 'battlefield-6-aimbot-chity'],
	['unentdeckte-battlefield-6-cheats', 'unentdeckte-escape-from-battlefield-6-cheats'],
	['cheats-battlefield-6-indetectaveis', 'cheats-battlefield-6-indetectaveis'],
	['trucchi-battlefield-6-indetectabili', 'trucchi-battlefield-6-indetectabili'],
	['niewykrywalne-cheats-battlefield-6', 'niewykrywalne-cheats-battlefield-6'],
	['nedecektiruemye-chity-battlefield-6', 'nedecektiruemye-chity-battlefield-6'],
	['tespit-edilemeyen-battlefield-6-hileleri', 'tespit-edilemeyen-battlefield-6-hileleri'],
	['nedecektovani-chity-battlefield-6', 'nedecektovani-chity-battlefield-6'],
	['cheats-battlefield-6-nedetectabile', 'cheats-battlefield-6-nedetectabile'],
	['basta-battlefield-6-cheats', 'basta-escape-from-battlefield-6-cheats'],
	['battleye-bypass-trucos-battlefield-6', 'battleye-bypass-trucos-battlefield-6'],
	['battleye-bypass-triche-battlefield-6', 'battleye-bypass-triche-battlefield-6'],
	['battleye-bypass-cheats-battlefield-6', 'battleye-bypass-cheats-battlefield-6'],
	['battleye-bypass-chity-battlefield-6', 'battleye-bypass-chity-battlefield-6'],
	['battleye-bypass-battlefield-6', 'battleye-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix battleye key in englishPaths
	content = content.replace(/\tjavelin: '/, "\t'javelin': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-battlefield-6-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-battlefield-6-cheats-hero.webp',
	'bf6-esp': '/images/escape-from-battlefield-6-cheats-esp-wallhack.webp',
	'bf6-aimbot': '/images/escape-from-battlefield-6-cheats-aimbot-combat.webp',
	features: '/images/escape-from-battlefield-6-cheats-package.webp',
	pricing: '/images/escape-from-battlefield-6-cheats-cover.webp',
	setup: '/images/battlefield-6-loadout-builder.webp',
	updates: '/images/battlefield-6-header-art.webp',
	faq: '/images/battlefield-6-squad-fight.webp',
	support: '/images/escape-from-battlefield-6-cheats-package.webp',
	undetected: '/images/battlefield-6-battle-royale-combat.webp',
	wallhack: '/images/escape-from-battlefield-6-cheats-esp-wallhack.webp',
	radar: '/images/battlefield-6-player-esp.webp',
	'javelin': '/images/battlefield-6-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-battlefield-6-cheats-hero.webp',
	privacy: '/images/escape-from-battlefield-6-cheats-aimbot-combat.webp',
	refund: '/images/escape-from-battlefield-6-cheats-cover.webp',
	terms: '/images/escape-from-battlefield-6-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'bf6-esp', 'bf6-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'javelin',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'bf6-esp' | 'bf6-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'javelin' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
