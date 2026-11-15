import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon, BookOpenIcon, BookmarkSimpleIcon,
  BrainIcon, CaretDownIcon, CheckIcon, ClockIcon, CodeIcon, GithubLogoIcon,
  MagnifyingGlassIcon, MicrophoneIcon, PathIcon, WrenchIcon, XIcon,
} from '@phosphor-icons/react';
import { ARTICLES, STAGES, articlePath, articleSource, formatMinutes, stageFor } from '../data/articles.mjs';
import { Reveal, SectionLabel, StartLink } from '../components/SiteShell';
import RobotScene from '../components/RobotScene';
import { JOB_SKILLS } from '../data/jobSkills.mjs';
import { LEARNING_CONTENT } from '../data/learningContent.mjs';

function searchableGuideText(content) {
  if (!content) return '';
  return [
    content.summary,
    ...content.goals,
    ...content.sections.flat(),
    ...content.terms.flat(),
    content.deliverable,
    ...content.interview.flat(),
    ...content.references.flat(),
  ].join(' ');
}

export const FAQ = [
  ['需要什么基础才能开始？', '建议了解 Python 与基础机器学习概念。可以先从 PKU EPIC Lab 的科研入门指南开始，建立领域地图，再按需要补充机器人学、控制与数学基础。'],
  ['一定要按照清单顺序阅读吗？', '入门部分建议按顺序阅读。进入进阶与实战后，可以根据数据类产品经理、数据采集产品岗、AI 产品经理或具身智能产品经理的目标，选择对应技术主题。'],
  ['每篇文章的学习时间怎样估算？', '每篇分别列原文通读、精读笔记、岗位面试练习和可选实践时间。原文时长是阅读预算，会受原文版本与篇幅影响；外链论文、课程、环境配置和训练等待另计。'],
  ['为什么站内内容不是逐字搬运原文？', '29 篇均有本站独立编写的摘要、重点讲解、术语与产品岗位模拟题；原作者文章和 GitHub 清单保留为原始来源。未经许可不复制作者全文，前往原文可阅读完整上下文。'],
  ['面试检验会考察哪些能力？', '围绕数据类产品经理、数据采集产品岗、AI 产品经理与具身智能产品经理，逐篇练习需求与场景、采集 SOP、数据质量与成本、仿真/后训练评测、PRD、部署和跨团队协作。每题有参考思路、追问和自评分项。'],
  ['收藏和阅读记录会同步到其他设备吗？', '收藏与最近阅读保存在当前浏览器，不需要注册账号，也不会上传到服务器。更换设备、使用无痕模式或清除浏览器站点数据后，记录可能不可用。'],
];

function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow caption-3"><span className="eyebrow-line" />给保持好奇，也想动手的你</p>
        <h1 id="hero-title" className="heading-1">从第一篇阅读，<br />走向具身智能实践<span className="hero-period">。</span></h1>
        <p className="hero-description body-3">把散落的文章，整理成一条可以开始的路。<br className="desktop-break" />从技术原理到数据采集，再到产品落地，<br className="desktop-break" />为数据、AI 与具身智能产品岗位积累判断力。</p>
        <div className="hero-actions"><StartLink /><span className="caption-2 hero-free"><CheckIcon size={16} />无需注册，随时开始</span></div>
        <div className="hero-proof">
          <div><strong className="heading-4">{ARTICLES.length}<span className="caption-2">篇</span></strong><span className="caption-2">精选学习资源</span></div>
          <div><strong className="heading-4">03<span className="caption-2">阶</span></strong><span className="caption-2">从入门到实践</span></div>
          <div><span className="proof-icon"><MicrophoneIcon size={25} weight="light" /></span><span className="caption-2">面向产品岗位面试</span></div>
        </div>
      </div>
      <div className="hero-visual"><RobotScene /><div className="visual-note caption-5"><span>THE WORLD IS YOUR CLASSROOM.</span><span>感知 · 决策 · 行动</span></div></div>
      <a href="#roadmap" className="hero-scroll caption-5">向下，找到你的学习起点<ArrowDownIcon size={14} /></a>
    </section>
  );
}

function Roadmap({ onSelect }) {
  const icons = [BookOpenIcon, BrainIcon, WrenchIcon];
  return (
    <Reveal as="section" id="roadmap" className="roadmap-section container" aria-labelledby="roadmap-title">
      <div className="section-heading">
        <div><SectionLabel number="01">一条可以走下去的路</SectionLabel><h2 id="roadmap-title" className="heading-3">先找到起点，再一步步深入。</h2></div>
        <p className="body-6 section-description">不必一次读完所有。<br />选择适合自己的阶段，从今天这一篇开始。</p>
      </div>
      <div className="roadmap-grid">
        {STAGES.map((stage, index) => {
          const Icon = icons[index];
          return <a key={stage.id} href={'/?stage=' + stage.id + '#curriculum'} onClick={event => onSelect(stage.id, event)} className={'roadmap-card tone-' + stage.color}>
            <div className="roadmap-top"><span className="stage-pill caption-3"><span />{stage.label}</span><span className="roadmap-index heading-3">{stage.index}</span></div>
            <div className="roadmap-card-icon"><Icon size={32} weight="light" /></div>
            <h3 className="heading-6">{stage.title}</h3><p className="body-6">{stage.description}</p>
            <div className="roadmap-bottom"><span className="caption-4">{stage.count} 篇阅读<span className="dot-divider">·</span>{stage.note}</span><ArrowUpRightIcon size={22} /></div>
          </a>;
        })}
      </div>
    </Reveal>
  );
}

function ArticleRow({ article, learning }) {
  const stage = stageFor(article);
  const saved = learning.saved.includes(article.slug);
  return (
    <article className="article-row">
      <div className={'article-order caption-3 tone-text-' + stage.color}>{article.id}</div>
      <div className="article-row-content">
        <div className="article-kicker caption-5"><span className={'stage-label tone-text-' + stage.color}><span />{stage.label}</span><span>{article.topic}</span>{article.id === 'A01' && <span className="first-reading">建议第一篇</span>}{article.timeSensitive && <span>年度观察</span>}</div>
        <a className="article-title-link" href={articlePath(article)}><h3 className="title-2">{article.title}</h3><ArrowUpRightIcon size={18} /></a>
        <p className="article-excerpt body-6">{article.excerpt}</p>
        <div className="article-row-meta caption-5"><span>{article.author}</span><span className="row-time"><ClockIcon size={14} />精读约 {formatMinutes(article.readingMinutes)}</span><a href={articleSource(article)} target="_blank" rel="noreferrer" aria-label={article.title + '的 GitHub 来源'}><GithubLogoIcon size={14} />GitHub 出处<ArrowUpRightIcon size={12} /></a></div>
      </div>
      <button className={'icon-button bookmark-button' + (saved ? ' is-saved' : '')} type="button" aria-label={(saved ? '取消收藏：' : '收藏：') + article.title} aria-pressed={saved} onClick={() => learning.toggleSaved(article.slug)}><BookmarkSimpleIcon size={20} weight={saved ? 'fill' : 'regular'} /></button>
    </article>
  );
}

function ReadingSidebar({ learning, onSaved }) {
  const last = ARTICLES.find(article => article.slug === learning.visited[0]);
  const featured = last || ARTICLES[0];
  return (
    <aside className="reading-sidebar" aria-label="学习提示与记录">
      <div className="next-reading">
        <p className="caption-3 sidebar-eyebrow"><span className="signal-dot" />{last ? '接着上次的好奇心' : '从这里，开始就好'}</p>
        <span className="next-number caption-4">{featured.id}<span> / {stageFor(featured).label}</span></span>
        <h3 className="heading-6">{featured.title}</h3><p className="body-6">{last ? '回到最近打开的阅读导引，沿着自己的节奏继续。' : '先把任务想清楚，再选择模型。来自 PKU EPIC Lab 的科研入门导引。'}</p>
        <span className="next-time caption-2"><ClockIcon size={16} />精读约 {formatMinutes(featured.readingMinutes)}</span>
        <a className="button button-dark button-sm" href={articlePath(featured)}>{last ? '继续阅读导引' : '打开第一篇'}<ArrowRightIcon size={18} /></a>
      </div>
      <div className="learning-record">
        <div className="sidebar-title title-4"><PathIcon size={18} />我的学习足迹</div>
        <div className="record-counts"><div><strong className="heading-4">{learning.visited.length}<span className="caption-5"> / {ARTICLES.length}</span></strong><span className="caption-2">已探索导引</span></div><button type="button" onClick={onSaved}><strong className="heading-4">{learning.saved.length}</strong><span className="caption-2">我的收藏 <ArrowUpRightIcon size={12} /></span></button></div>
        <div className="record-track" role="img" aria-label={'已打开 ' + learning.visited.length + ' 篇导引，共 ' + ARTICLES.length + ' 篇'}><span style={{ transform: 'scaleX(' + learning.visited.length / ARTICLES.length + ')' }} /></div>
        <p className="caption-5">{learning.storageError ? '浏览器暂时无法保存记录，本次仍可正常阅读。' : '记录保存在这台设备上，慢慢来就好。'}</p>
      </div>
      <div className="interview-note"><MicrophoneIcon size={25} weight="light" /><h3 className="title-3">读懂技术，做出产品判断。</h3><p className="body-6">为数据、采集、AI 与具身智能产品岗位，准备经得起追问的方案。</p><a className="text-link caption-3" href="#method">看看怎样准备<ArrowRightIcon size={15} /></a><span className="interview-status caption-5"><span />29 篇均含岗位模拟题与自评要点</span></div>
    </aside>
  );
}

function Curriculum({ learning, stage, setStage, expanded, setExpanded, query, setQuery, savedOnly, setSavedOnly, selectStage }) {
  const [sort, setSort] = useState('recommended');
  const searchRef = useRef(null);
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    const items = ARTICLES.filter(article =>
      (stage === 'all' || article.stage === stage)
      && (!savedOnly || learning.saved.includes(article.slug))
      && (!needle || [article.title, article.originalTitle || '', article.author, article.excerpt, article.topic, ...article.tags, searchableGuideText(LEARNING_CONTENT[article.slug])].join(' ').toLocaleLowerCase().includes(needle)));
    return sort === 'time' ? [...items].sort((a, b) => a.readingMinutes[0] - b.readingMinutes[0]) : items;
  }, [query, stage, savedOnly, sort, learning.saved]);
  const visible = expanded || query.trim() || savedOnly ? filtered : filtered.slice(0, 9);
  function resetFilters() { setQuery(''); setStage('all'); setSavedOnly(false); setExpanded(false); requestAnimationFrame(() => searchRef.current?.focus()); }
  function expandArticles() {
    const next = filtered[visible.length];
    setExpanded(true);
    if (next) requestAnimationFrame(() => document.querySelector('#curriculum .article-title-link[href="' + articlePath(next) + '"]')?.focus({ preventScroll: true }));
  }
  return (
    <Reveal as="section" id="curriculum" className="curriculum-section container" aria-labelledby="curriculum-title">
      <div className="section-heading"><div><SectionLabel number="02">你的具身智能阅读清单</SectionLabel><h2 id="curriculum-title" className="heading-3">今天，学一点具体的。</h2></div><span className="catalog-total caption-2"><span className="signal-dot" />{ARTICLES.length} 篇阅读，持续整理</span></div>
      <div className="curriculum-layout">
        <div className="catalog-main">
          <div className="catalog-tabs" aria-label="按学习阶段筛选">
            <button className={'button-sm' + (stage === 'all' ? ' is-selected' : '')} type="button" aria-pressed={stage === 'all'} onClick={() => selectStage('all')}>全部<span className="caption-5">{ARTICLES.length}</span></button>
            {STAGES.map(item => <button key={item.id} className={'button-sm' + (stage === item.id ? ' is-selected' : '')} type="button" aria-pressed={stage === item.id} onClick={() => selectStage(item.id)}><span className={'tab-dot tone-bg-' + item.color} />{item.label}<span className="caption-5">{item.count}</span></button>)}
          </div>
          <div className="catalog-tools">
            <div className="search-input"><MagnifyingGlassIcon size={18} aria-hidden="true" /><label className="sr-only" htmlFor="article-search">搜索文章、作者或主题</label><input ref={searchRef} id="article-search" className="body-6" type="search" value={query} placeholder="搜索文章、作者或主题，例如 VLA" onChange={event => { setQuery(event.target.value); setExpanded(false); }} />{query && <button className="icon-button" type="button" aria-label="清除搜索" onClick={() => { setQuery(''); searchRef.current?.focus(); }}><XIcon size={15} /></button>}</div>
            <label className="sort-control caption-2"><span className="sr-only">文章排序</span><select value={sort} onChange={event => setSort(event.target.value)}><option value="recommended">推荐顺序</option><option value="time">时间从短到长</option></select><CaretDownIcon size={14} /></label>
          </div>
          <div className="catalog-results-bar"><span className="caption-5" role="status" aria-live="polite">{savedOnly ? '收藏中找到 ' : '共 '}{filtered.length} 篇{query.trim() ? '匹配阅读' : '阅读'}<span className="result-note">每篇含总结、练习与岗位模拟题</span></span><button className={'saved-filter caption-4' + (savedOnly ? ' is-selected' : '')} aria-pressed={savedOnly} type="button" onClick={() => { setSavedOnly(!savedOnly); setExpanded(true); }}><BookmarkSimpleIcon size={14} weight={savedOnly ? 'fill' : 'regular'} />只看收藏</button></div>
          <div className="article-list">
            {visible.map(article => <ArticleRow key={article.slug} article={article} learning={learning} />)}
            {filtered.length === 0 && <div className="catalog-empty"><MagnifyingGlassIcon size={32} weight="light" /><h3 className="title-2">{savedOnly ? '把想读的，留在这里。' : '暂时没有找到这篇阅读。'}</h3><p className="body-6">{savedOnly ? '点击文章旁的书签，即可加入本机收藏。' : '试试模型名、作者或更短的关键词。'}</p><button className="button button-secondary button-sm" type="button" onClick={resetFilters}>回到全部清单<ArrowRightIcon size={16} /></button></div>}
          </div>
          {visible.length < filtered.length && <button className="load-more button-sm" type="button" onClick={expandArticles}>展开其余 {filtered.length - visible.length} 篇阅读<CaretDownIcon size={17} /></button>}
          <p className="catalog-source caption-5">目录参考知乎 AI 蓝宝书，新增 PKU EPIC Lab 入门指南。<br />点击标题进入站内导引，原文与 GitHub 出处保留在每篇页面。</p>
        </div>
        <ReadingSidebar learning={learning} onSaved={() => { setSavedOnly(true); setStage('all'); setQuery(''); setExpanded(true); }} />
      </div>
    </Reveal>
  );
}

function LearningMethod() {
  const tagline = useRef(null);
  useEffect(() => {
    const element = tagline.current;
    if (!element) return undefined;
    const words = [...element.querySelectorAll('[data-reveal-word]')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { words.forEach(word => word.classList.add('is-ink')); return undefined; }
    element.classList.add('is-word-reveal');
    let frame = 0;
    let activated = 0;
    const update = () => {
      frame = 0;
      const bounds = element.getBoundingClientRect();
      const progress = (window.innerHeight * 0.8 - bounds.top) / (bounds.height + window.innerHeight * 0.12);
      activated = Math.max(activated, Math.min(words.length, Math.ceil(Math.max(0, progress) * words.length)));
      words.forEach((word, index) => word.classList.toggle('is-ink', index < activated));
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => { window.removeEventListener('scroll', requestUpdate); window.removeEventListener('resize', requestUpdate); cancelAnimationFrame(frame); };
  }, []);
  const steps = [
    { number: '01', icon: BookOpenIcon, title: '带着问题读', text: '先看导引与时间预算。把文章放回技术地图，找到它解决的具体问题。', note: '知道自己在学什么' },
    { number: '02', icon: MicrophoneIcon, title: '用产品面试方式讲', text: '把技术放进场景，说明数据怎么采、质量怎么验、方案如何取舍和落地。', note: '四类产品岗位，分别组织考核' },
    { number: '03', icon: CodeIcon, title: '拿一个方案验证', text: '从需求定义、采集 SOP 到评测指标，整理一份能解释选择、验证结果的产品方案。', note: '把理解变成决策依据' },
  ];
  return <section id="method" className="method-section" aria-labelledby="method-title">
    <div className="container">
      <div className="method-intro"><SectionLabel number="03">阅读之后，更进一步</SectionLabel><span className="caption-4">LEARN. EXPLAIN. BUILD.</span></div>
      <h2 ref={tagline} id="method-title" className="method-tagline heading-2"><span data-reveal-word>理解</span><span data-reveal-word>技术原理，</span><br /><span data-reveal-word>做出</span><span data-reveal-word>产品判断。</span></h2>
      <p className="method-description body-3">以数据、AI 与具身智能产品岗位面试为检验，<br className="mobile-break" />让每一次阅读，都能连接一个真实的产品问题。</p>
      <div className="method-steps">{steps.map(step => <Reveal className="method-step" key={step.number}><div className="method-step-top"><span className="caption-3">{step.number}</span><step.icon size={25} weight="light" /></div><h3 className="heading-6">{step.title}</h3><p className="body-6">{step.text}</p><span className="caption-5">{step.note}</span></Reveal>)}</div>
      <Reveal className="job-skills" id="job-skills"><div className="job-skills-heading"><h3 className="heading-6">从岗位职责，反推学习重点。</h3><p className="body-6">连接产品判断、数据方案与技术协作。</p></div><div className="job-skills-grid">{JOB_SKILLS.map(skill => <a href={'/?q=' + encodeURIComponent(skill.keyword) + '#curriculum'} key={skill.id}><span className="title-4">{skill.title}<ArrowUpRightIcon size={15} /></span><p className="body-6">{skill.description}</p></a>)}</div></Reveal>
    </div>
  </section>;
}

function CommonQuestions() {
  return <Reveal as="section" id="faq" className="faq-section container" aria-labelledby="faq-title">
    <div className="faq-heading"><SectionLabel number="04">开始之前，你可能想知道</SectionLabel><h2 id="faq-title" className="heading-3">关于这份学习清单。</h2><p className="body-6">一份持续整理的个人学习站，<br />陪你把复杂的领域，拆成具体的下一步。</p></div>
    <div className="faq-list">{FAQ.map(([question, answer]) => <details key={question}><summary className="title-3">{question}<CaretDownIcon size={18} /></summary><p className="body-6">{answer}</p></details>)}</div>
  </Reveal>;
}

export default function Home({ learning }) {
  const [stage, setStage] = useState('all');
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [savedOnly, setSavedOnly] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedStage = params.get('stage');
    if (STAGES.some(item => item.id === requestedStage)) setStage(requestedStage);
    if (params.get('saved') === '1') { setSavedOnly(true); setExpanded(true); }
    if (params.get('q')) { setQuery(params.get('q')); setExpanded(true); }
  }, []);
  function selectStage(value, event) {
    if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)) return;
    event?.preventDefault();
    setStage(value); setExpanded(false);
    if (event) {
      window.history.replaceState(null, '', '/?stage=' + value + '#curriculum');
      document.getElementById('curriculum')?.scrollIntoView();
    }
  }
  return <>
    <Hero />
    <Roadmap onSelect={selectStage} />
    <Curriculum {...{ learning, stage, setStage, expanded, setExpanded, query, setQuery, savedOnly, setSavedOnly, selectStage }} />
    <LearningMethod />
    <CommonQuestions />
    <Reveal as="section" className="final-start container"><div><p className="caption-3">好奇心已经就位。</p><h2 className="heading-3">下一步，从第一篇开始。</h2><p className="body-6">不必等到准备好所有知识，先给今天留一点探索的时间。</p></div><StartLink /></Reveal>
  </>;
}
