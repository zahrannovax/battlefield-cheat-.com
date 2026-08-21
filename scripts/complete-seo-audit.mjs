#!/usr/bin/env node
/**
 * Completes escape-from-battlefield-6-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'battlefield-6-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'battlefield-6-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'battlefield-6-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'battlefield-6-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-battlefield-6-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'battlefield-6-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'battlefield-6-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'battlefield-6-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/battlefield-6-battlefield-6/g, 'battlefield-6'],
	[/battleye-bypass-battlefield-6/g, 'battleye-bypass'],
	[/Escape from Battlefield 6/g, 'Escape from Battlefield 6'],
	[/Escape from Battlefield 6/g, 'Escape from Battlefield 6'],
	[/Call of Duty/g, 'Escape from Battlefield 6'],
	[/Battlefield 6 Wallhack/g, 'Escape from Battlefield 6 Wallhack'],
	[/Battlefield 6 Radar Hack/g, 'Escape from Battlefield 6 Radar Hack'],
	[/Battlefield 6 Cheat Features/g, 'Escape from Battlefield 6 Cheat Features'],
	[/Battlefield 6 Cheat Pricing/g, 'Escape from Battlefield 6 Cheat Pricing'],
	[/Battlefield 6 Cheat Setup/g, 'Escape from Battlefield 6 Cheat Setup'],
	[/Battlefield 6 Cheat Status/g, 'Escape from Battlefield 6 Cheat Status'],
	[/Battlefield 6 Cheat Support/g, 'Escape from Battlefield 6 Cheat Support'],
	[/Battlefield 6 squad fight/g, 'Escape from Battlefield 6 squad fight'],
	[/Battlefield 6 squad builder/g, 'Escape from Battlefield 6 loadout builder'],
	[/Battlefield 6 store header/g, 'Escape from Battlefield 6 header'],
	[/Battlefield 6 wasteland combat/g, 'Escape from Battlefield 6 battle royale combat'],
	[/Battlefield 6 loadout builder/g, 'Escape from Battlefield 6 loadout builder'],
	[/Battlefield 6 pricing/g, 'Escape from Battlefield 6 pricing'],
	[/Battlefield 6 EA Javelin anti-cheat/g, 'Escape from Battlefield 6 EA Javelin anti-cheat'],
	[/on Battlefield 6/g, 'on Escape from Battlefield 6'],
	[/for Battlefield 6/g, 'for Escape from Battlefield 6'],
	[/Battlefield 6 guides/g, 'Escape from Battlefield 6 guides'],
	[/Battlefield 6 guide/g, 'Escape from Battlefield 6 guide'],
	[/Battlefield 6 hileleri/g, 'Escape from Battlefield 6 hileleri'],
	[/Battlefield 6 hile/g, 'Escape from Battlefield 6 hile'],
	[/Battlefield 6 hileleri/g, 'Escape from Battlefield 6 hileleri'],
	[/cheatów Battlefield 6/g, 'cheatów Escape from Battlefield 6'],
	[/cheat Battlefield 6/g, 'cheat Escape from Battlefield 6'],
	[/cheats Battlefield 6/g, 'cheats Escape from Battlefield 6'],
	[/trucos Battlefield 6/g, 'trucos Escape from Battlefield 6'],
	[/triche Battlefield 6/g, 'triche Escape from Battlefield 6'],
	[/trucchi Battlefield 6/g, 'trucchi Escape from Battlefield 6'],
	[/Wallhack Battlefield 6/g, 'Escape from Battlefield 6 Wallhack'],
	[/cheat Battlefield 6 undetected/g, 'cheat Escape from Battlefield 6 undetected'],
	[/cheats Battlefield 6 undetected/g, 'cheats Escape from Battlefield 6 undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/raid and scav-run/g, 'raid and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/battleye/gi, 'javelin'],
	[/EA Javelin/g, 'EA Javelin anti-cheat'],
	[/escape-from-battlefield-6-cheats/g, 'escape-from-battlefield-6-cheats'],
	[/escape-from-battlefield-6/g, 'battlefield-6'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Escape from Battlefield 6'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Escape from Battlefield 6 anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Battlefield 6 Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Battlefield 6 guides/g, 'Escape from Battlefield 6 guides');
	content = content.replace(/Battlefield 6 guide/g, 'Escape from Battlefield 6 guide');
	content = content.replace(/Battlefield 6 hileleri/g, 'Escape from Battlefield 6 hileleri');
	content = content.replace(/Battlefield 6 hile/g, 'Escape from Battlefield 6 hile');
	content = content.replace(/cheat Battlefield 6/g, 'cheat Escape from Battlefield 6');
	content = content.replace(/cheats Battlefield 6/g, 'cheats Escape from Battlefield 6');
	content = content.replace(/trucos Battlefield 6/g, 'trucos Escape from Battlefield 6');
	content = content.replace(/triche Battlefield 6/g, 'triche Escape from Battlefield 6');
	content = content.replace(/trucchi Battlefield 6/g, 'trucchi Escape from Battlefield 6');
	content = content.replace(/cheatów Battlefield 6/g, 'cheatów Escape from Battlefield 6');
	content = content.replace(/читов Battlefield 6/g, 'читов Escape from Battlefield 6');
	content = content.replace(/читів Battlefield 6/g, 'читів Escape from Battlefield 6');
	content = content.replace(/Battlefield 6チート/g, 'Escape from Battlefield 6チート');
	content = content.replace(/Battlefield 6 치트/g, 'Escape from Battlefield 6 치트');
	content = content.replace(/Battlefield 6作弊/g, 'Escape from Battlefield 6作弊');
	content = content.replace(/Battlefield 6 rehberleri/g, 'Escape from Battlefield 6 rehberleri');
	content = content.replace(/Battlefield 6 gidsen/g, 'Escape from Battlefield 6 gidsen');
	content = content.replace(/Battlefield 6 průvodce/g, 'Escape from Battlefield 6 průvodce');
	content = content.replace(/Battlefield 6 guider/g, 'Escape from Battlefield 6 guider');
	content = content.replace(/Battlefield 6 related/g, 'Escape from Battlefield 6 related');
	content = content.replace(/Battlefield 6 ガイド/g, 'Escape from Battlefield 6 ガイド');
	content = content.replace(/Battlefield 6 가이드/g, 'Escape from Battlefield 6 가이드');
	content = content.replace(/Battlefield 6指南/g, 'Escape from Battlefield 6指南');
	content = content.replace(/Battlefield 6 गाइड/g, 'Escape from Battlefield 6 गाइड');
	content = content.replace(/Battlefield 6 panduan/g, 'Escape from Battlefield 6 panduan');
	content = content.replace(/Battlefield 6 คู่มือ/g, 'Escape from Battlefield 6 คู่มือ');
	content = content.replace(/Battlefield 6 hướng dẫn/g, 'Escape from Battlefield 6 hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Battlefield 6 Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
