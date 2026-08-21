const fs = require('fs');
const path = require('path');
const dirs = ['./scripts/i18n-data'];

function replaceInFile(filePath) {
  let text = fs.readFileSync(filePath, 'utf8');
  let originalText = text;

  // Fix EXT.battlefield-6
  text = text.replace(/EXT\.battlefield-6/g, "EXT['battlefield-6']");
  
  // Fix corrupted quote: Battlefield 6’s
  text = text.replace(/Battlefield 6\ufffd"s/g, "Battlefield 6's");
  text = text.replace(/Battlefield 6\ufffd's/g, "Battlefield 6's");
  // Some might just have normal smart quote
  text = text.replace(/Battlefield 6’s/g, "Battlefield 6's");

  // Remove any remaining \ufffd
  text = text.replace(/\ufffd/g, "-");

  if (text !== originalText) {
    fs.writeFileSync(filePath, text, 'utf8');
    console.log('Updated', filePath);
  }
}

for (const dir of dirs) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mjs') || f.endsWith('.ts'));
  for (const file of files) {
    replaceInFile(path.join(dir, file));
  }
}
