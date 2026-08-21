import fs from 'fs';
import path from 'path';

const dirs = ['./scripts', './scripts/i18n-data', './src/data', './src/data/i18n', './src/components', './src/layouts', './src/pages'];
const files = [];

function getFiles(dir) {
  if (fs.existsSync(dir)) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        getFiles(fullPath);
      } else if (entry.isFile() && (fullPath.endsWith('.mjs') || fullPath.endsWith('.js') || fullPath.endsWith('.ts') || fullPath.endsWith('.astro') || fullPath.endsWith('.json'))) {
        files.push(fullPath);
      }
    }
  }
}

for (const dir of dirs) {
  getFiles(dir);
}

const replacements = [
  { from: /support@tarkovcheats\.org/gi, to: "our Discord server" },
  { from: /tarkovcheats\.org/gi, to: "battlefieldcheat.com" },
  { from: /Escape from Tarkov/gi, to: "Battlefield 6" },
  { from: /TARKOV CHEATS/g, to: "BATTLEFIELD 6 CHEATS" },
  { from: /Tarkov Cheats/g, to: "Battlefield 6 Cheats" },
  { from: /tarkov cheats/gi, to: "battlefield 6 cheats" },
  { from: /TARKOV ESP/g, to: "BATTLEFIELD 6 ESP" },
  { from: /Tarkov ESP/gi, to: "Battlefield 6 ESP" },
  { from: /TARKOV/g, to: "BATTLEFIELD 6" },
  { from: /Tarkov/g, to: "Battlefield 6" },
  // Be careful with lowercase tarkov, only replace whole words to avoid breaking URLs that weren't caught
  { from: /\btarkov\b/g, to: "battlefield-6" } // Use hyphenated version because most lowercase remaining are in pageIds or URLs? No, wait. 
];

for (const filePath of files) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  for (const { from, to } of replacements) {
    content = content.replace(from, to);
  }
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}
