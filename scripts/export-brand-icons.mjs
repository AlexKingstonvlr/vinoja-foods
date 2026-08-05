import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const markSvg = readFileSync(join(root, 'public/images/logo-mark.svg'));

const exports = [
  { out: 'public/images/logo.png', size: 512 },
  { out: 'public/apple-touch-icon.png', size: 180 },
  { out: 'public/favicon-32x32.png', size: 32 },
  { out: 'public/favicon-16x16.png', size: 16 }
];

for (const { out, size } of exports) {
  await sharp(markSvg).resize(size, size).png().toFile(join(root, out));
  console.log('wrote', out, size);
}
