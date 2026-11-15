import { useEffect, useState } from 'react';
import {
  ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon, BookmarkSimpleIcon, BookOpenIcon,
  CheckCircleIcon, ClockIcon, GithubLogoIcon, LinkIcon, MicrophoneIcon, TargetIcon,
} from '@phosphor-icons/react';
import { ARTICLES, articlePath, articleSource, formatMinutes, stageFor } from '../data/articles.mjs';
import { INTERVIEW_ROLES } from '../data/interview.mjs';
import { skillsForArticle } from '../data/jobSkills.mjs';
import { contentForArticle } from '../data/learningContent.mjs';

const sections = [
  { id: 'guide', label: '学习目标' },
  { id: 'summary', label: '内容总结' },
  { id: 'concepts', label: '重点讲解' },
  { id: 'practice', label: '产品练习' },
  { id: 'interview', label: '模拟面试' },
  { id: 'sources', label: '原始来源' },
];
function interviewTrack(article) {
  if (article.topic === '数据') return '数据类产品经理 · 数据采集产品岗';
  if (article.tags.some(tag => /VLA|π0|世界模型|WAM|Diffusion|Flow Matching/.test(tag))) return 'AI 产品经理 · 具身智能产品经理';
  return '具身智能产品经理 · 数据采集产品岗';
}

function AssessmentCard({ item }) {
  const [checked, setChecked] = useState([]);
  const score = checked.length * 2.5;
  function toggle(index) {
    setChecked(value => value.includes(index) ? value.filter(itemIndex => itemIndex !== index) : [...value, index]);
  }
  return <div className="assessment-card">
    <div className="assessment-question-head"><span className="caption-3">自编模拟题 · 10 分</span><span className="assessment-badge caption-4">岗位场景题</span></div>
    <h3 className="title-2">{item[1]}</h3>
    <details className="assessment-answer"><summary className="button-sm">展开参考答题思路</summary><div className="assessment-answer-copy"><h4 className="title-3">参考答题结构</h4><p className="body-6">{item[2]}</p><div className="assessment-followup"><strong className="caption-3">面试官可能追问</strong><p className="body-6">{item[3]}</p></div></div></details>
    <fieldset className="assessment-rubric"><legend className="caption-3">回答后按要点自评（每项 2.5 分）</legend>{item[4].map((criterion, index) => <label key={criterion} className="assessment-rubric-item"><input type="checkbox" checked={checked.includes(index)} onChange={() => toggle(index)} /><span className="body-6">{criterion}</span><small className="caption-5">+2.5</small></label>)}<p className="caption-4 assessment-score" role="status" aria-live="polite">自评 {score.toFixed(1)} / 10 · 参考答案用于练习结构，不是唯一答案</p></fieldset>
  </div>;
}

export default function ArticlePage({ article, learning }) {
  const [active, setActive] = useState('guide');
  const [roleId, setRoleId] = useState('embodied-product');
  const role = INTERVIEW_ROLES.find(item => item.id === roleId);
  const content = contentForArticle(article);
  const stage = stageFor(article);
  const saved = learning.saved.includes(article.slug);
  const position = ARTICLES.findIndex(item => item.slug === article.slug);
  const previous = ARTICLES[position - 1];
  const next = ARTICLES[position + 1];
  const originalPlatform = article.originalUrl.includes('notion') ? 'Notion' : article.originalUrl.includes('github.com') ? 'GitHub' : '知乎';
  const assessment = content?.interview.find(item => item[0] === roleId);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-15% 0px -60% 0px' });
    sections.forEach(section => { const element = document.getElementById(section.id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  return <div className="article-page container">
    <nav className="breadcrumbs caption-2" aria-label="面包屑"><a href="/">首页</a><span>/</span><a href={'/?stage=' + stage.id + '#curriculum'}>{stage.label}阅读</a><span>/</span><span aria-current="page">{article.id}</span></nav>
    <div className="article-layout">
      <aside className="article-sidebar">
        <a className="back-to-list caption-3" href="/#curriculum"><ArrowLeftIcon size={16} />返回学习清单</a>
        <div className="article-sidebar-section"><p className="caption-3 muted">本篇阅读</p><span className={'stage-pill caption-3 tone-' + stage.color}><span />{stage.label}<span className="stage-pill-number">{article.id}</span></span></div>
        <nav className="article-toc" aria-label="本篇目录">{sections.map((section, index) => <a className="title-4" key={section.id} href={'#' + section.id} aria-current={active === section.id ? 'location' : undefined}><span className="caption-5">0{index + 1}</span>{section.label}</a>)}</nav>
        <div className="article-interview-track"><MicrophoneIcon size={22} weight="light" /><p className="caption-3">面试关联方向</p><span className="body-6">{interviewTrack(article)}</span></div>
        <button className={'button button-secondary button-sm article-save' + (saved ? ' is-saved' : '')} type="button" aria-pressed={saved} onClick={() => learning.toggleSaved(article.slug)}><BookmarkSimpleIcon size={18} weight={saved ? 'fill' : 'regular'} />{saved ? '已加入收藏' : '留待下次阅读'}</button>
        <p className="caption-5 article-storage-note">{learning.storageError ? '当前浏览器暂时无法保存收藏。' : '收藏仅保存在当前设备'}</p>
      </aside>
      <article className="reading-page-main">
        <header className="article-header">
          <div className="article-heading-kicker caption-3"><span className={'stage-label tone-text-' + stage.color}><span />{stage.label}</span><span>{article.topic}</span><span className="content-status">学习内容已整理</span></div>
          <h1 className="heading-3">{article.title}</h1>
          {article.originalTitle && <p className="article-original-title body-6">{article.originalTitle}</p>}
          <p className="article-standfirst body-3">{article.excerpt}</p>
          <div className="article-byline caption-2"><span>原文：{article.author}</span><span>Jasmine 独立学习讲解</span></div>
          <div className="article-header-actions"><a className="button button-dark button-sm" href={article.originalUrl} target="_blank" rel="noreferrer">前往{originalPlatform}原文<ArrowUpRightIcon size={17} /></a><a className="source-header-link caption-3" href={articleSource(article)} target="_blank" rel="noreferrer"><GithubLogoIcon size={17} />{article.githubUrl ? '查看 GitHub 原始仓库' : '查看 GitHub 清单出处'}<ArrowUpRightIcon size={14} /></a></div>
        </header>
        <section className="time-budget" aria-label="本篇学习时间预算">
          <div><span className="caption-2">原文通读初估</span><strong className="title-3">{formatMinutes(article.skimMinutes)}</strong></div>
          <div><span className="caption-2">精读与笔记</span><strong className="title-3">{formatMinutes(article.readingMinutes)}</strong></div>
          <div><span className="caption-2">岗位面试练习</span><strong className="title-3">{formatMinutes(article.assessmentMinutes)}</strong></div>
          <div><span className="caption-2">动手实践</span><strong className="title-3">{article.practiceMinutes ? formatMinutes(article.practiceMinutes) : '按需拓展'}</strong></div>
          <p className="caption-5"><ClockIcon size={14} />原文时长为阅读预算，受版本与篇幅影响；本站练习和外链运行时间另计。</p>
        </section>
        <section id="guide" className="reading-section" aria-labelledby="guide-title">
          <div className="reading-section-heading"><span className="caption-3">01 / 学习目标</span><h2 className="heading-5" id="guide-title">这篇读完，你应该能够……</h2></div>
          <div className="learning-goals">{content.goals.map((goal, index) => <div className="learning-goal" key={goal}><span className="goal-number caption-3">0{index + 1}</span><p className="body-5">{goal}</p></div>)}</div>
          <div className="guide-points"><div><span className="guide-point-icon"><BookOpenIcon size={20} /></span><div><h3 className="title-3">先读原文，再用本站梳理</h3><p className="body-6">下面是独立整理的学习讲解与面试练习，保留原作者的完整上下文请前往原始链接阅读。</p></div></div><div><span className="guide-point-icon"><MicrophoneIcon size={20} /></span><div><h3 className="title-3">带着产品岗位的问题</h3><p className="body-6">结合“{interviewTrack(article)}”，把技术概念转化为场景、采集、指标和落地判断。</p></div></div></div>
          <div className="article-topic-tags">{article.tags.map(tag => <span className="caption-4" key={tag}>{tag}</span>)}</div>
          {article.timeSensitive && <p className="dated-reading body-6"><ClockIcon size={17} />年度观察文章。发表时间可能影响结论，请以原论文与官方会议信息为准。</p>}
        </section>
        <section id="summary" className="reading-section" aria-labelledby="summary-title">
          <div className="reading-section-heading"><span className="caption-3">02 / 内容总结</span><h2 className="heading-5" id="summary-title">先抓住这一篇的主线。</h2></div>
          <div className="learning-summary"><div className="summary-mark"><TargetIcon size={23} weight="light" /></div><div><span className="caption-3">核心摘要</span><p className="body-4">{content.summary}</p></div></div>
          <div className="summary-role-note"><strong className="title-3">岗位转译</strong><p className="body-6">面试回答时优先说明：解决谁的什么问题、依赖什么数据和设备、怎样验证结果，以及出现失败如何回流迭代。</p></div>
        </section>
        <section id="concepts" className="reading-section" aria-labelledby="concepts-title">
          <div className="reading-section-heading"><span className="caption-3">03 / 重点讲解</span><h2 className="heading-5" id="concepts-title">把关键概念放回系统里理解。</h2></div>
          <div className="concept-list">{content.sections.map(([title, explanation, product], index) => <section className="concept-card" key={title}><div className="concept-index caption-3">0{index + 1}</div><div className="concept-copy"><h3 className="title-2">{title}</h3><p className="body-5">{explanation}</p><div className="concept-product-bridge"><span className="caption-3">产品/岗位视角</span><p className="body-6">{product}</p></div></div></section>)}</div>
          <div className="glossary-card"><h3 className="title-3">本篇术语</h3><dl>{content.terms.map(([term, definition]) => <div key={term}><dt className="title-4">{term}</dt><dd className="body-6">{definition}</dd></div>)}</dl></div>
        </section>
        <section id="practice" className="reading-section" aria-labelledby="practice-title">
          <div className="reading-section-heading"><span className="caption-3">04 / 产品练习</span><h2 className="heading-5" id="practice-title">留下一份能讲清楚的产出。</h2></div>
          <div className="practice-card"><div className="practice-card-heading"><span className="caption-3">建议产出 · 20–45 分钟</span><span className="practice-icon"><CheckCircleIcon size={20} /></span></div><p className="body-4">{content.deliverable}</p><div className="practice-output"><strong className="caption-3">交付自检</strong><span className="body-6">有具体场景 · 有指标口径 · 有失败处理 · 有验证计划</span></div></div>
        </section>
        <section id="interview" className="reading-section" aria-labelledby="interview-title">
          <div className="reading-section-heading"><span className="caption-3">05 / 模拟面试检验</span><h2 className="heading-5" id="interview-title">按目标岗位练习，再看答题思路。</h2></div>
          <p className="body-6 interview-intro">以下题目为本站自编练习，不代表任何公司的真实面试题。先限时口述，再展开参考要点；每项 2.5 分自评，关注是否把技术说到了业务和交付。</p>
          <div className="interview-role-tabs" aria-label="面试目标岗位">{INTERVIEW_ROLES.map(item => <button className={'button-sm' + (roleId === item.id ? ' is-selected' : '')} type="button" key={item.id} aria-pressed={roleId === item.id} onClick={() => setRoleId(item.id)}>{item.label}</button>)}</div>
          <div className="role-focus body-6" role="status" aria-live="polite">{role.focus}</div>
          <div className="interview-framework">{role.dimensions.map(([title, description], index) => <div className="interview-dimension" key={title}><span className="caption-3">0{index + 1}</span><div><h3 className="title-3">{title}</h3><p className="body-6">{description}</p></div><CheckCircleIcon size={18} /></div>)}</div>
          {assessment && <AssessmentCard key={article.slug + roleId} item={assessment} />}
          <div className="article-job-skills"><h3 className="title-3">本篇关联的岗位能力</h3><p className="body-6">依据你提供的岗位职责整理，技术知识用于产品方案、数据交付和研发协作。</p><div>{skillsForArticle(article).map(skill => <a className="caption-4" key={skill.id} href="/#job-skills">{skill.title}<ArrowUpRightIcon size={13} /></a>)}</div></div>
        </section>
        <section id="sources" className="reading-section" aria-labelledby="sources-title">
          <div className="reading-section-heading"><span className="caption-3">06 / 原始来源</span><h2 className="heading-5" id="sources-title">好的学习，保留来处。</h2></div>
          <div className="source-list"><a href={article.originalUrl} target="_blank" rel="noreferrer"><span className="source-icon"><LinkIcon size={22} /></span><div><strong className="title-3">{originalPlatform}原文</strong><span className="caption-2">{article.originalTitle || article.title}</span></div><ArrowUpRightIcon size={20} /></a><a href={articleSource(article)} target="_blank" rel="noreferrer"><span className="source-icon"><GithubLogoIcon size={22} /></span><div><strong className="title-3">{article.githubUrl ? 'GitHub 原始仓库' : 'GitHub 清单出处'}</strong><span className="caption-2">{article.githubUrl ? 'jiangranlv / embodied-ai-start' : '知乎 AI 蓝宝书 · 第三册 · 本篇目录位置'}</span></div><ArrowUpRightIcon size={20} /></a></div>
          <div className="reference-list"><h3 className="title-3">延伸阅读与一手资料</h3>{content.references.map(([label, url]) => <a className="caption-3" key={url} href={url} target="_blank" rel="noreferrer">{label}<ArrowUpRightIcon size={14} /></a>)}</div>
          <p className="source-disclosure caption-5">上面的学习讲解、摘要与模拟题为 Jasmine 独立编写，不是原作者全文的复制或改写。原文与图表版权归相应权利人；请在原始页面阅读。本站模拟题用于岗位学习训练，不构成招聘承诺。</p>
          {article.originalHomeUrl && <a className="text-link caption-3" href={article.originalHomeUrl} target="_blank" rel="noreferrer">作者原始主页（Notion）<ArrowUpRightIcon size={14} /></a>}
        </section>
        <nav className="article-pagination" aria-label="前后篇阅读">
          <a href={previous ? articlePath(previous) : '/#curriculum'}><span className="caption-3"><ArrowLeftIcon size={14} />{previous ? '上一篇' : '返回清单'}</span><strong className="title-3">{previous?.title || '查看全部学习资源'}</strong></a>
          <a href={next ? articlePath(next) : '/#curriculum'}><span className="caption-3">{next ? '下一篇' : '继续探索'}<ArrowRightIcon size={14} /></span><strong className="title-3">{next?.title || '回到清单，选择下一条路线'}</strong></a>
        </nav>
      </article>
    </div>
  </div>;
}
