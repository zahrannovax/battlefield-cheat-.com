#!/usr/bin/env node
/** Final pass: fix remaining Battlefield 6 references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['tarkovImages', 'tarkovImages'],
	["from '../data/battlefield-6'", "from '../data/battlefield-6'"],
	["from './battlefield-6'", "from './battlefield-6'"],
	['/undetected-battlefield-6-cheats/', '/undetected-battlefield-6-cheats/'],
	['/battlefield-6-wallhack/', '/battlefield-6-wallhack/'],
	['/bf6-dma-cheats/', '/bf6-dma-cheats/'],
	['/ea-javelin-bypass/', '/ea-javelin-bypass/'],
	['/battlefield-6-cheats-2026/', '/battlefield-6-cheats-2026/'],
	['/battlefield-6-aimbot/', '/battlefield-6-aimbot/'],
	['/battlefield-6-esp/', '/battlefield-6-esp/'],
	['/battlefield-6-cheats/', '/battlefield-6-esp/'],
	['Battlefield 6 Cheats', 'Battlefield 6 Cheats'],
	['Battlefield 6 cheats', 'Battlefield 6 cheats'],
	['Battlefield 6 wallhack', 'Escape from Battlefield 6 wallhack'],
	['Battlefield 6 radar', 'Escape from Battlefield 6 radar'],
	['Battlefield 6 Aimbot', 'Escape from Battlefield 6 Aimbot'],
	['Battlefield 6 ESP', 'Escape from Battlefield 6 ESP'],
	['Escape from Battlefield 6', 'Escape from Battlefield 6'],
	['EA Javelin', 'EA Javelin anti-cheat'],
	['javelin', 'javelin'],
	['battlefieldcheat.com', 'battlefieldcheat.com'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
