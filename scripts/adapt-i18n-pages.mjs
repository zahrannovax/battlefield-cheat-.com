#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Battlefield 6 source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['bf6-esp', 'bf6-esp'],
	['bf6-aimbot', 'bf6-aimbot'],
	["'javelin'", "'javelin'"],
	['battleye-bypass', 'battleye-bypass'],
	['undetected-battlefield-6-cheats', 'undetected-battlefield-6-cheats'],
	['battlefield-6-wallhack', 'battlefield-6-wallhack'],
	['battlefield-6-radar-hack', 'battlefield-6-radar-hack'],
	['battlefield-6-cheats-2026', 'battlefield-6-cheats-2026'],
	['escape-from-battlefield-6-cheats', 'escape-from-battlefield-6-cheats'],
	['escape-from-battlefield-6', 'battlefield-6'],
	['Escape from Battlefield 6', 'Escape from Battlefield 6'],
	['Escape from Battlefield 6', 'Escape from Battlefield 6'],
	['Battlefield 6 Cheats', 'Battlefield 6 Cheats'],
	['Battlefield 6 cheats', 'Battlefield 6 cheats'],
	['Battlefield 6 cheat', 'Battlefield 6 cheat'],
	['Battlefield 6 ESP', 'Escape from Battlefield 6 ESP'],
	['Battlefield 6 Aimbot', 'Escape from Battlefield 6 Aimbot'],
	['Battlefield 6 wallhack', 'Escape from Battlefield 6 wallhack'],
	['Battlefield 6 radar', 'Escape from Battlefield 6 radar'],
	['Battlefield 6 firefights', 'Escape from Battlefield 6 firefights'],
	['Battlefield 6 combat', 'Escape from Battlefield 6 combat'],
	['Battlefield 6 patches', 'Escape from Battlefield 6 patches'],
	['Battlefield 6 updates', 'Escape from Battlefield 6 updates'],
	['Battlefield 6 setup', 'Escape from Battlefield 6 setup'],
	['Battlefield 6 license', 'Escape from Battlefield 6 license'],
	['Battlefield 6 licenses', 'Escape from Battlefield 6 licenses'],
	['Battlefield 6 sessions', 'Escape from Battlefield 6 sessions'],
	['in Battlefield 6', 'in Escape from Battlefield 6'],
	['for Battlefield 6', 'for Escape from Battlefield 6'],
	['Battlefield 6 on', 'Escape from Battlefield 6 on'],
	['Battlefield 6 or', 'Escape from Battlefield 6 or'],
	['Battlefield 6\'s', 'Escape from Battlefield 6\'s'],
	['Battlefield 6 ', 'Escape from Battlefield 6 '],
	['EA Javelin anti-cheat', 'EA Javelin anti-cheat'],
	['EA Javelin maintenance', 'EA Javelin maintenance'],
	['EA Javelin bypass', 'EA Javelin bypass'],
	['EA Javelin Bypass', 'EA Javelin Bypass'],
	['EA Javelin', 'EA Javelin anti-cheat'],
	['javelin', 'javelin'],
	['our Discord server', 'our Discord server'],
	['Customs, Woods, and Streets of Battlefield 6', 'Customs, Woods, and Streets of Battlefield 6'],
	['Customs, Woods and Streets of Battlefield 6', 'Customs, Woods and Streets of Battlefield 6'],
	['extract fights', 'extract fights'],
	['extract fight', 'extract fight'],
	['raid rounds', 'raid rounds'],
	['extract', 'extract'],
	['PMCs', 'players'],
	['operator', 'player'],
	['PMCs', 'Players'],
	['Operator', 'Player'],
	['extract timer', 'extract timer'],
	['PMC raids and Scav runs', 'PMC raids and Scav runs'],
	['PMC raids and Scav runs', 'PMC raids and Scav runs'],
	['PMC & Scav', 'PMC & Scav'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Escape from Battlefield 6 combat pace'],
	['COD', 'Escape from Battlefield 6'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Battlefield 6 Cheats',
	game: 'Escape from Battlefield 6',
	checkout: 'Zadeyo',
	javelin: 'EA Javelin anti-cheat',
};`,
);
phrases = phrases.replace(/KW\.battleye/g, 'KW.battleye');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Customs, Woods, and Streets of Battlefield 6'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
