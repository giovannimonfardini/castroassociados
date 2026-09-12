import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const inline = (path, type) => `data:${type};base64,${readFileSync(new URL(path, root)).toString('base64')}`;
const replacements = {
  '__OFFICE__': inline('public/images/office.jpg', 'image/jpeg'),
  '__CONSULT__': inline('public/images/consultation.jpg', 'image/jpeg'),
  '__LOGO__': inline('public/images/logo1.png', 'image/png'),
  '__HERO_VIDEO__': inline('public/videos/vd01.mp4', 'video/mp4'),
  '__SERVICES_PERSON__': inline('public/images/services-professional.png', 'image/png'),
  '__DASHBOARD_TABLET__': inline('public/images/mockup.png', 'image/png'),
  '__GRID_LANDSCAPE__': inline('public/images/background1.png', 'image/png'),
  '__GRID_PORTRAIT__': inline('public/images/background2.png', 'image/png'),
  '__ECOSYSTEM_MOCKUP__': inline('public/images/mockup 2.png', 'image/png'),
  '__FONT_REGULAR__': inline('public/fonts/onest-400.ttf', 'font/ttf'),
  '__FONT_MEDIUM__': inline('public/fonts/onest-500.ttf', 'font/ttf'),
};
let html = readFileSync(new URL('src/landing.html', root), 'utf8');
for (const [token, value] of Object.entries(replacements)) html = html.replaceAll(token, value);
writeFileSync(new URL('index.html', root), html);
console.log(`Standalone page assembled: ${fileURLToPath(new URL('index.html', root))}`);
