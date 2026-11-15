import { ArrowLeftIcon, ArrowRightIcon, CompassIcon } from '@phosphor-icons/react';
import { SOURCE_DOCUMENT } from '../data/articles.mjs';

export default function UtilityPage({ type }) {
  if (type === 'not-found') return <section className="not-found container"><span className="error-number heading-1">404</span><CompassIcon size={48} weight="light" /><h1 className="heading-3">这条路径，还没有到达。</h1><p className="body-3">可能是地址有误，或这篇内容已经换了位置。<br />回到清单，继续下一次探索。</p><a className="button button-primary button-md" href="/#curriculum">回到学习清单<ArrowRightIcon size={18} /></a></section>;
  const privacy = type === 'privacy';
  return <article className="legal-page container">
    <a className="back-to-list caption-3" href="/"><ArrowLeftIcon size={16} />返回首页</a>
    <p className="section-label caption-3">JASMINE LEARNING STATION</p>
    <h1 className="heading-3">{privacy ? '隐私说明' : '使用与来源说明'}</h1>
    <p className="caption-2 muted">更新于 2026 年 11 月 15 日</p>
    {privacy ? <>
      <section><h2 className="heading-5">学习记录保存在本机</h2><p className="body-3">本站使用当前浏览器的本地存储，保存收藏和最近打开的阅读导引。无需注册账号，这些学习记录不会由本站上传至服务器，也不会自动跨设备同步。</p></section>
      <section><h2 className="heading-5">如何清除记录</h2><p className="body-3">你可以在浏览器设置中清除本站的站点数据。清除后，收藏与阅读足迹将重置。无痕模式或浏览器存储限制可能使记录无法长期保存。</p></section>
      <section><h2 className="heading-5">访问与外部链接</h2><p className="body-3">当前页面未接入第三方访问分析或广告追踪脚本。字体与页面资源随站点托管。服务器可能记录必要的请求日志；前往 GitHub、知乎或其他原始来源后，由对应网站处理访问数据。</p></section>
      <section><h2 className="heading-5">联系</h2><p className="body-3">有关本站数据使用的问题，可以通过 <a href="mailto:jasminelai@foxmail.com">jasminelai@foxmail.com</a> 联系 Jasmine。</p></section>
    </> : <>
      <section><h2 className="heading-5">仅供个人学习使用</h2><p className="body-3">本站内容仅供 Jasmine 个人学习、知识整理与面试准备。文章导读和模拟练习不替代原始资料，也不授予商业转载或再发布许可。</p></section>
      <section><h2 className="heading-5">清单来源</h2><p className="body-3">原有 28 篇文章参考<a href={SOURCE_DOCUMENT} target="_blank" rel="noreferrer">知乎 AI 蓝宝书第三册</a>，另新增 <a href="https://github.com/jiangranlv/embodied-ai-start" target="_blank" rel="noreferrer">PKU EPIC Lab 具身智能科研入门指南</a>作为入门首篇。每篇均保留原文地址与 GitHub 清单出处。</p></section>
      <section><h2 className="heading-5">站内学习内容</h2><p className="body-3">29 篇页面均有本站独立编写的摘要、重点讲解、术语、岗位练习与模拟面试参考思路。原作者全文和图表仍在原页面阅读；未获许可的内容不复制到本站。阅读时长是规划预算，受原文篇幅、版本和个人基础影响。</p></section>
      <section><h2 className="heading-5">版权与来源</h2><p className="body-3">原始文章与素材版权归相应权利人所有。本站学习讲解为独立内容，不表示原作者对本站背书。公开仓库不自动意味着可以转载其文章、图表、数据或模型权重；请在原始来源核对各自许可。</p></section>
      <section><h2 className="heading-5">面试准备的定位</h2><p className="body-3">模拟题围绕数据类产品经理、数据采集产品岗、AI 产品经理与具身智能产品经理，以及用户提供的岗位职责整理。题目为学习训练自编内容，不代表任何公司的真实题库，也不承诺面试或录用结果。</p></section>
      <section><h2 className="heading-5">勘误与联系</h2><p className="body-3">如果发现来源、作者或链接需要更正，请通过 <a href="mailto:jasminelai@foxmail.com">jasminelai@foxmail.com</a> 联系 Jasmine。</p></section>
    </>}
  </article>;
}
