const fs = require('fs');
const files = [
  'src/components/react/HomeAbout.tsx',
  'src/components/react/HomeSeo.tsx',
  'src/data/i18n/content.generated.ts',
  'src/middleware.ts',
  'src/worker.ts',
  'public/locales/en/translation.json',
  'public/locales/es/translation.json',
  'public/locales/fr/translation.json',
  'public/locales/de/translation.json',
  'public/locales/nl/translation.json'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let buf = fs.readFileSync(file);
    if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) {
      buf = buf.subarray(3); // remove BOM
    }
    const str = buf.toString('utf8');
    
    // Check if it has garbled chars
    if (str.includes('â€”') || str.includes('â†') || str.includes('Ã')) {
       try {
         const fixed = Buffer.from(str, 'latin1').toString('utf8');
         fs.writeFileSync(file, fixed, 'utf8');
         console.log('Fixed:', file);
       } catch (e) {
         console.log('Could not latin1 decode:', file);
       }
    } else {
       console.log('Looks ok:', file);
    }
  }
}
