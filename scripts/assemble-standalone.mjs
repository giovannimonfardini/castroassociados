import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Gera duas versões a partir de src/landing.html:
// - index.html: referencia os arquivos de public/ por caminho (entrada do Vite e produção).
// - standalone.html: tudo embutido em base64, abre direto no navegador sem servidor.
const root = new URL('../', import.meta.url);
const assets = {
  '__OFFICE__': ['images/office.jpg', 'image/jpeg'],
  '__CONSULT__': ['images/consultation.jpg', 'image/jpeg'],
  '__CARD01__': ['images/card01.png', 'image/png'],
  '__CARD02__': ['images/card02.png', 'image/png'],
  '__CARD03__': ['images/card03.png', 'image/png'],
  '__CARD04__': ['images/card04.png', 'image/png'],
  '__CHIP_COMPASS__': ['images/chips/compass.jpg', 'image/jpeg'],
  '__CHIP_SHIELD__': ['images/chips/shield.jpg', 'image/jpeg'],
  '__CHIP_PEOPLE__': ['images/chips/people.jpg', 'image/jpeg'],
  '__CHIP_BUILDING__': ['images/chips/building.jpg', 'image/jpeg'],
  '__CHIP_MEETING__': ['images/chips/meeting.jpg', 'image/jpeg'],
  '__CHIP_OFFICE__': ['images/chips/office.jpg', 'image/jpeg'],
  '__LOGO__': ['images/logo1.png', 'image/png'],
  '__LOGO_DARK__': ['images/logo-dark.png', 'image/png'],
  '__HERO_VIDEO__': ['videos/vd01.mp4', 'video/mp4'],
  '__SERVICES_PERSON__': ['images/services-professional.png', 'image/png'],
  '__DASHBOARD_TABLET__': ['images/mockup.png', 'image/png'],
  '__GRID_LANDSCAPE__': ['images/background1.png', 'image/png'],
  '__GRID_PORTRAIT__': ['images/background2.png', 'image/png'],
  '__ECOSYSTEM_MOCKUP__': ['images/mockup 2.png', 'image/png'],
  '__FONT_REGULAR__': ['fonts/onest-400.ttf', 'font/ttf'],
  '__FONT_MEDIUM__': ['fonts/onest-500.ttf', 'font/ttf'],
};
const source = readFileSync(new URL('src/landing.html', root), 'utf8');
const render = (resolve) => Object.entries(assets).reduce((html, [token, asset]) => html.replaceAll(token, resolve(...asset)), source);

const linked = render((path) => '/' + path.split('/').map(encodeURIComponent).join('/'));
const inlined = render((path, type) => `data:${type};base64,${readFileSync(new URL('public/' + path, root)).toString('base64')}`);

writeFileSync(new URL('index.html', root), linked);
writeFileSync(new URL('standalone.html', root), inlined);
console.log(`Pages assembled: ${fileURLToPath(new URL('index.html', root))} (linked), standalone.html (inlined)`);
