#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Battlefield 6 Cheats', 'Battlefield 6 Cheats'],
	['Battlefield 6 cheats', 'Battlefield 6 cheats'],
	['Battlefield 6 Cheats', 'Battlefield 6 Cheats'],
	['Escape from Battlefield 6', 'Escape from Battlefield 6'],
	['Escape from Battlefield 6', 'Escape from Battlefield 6'],
	['Call of Duty', 'Escape from Battlefield 6'],
	['Battlefield 6 PC', 'Escape from Battlefield 6 PC'],
	['for Battlefield 6', 'for Escape from Battlefield 6'],
	['Battlefield 6 ', 'Escape from Battlefield 6 '],
	['battlefield-6 ', 'battlefield-6 '],
	['EA Javelin maintenance', 'EA Javelin maintenance'],
	['EA Javelin anti-cheat', 'EA Javelin anti-cheat'],
	['EA Javelin', 'EA Javelin anti-cheat'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['PMCs', 'players'],
	['operator', 'player'],
	['PMCs', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['scav-run', 'scav-run'],
	['extract', 'extract'],
	['battlefieldcheat.com', 'battlefieldcheat.com'],
	['Trucos Battlefield 6', 'Trucos Escape from Battlefield 6'],
	['Triches Battlefield 6', 'Triches Escape from Battlefield 6'],
	['Cheats Battlefield 6', 'Cheats Escape from Battlefield 6'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en battleye key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\tjavelin: \{/, "\t'javelin': {");
pagesEn = pagesEn.replace(/Escape from Battlefield 6 Battlefield 6/g, 'Escape from Battlefield 6');
pagesEn = pagesEn.replace(/for Escape from Battlefield 6 Battlefield 6/g, 'for Escape from Battlefield 6');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'javelin'/g, "'javelin'");
pagesI18n = pagesI18n.replace(/javelin:/g, "'javelin':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
