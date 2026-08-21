import sharp from 'sharp';
import fs from 'fs';

async function optimizeImages() {
  const input = 'public/images/hero-banner-new-1.png';
  
  // Output webp versions
  await sharp(input)
    .resize({ width: 1536 })
    .webp({ quality: 80 })
    .toFile('public/images/hero-banner-1536.webp');

  await sharp(input)
    .resize({ width: 1024 })
    .webp({ quality: 80 })
    .toFile('public/images/hero-banner-1024.webp');

  await sharp(input)
    .resize({ width: 768 })
    .webp({ quality: 80 })
    .toFile('public/images/hero-banner-768.webp');

  console.log('Optimized images successfully.');
}

optimizeImages().catch(console.error);
