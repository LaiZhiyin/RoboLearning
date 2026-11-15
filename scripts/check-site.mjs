import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ARTICLES, STAGES, SITE_NAME, SITE_URL, articlePath, articleSource, getRoute, pageMeta } from '../src/data/articles.mjs';
import { INTERVIEW_ROLES } from '../src/data/interview.mjs';
import { JOB_SKILLS } from '../src/data/jobSkills.mjs';
import { LEARNING_CONTENT, ROLE_IDS } from '../src/data/learningContent.mjs';

const root = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const output = join(root, 'dist');
const toFile = path => path === '/' ? 'index.html' : path.endsWith('.html') || /\.[a-z0-9]+$/i.test(path) ? path.slice(1) : path.replace(/^\//, '').replace(/\/?$/, '/index.html');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;');
assert.equal(ARTICLES.length, 29);
assert.equal(ARTICLES[0].slug, 'embodied-ai-research-start');
assert.equal(new Set(ARTICLES.map(article => article.slug)).size, ARTICLES.length);
assert.equal(new Set(ARTICLES.map(article => article.id)).size, ARTICLES.length);
for (const stage of STAGES) assert.equal(ARTICLES.filter(article => article.stage === stage.id).length, stage.count);
assert.equal(INTERVIEW_ROLES.length, 4);
assert.equal(ROLE_IDS.length, 4);
assert.equal(JOB_SKILLS.length, 6);
assert.equal(Object.keys(LEARNING_CONTENT).length, ARTICLES.length);
assert.equal(SITE_URL, 'https://robolearning.carcagem.online');

for (const article of ARTICLES) {
  const content = LEARNING_CONTENT[article.slug];
  assert.ok(content, article.slug + ': authored study content missing');
  assert.ok(content.summary.length >= 80, article.slug + ': summary is too short');
  assert.ok(content.goals.length >= 3 && content.sections.length >= 3, article.slug + ': study guide is incomplete');
  assert.equal(content.interview.length, 4, article.slug + ': expected one interview exercise per product role');
  assert.deepEqual(content.interview.map(item => item[0]).sort(), [...ROLE_IDS].sort(), article.slug + ': product role coverage incomplete');
  assert.ok(content.references.length >= 2, article.slug + ': primary/extension references missing');
  assert.equal(article.contentStatus, 'complete');
  assert.equal(getRoute(articlePath(article)).article.slug, article.slug);
  assert.equal(getRoute(articlePath(article) + 'index.html').article.slug, article.slug);
  assert.ok(article.originalUrl.startsWith('https://'));
  assert.ok(articleSource(article).startsWith('https://github.com/'));
  for (const range of [article.readingMinutes, article.skimMinutes, article.assessmentMinutes, article.practiceMinutes].filter(Boolean)) {
    assert.ok(range[0] > 0 && range[1] >= range[0], article.slug + ': invalid time estimate');
  }
  const html = await readFile(join(output, toFile(articlePath(article))), 'utf8');
  assert.ok(html.includes(escape(article.title)), article.slug + ': missing article title');
  assert.ok(html.includes('<meta name="robots" content="index, follow"'), article.slug + ': complete learning page should be indexable');
  assert.ok(html.includes(articleSource(article)), article.slug + ': source link missing');
  assert.ok(html.includes('数据采集产品岗') && html.includes('模拟面试检验'), article.slug + ': product interview framework missing');
  assert.ok(html.includes(content.summary), article.slug + ': article summary not prerendered');
  for (const [, url] of content.references) assert.ok(html.includes(url), article.slug + ': reference URL not rendered');
}

const paths = ['/', ...ARTICLES.map(articlePath), '/privacy/', '/terms/', '/404.html'];
let internalLinkCount = 0;
for (const path of paths) {
  const html = await readFile(join(output, toFile(path)), 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, path + ': expected one h1');
  assert.ok(html.includes(escape(pageMeta(path).title)), path + ': metadata missing');
  for (const [, raw] of html.matchAll(/href="([^"]+)"/g)) {
    const href = raw.replaceAll('&amp;', '&');
    assert.notEqual(href, '#', path + ': dead link');
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    const url = new URL(href, SITE_URL + path);
    const targetFile = toFile(url.pathname);
    await access(join(output, targetFile));
    if (url.hash) {
      const targetHtml = await readFile(join(output, targetFile), 'utf8');
      assert.ok(targetHtml.includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'), path + ': missing anchor ' + href);
    }
    internalLinkCount++;
  }
}
const home = await readFile(join(output, 'index.html'), 'utf8');
assert.ok(home.includes(SITE_NAME));
assert.ok(home.includes('numberOfItems":29'));
assert.equal(getRoute('/learn/not-a-real-article/').type, 'not-found');
console.log('Checked 29 complete study guides, 33 static pages, 116 role-specific interview exercises, 6 job competencies, and ' + internalLinkCount + ' internal links.');
