import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { render } from '../.build-ssr/entry-server.js';
import { ARTICLES, SITE_URL, articlePath, pageMeta } from '../src/data/articles.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = join(root, 'dist');
const template = await readFile(join(output, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('The HTML template is missing its root.');
if (!template.includes('<!-- page-meta:start -->')) throw new Error('The HTML template is missing its metadata boundary.');

const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const paths = ['/', ...ARTICLES.map(articlePath), '/privacy/', '/terms/', '/404.html'];

for (const path of paths) {
  const meta = pageMeta(path);
  const canonical = SITE_URL + meta.path;
  const head = [
    '<title>' + escape(meta.title) + '</title>',
    '<meta name="description" content="' + escape(meta.description) + '" />',
    '<meta name="robots" content="' + (meta.index ? 'index, follow' : 'noindex, follow') + '" />',
    '<meta name="theme-color" content="#f8f9f5" />',
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml" />',
    '<link rel="canonical" href="' + escape(canonical) + '" />',
    '<meta property="og:type" content="' + (path.startsWith('/learn/') ? 'article' : 'website') + '" />',
    '<meta property="og:locale" content="zh_CN" />',
    '<meta property="og:title" content="' + escape(meta.title) + '" />',
    '<meta property="og:description" content="' + escape(meta.description) + '" />',
    '<meta property="og:url" content="' + escape(canonical) + '" />',
    '<meta property="og:image" content="' + SITE_URL + '/og-image.png" />',
    '<meta name="twitter:card" content="summary_large_image" />',
  ].join('\n    ');
  const html = template
    .replace(/<!-- page-meta:start -->[\s\S]*?<!-- page-meta:end -->/, head)
    .replace('<div id="root"></div>', '<div id="root" data-page-path="' + escape(meta.path) + '">' + render(path) + '</div>');
  const file = path === '/' ? 'index.html' : path.endsWith('.html') ? path.slice(1) : path.slice(1) + 'index.html';
  const destination = join(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

const indexed = paths.filter(path => pageMeta(path).index);
await writeFile(join(output, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + indexed.map(path => '<url><loc>' + SITE_URL + pageMeta(path).path + '</loc></url>').join('') + '</urlset>\n');
console.log('Prerendered ' + paths.length + ' pages, including ' + ARTICLES.length + ' complete article study guides.');
