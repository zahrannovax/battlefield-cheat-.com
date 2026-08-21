#!/usr/bin/env node
/**
 * One-time migration: Warzone Hacks → Battlefield 6 Cheats (Escape from Battlefield 6).
 * Domain: battlefieldcheat.com
 * Run from project root: node scripts/adapt-battlefield-6.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['warzone-aimbot', 'bf6-aimbot'],
	['warzone-esp', 'bf6-esp'],
	['warzone-wallhack', 'battlefield-6-wallhack'],
	['warzone-radar-hack', 'battlefield-6-radar-hack'],
	['undetected-warzone-cheats', 'undetected-battlefield-6-cheats'],
	['warzone-cheats-2026', 'battlefield-6-cheats-2026'],
	['ricochet-bypass', 'battleye-bypass'],
	['warzone-hacks', 'battlefield-6-cheats'],
	['warzone-cheat-download', 'battlefield-6-cheat-download'],
	['warzone-mod-menu', 'battlefield-6-mod-menu'],
	['warzone-soft-aim', 'battlefield-6-soft-aim'],
	['best-warzone-cheats', 'best-battlefield-6-cheats'],
	['warzone-aimbot-hack', 'battlefield-6-aimbot-hack'],
	['warzone-esp-hack', 'battlefield-6-esp-hack'],
	['warzone-unlock-all', 'battlefield-6-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://warzonehacks.net', 'https://battlefieldcheat.com'],
	['https://www.warzonehacks.net', 'https://www.battlefieldcheat.com'],
	['www.warzonehacks.net', 'www.battlefieldcheat.com'],
	['warzonehacks.net', 'battlefieldcheat.com'],
	['support@warzonehacks.net', 'our Discord server'],
	['support@warzonescheats.net', 'our Discord server'],
	['warzonescheats.net', 'battlefieldcheat.com'],
	['warzonescheats.com', 'battlefieldcheat.com'],
	['warzonescheats.xyz', 'battlefieldcheat.com'],
	['/products/warzone', '/products/battlefield-6'],
	['project-name=warzonehacks', 'project-name=besttarkovcheats'],
	['project-name=warzonescheats', 'project-name=besttarkovcheats'],
	['name = "warzonehacks"', 'name = "besttarkovcheats"'],
	['name = "warzonescheats"', 'name = "besttarkovcheats"'],
	['"name": "warzone-hacks"', '"name": "battlefield-6-cheats"'],
	['warzone-esp-player-tags', 'battlefield-6-esp-player-tags'],
	['warzone-wallhack-skeleton', 'battlefield-6-wallhack-skeleton'],
	['warzone-aimbot-sniper', 'battlefield-6-aimbot-sniper'],
	['warzone-aimbot-skeleton', 'battlefield-6-aimbot-skeleton'],
	['warzone-esp-radar', 'battlefield-6-esp-radar'],
	['warzone-cheats-combat', 'battlefield-6-cheats-combat'],
	['warzone-hacks-logo', 'battlefield-6-cheats-logo'],
	['warzone-hero-banner', 'battlefield-6-hero-banner'],
	['warzone-hero-ghost', 'battlefield-6-hero-ghost'],
	['warzone-hero-source', 'battlefield-6-hero-source'],
	['undetected-warzone-cheats', 'undetected-battlefield-6-cheats'],
	['best-warzone-cheats', 'best-battlefield-6-cheats'],
	['warzone-cheat-download', 'battlefield-6-cheat-download'],
	['warzone-cheats-2026', 'battlefield-6-cheats-2026'],
	['warzone-radar-hack', 'battlefield-6-radar-hack'],
	['warzone-aimbot-hack', 'battlefield-6-aimbot-hack'],
	['warzone-esp-hack', 'battlefield-6-esp-hack'],
	['warzone-unlock-all', 'battlefield-6-unlock-all'],
	['warzone-soft-aim', 'battlefield-6-soft-aim'],
	['warzone-mod-menu', 'battlefield-6-mod-menu'],
	['warzone-wallhack', 'battlefield-6-wallhack'],
	['warzone-hacks', 'battlefield-6-cheats'],
	['warzone-aimbot', 'bf6-aimbot'],
	['warzone-esp', 'bf6-esp'],
	['ricochet-bypass', 'battleye-bypass'],
	["'ricochet'", "'javelin'"],
	['| ricochet', '| battleye'],
	['pageId="ricochet"', 'pageId="battleye"'],
	['pageId: \'ricochet\'', "pageId: 'javelin'"],
	['"ricochet"', '"battleye"'],
	['call-of-duty-warzone-cheats', 'escape-from-battlefield-6-cheats'],
	['Call of Duty: Warzone', 'Escape from Battlefield 6'],
	['Call of Duty Warzone', 'Escape from Battlefield 6'],
	['Warzone Hacks', 'Battlefield 6 Cheats'],
	['Warzone Cheats', 'Battlefield 6 Cheats'],
	['Warzone cheats', 'Battlefield 6 cheats'],
	['Warzone cheat', 'Battlefield 6 cheat'],
	['Warzone hacks', 'Battlefield 6 cheats'],
	['Warzone hack', 'Battlefield 6 cheat'],
	['WarzoneCheatsSite', 'Battlefield 6CheatsSite'],
	['Warzone Intel', 'Battlefield 6 Intel'],
	['Ricochet anti-cheat', 'EA Javelin anti-cheat'],
	['Ricochet maintenance', 'EA Javelin maintenance'],
	['Ricochet bypass', 'EA Javelin bypass'],
	['Ricochet Bypass', 'EA Javelin Bypass'],
	['Ricochet patches', 'EA Javelin patches'],
	['Ricochet patch', 'EA Javelin patch'],
	['Ricochet updates', 'EA Javelin updates'],
	['Ricochet update', 'EA Javelin update'],
	['after Ricochet', 'after EA Javelin'],
	['RICOCHET', 'EA Javelin'],
	['Ricochet', 'EA Javelin'],
	['ricochet', 'javelin'],
	['warzone hacks', 'battlefield 6 cheats'],
	['warzone cheats', 'battlefield 6 cheats'],
	['warzone hack', 'battlefield-6 cheat'],
	['warzone cheat', 'battlefield-6 cheat'],
	['Verdansk, Urzikstan, and Rebirth Island', 'Customs, Woods, and Streets of Battlefield 6'],
	['Verdansk, Urzikstan and Rebirth Island', 'Customs, Woods and Streets of Battlefield 6'],
	['Verdansk, Urzikstan et Rebirth Island', 'Customs, Woods et Streets of Battlefield 6'],
	['Verdansk, Urzikstan e Rebirth Island', 'Customs, Woods e Streets of Battlefield 6'],
	['Verdansk, Urzikstan und Rebirth Island', 'Customs, Woods und Streets of Battlefield 6'],
	['gulag fights', 'extract fights'],
	['gulag fight', 'extract fight'],
	['gulag rounds', 'raid rounds'],
	['gulag', 'extract'],
	['BR and Resurgence-style modes', 'PMC raids and Scav runs'],
	['BR and Resurgence', 'PMC raids and Scav runs'],
	['BR & Resurgence', 'PMC & Scav'],
	['Resurgence and Battle Royale', 'PMC raids and Scav runs'],
	['Battle Royale', 'raid'],
	['Resurgence', 'Scav run'],
	['resurgence', 'scav run'],
	['contract markers', 'extract and loot markers'],
	['loadout drops', 'high-value loot'],
	['loadout drop', 'high-value loot'],
	['Operators', 'PMCs'],
	['operators', 'PMCs'],
	['UAV', 'extract timer'],
	['warzoneImages', 'tarkovImages'],
	["from './warzone'", "from './battlefield-6'"],
	["from '../data/warzone'", "from '../data/battlefield-6'"],
	["from '../../data/warzone'", "from '../../data/battlefield-6'"],
	['fetch-warzone-images', 'fetch-battlefield-6-images'],
	['warzone-hack-overlays', 'battlefield-6-hack-overlays'],
	['trucos-warzone', 'trucos-battlefield-6'],
	['triche-warzone', 'triche-battlefield-6'],
	['cheats-warzone', 'cheats-battlefield-6'],
	['trucchi-warzone', 'trucchi-battlefield-6'],
	['cheaty-warzone', 'cheaty-battlefield-6'],
	['chity-warzone', 'chity-battlefield-6'],
	['chitov-warzone', 'chitov-battlefield-6'],
	['chitiv-warzone', 'chitiv-battlefield-6'],
	['cheatow-warzone', 'cheatow-battlefield-6'],
	['hile-warzone', 'hile-battlefield-6'],
	['warzone-hile', 'battlefield-6-hile'],
	['warzone-esp-chity', 'battlefield-6-esp-chity'],
	['warzone-aimbot-chity', 'battlefield-6-aimbot-chity'],
	['unentdeckte-warzone-cheats', 'unentdeckte-battlefield-6-cheats'],
	['cheats-warzone-indetectaveis', 'cheats-battlefield-6-indetectaveis'],
	['trucchi-warzone-indetectabili', 'trucchi-battlefield-6-indetectabili'],
	['niewykrywalne-cheats-warzone', 'niewykrywalne-cheats-battlefield-6'],
	['nedecektiruemye-chity-warzone', 'nedecektiruemye-chity-battlefield-6'],
	['tespit-edilemeyen-warzone-hileleri', 'tespit-edilemeyen-battlefield-6-hileleri'],
	['nedecektovani-chity-warzone', 'nedecektovani-chity-battlefield-6'],
	['cheats-warzone-nedetectabile', 'cheats-battlefield-6-nedetectabile'],
	['basta-warzone-cheats', 'basta-battlefield-6-cheats'],
	['warzone-cheats-funktionen', 'battlefield-6-cheats-funktionen'],
	['warzone-cheats-functies', 'battlefield-6-cheats-functies'],
	['caracteristicas-trucos-warzone', 'caracteristicas-trucos-battlefield-6'],
	['fonctionnalites-triche-warzone', 'fonctionnalites-triche-battlefield-6'],
	['recursos-cheats-warzone', 'recursos-cheats-battlefield-6'],
	['call-of-duty-warzone', 'escape-from-battlefield-6'],
	['Buy Warzone Hacks', 'Buy Battlefield 6 Cheats'],
	['Warzone', 'Battlefield 6'],
	['warzone', 'battlefield-6'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-battlefield-6.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameWarzoneTs() {
	const from = path.join(ROOT, 'src', 'data', 'warzone.ts');
	const to = path.join(ROOT, 'src', 'data', 'battlefield-6.ts');
	try {
		await rename(from, to);
		console.log('Renamed warzone.ts → battlefield-6.ts');
	} catch (e) {
		console.warn(`warzone.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-warzone-images.mjs', 'fetch-battlefield-6-images.mjs'],
		['warzone-hack-overlays.mjs', 'battlefield-6-hack-overlays.mjs'],
		['fix-warzone-copy.mjs', 'fix-battlefield-6-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'bf6-aimbot': 'bf6-aimbot',
		'bf6-esp': 'bf6-esp',
		'battlefield-6-wallhack': 'wallhack',
		'battlefield-6-radar-hack': 'radar',
		'undetected-battlefield-6-cheats': 'undetected',
		'battlefield-6-cheats-2026': 'cheats-2026',
		'battleye-bypass': 'javelin',
		'battlefield-6-cheats': 'hacks',
		'battlefield-6-cheat-download': 'cheat-download',
		'battlefield-6-mod-menu': 'mod-menu',
		'battlefield-6-soft-aim': 'soft-aim',
		'best-battlefield-6-cheats': 'best-cheats',
		'battlefield-6-aimbot-hack': 'aimbot-hack',
		'battlefield-6-esp-hack': 'esp-hack',
		'battlefield-6-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('warzone')) continue;
		const newName = file.replace(/warzone/g, 'battlefield-6').replace(/battlefield-6-hacks-logo/g, 'battlefield-6-cheats-logo');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Warzone Hacks → Battlefield 6 Cheats (battlefieldcheat.com)...\n');
	await renamePageDirs();
	await renameWarzoneTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: fix brand.ts identity, sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
