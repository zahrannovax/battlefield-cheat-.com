#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Battlestate Games'"],
	['Activision\u2019', "Battlestate Games'"],
	['Activision services', 'Battlestate Games services'],
	['Activision service', 'Battlestate Games service'],
	['Activision platform', 'Battlestate Games platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Battlestate Games bans'],
	['Activision security', 'EA Javelin security'],
	['Activision Status', 'Escape from Battlefield 6 Support'],
	['Activision Battlefield 6', 'Escape from Battlefield 6'],
	['Activision Support', 'Escape from Battlefield 6 Support'],
	['Activision', 'Battlestate Games'],
	['EAC guide', 'EA Javelin guide'],
	['undetected EAC notes', 'undetected EA Javelin notes'],
	['status.epicgames.com', 'www.escapefromtarkov.com/support'],
	['www.epicgames.com/battlefield-6', 'www.escapefromtarkov.com'],
	['www.battlefield-6.com/competitive', 'www.escapefromtarkov.com'],
	['https://www.battlefield-6.com/', 'https://www.escapefromtarkov.com/'],
	['Battlefield 6.com', 'Escape from Battlefield 6'],
	['Battlefield 6 Competitive', 'Escape from Battlefield 6'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
