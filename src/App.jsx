import { useEffect } from 'react';
import { ARTICLES, SITE_NAME, SITE_URL, articlePath, getRoute, pageMeta } from './data/articles.mjs';
import { Footer, Header } from './components/SiteShell';
import useLearning from './hooks/useLearning';
import Home, { FAQ } from './pages/Home';
import ArticlePage from './pages/ArticlePage';
import UtilityPage from './pages/UtilityPage';

function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL + '/', inLanguage: 'zh-CN' },
      { '@type': 'ItemList', name: '具身智能学习清单', numberOfItems: ARTICLES.length, itemListElement: ARTICLES.map((article, index) => ({ '@type': 'ListItem', position: index + 1, name: article.title, url: SITE_URL + articlePath(article) })) },
      { '@type': 'FAQPage', mainEntity: FAQ.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export default function App({ path = '/' }) {
  const route = getRoute(path);
  const learning = useLearning();
  const articleSlug = route.article?.slug;

  useEffect(() => {
    const meta = pageMeta(path);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('meta[name="robots"]')?.setAttribute('content', meta.index ? 'index, follow' : 'noindex, follow');
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', SITE_URL + meta.path);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', SITE_URL + meta.path);
  }, [path]);

  useEffect(() => {
    if (articleSlug && learning.ready) learning.recordVisit(articleSlug);
  }, [articleSlug, learning.ready, learning.recordVisit]);

  return <>
    <a className="skip-link button-sm" href="#main">跳到主要内容</a>
    <Header home={route.type === 'home'} />
    <main id="main" tabIndex={-1}>
      {route.type === 'home' && <><Home learning={learning} /><StructuredData /></>}
      {route.type === 'article' && <ArticlePage article={route.article} learning={learning} />}
      {['privacy', 'terms', 'not-found'].includes(route.type) && <UtilityPage type={route.type} />}
    </main>
    <Footer />
  </>;
}
