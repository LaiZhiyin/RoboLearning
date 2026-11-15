# Jasmine｜Embodied Intelligence Learning Station

版本 4.0.0。生产地址：[https://robolearning.carcagem.online/](https://robolearning.carcagem.online/)。

## 页面和内容

- `/`：主页、阶段筛选、全文导读搜索、排序、收藏、岗位能力地图和 FAQ。
- `/learn/<slug>/`：29 篇独立静态页面。每篇有来源、时间预算、摘要、学习目标、重点讲解、术语、产品练习、四类岗位面试练习及关联能力。
- `/privacy/`、`/terms/`、`/404.html`：辅助页面。
- 入门 9 篇、进阶 16 篇、实战 4 篇。所有文章逐篇预渲染，因此不依赖 SPA 回退。

## 数据和界面

- `src/data/articles.mjs`：文章标题、作者、阶段、简介、时间范围、原文 URL、GitHub 来源 URL、SEO 元数据。
- `src/data/learningContent.mjs`：29 篇摘要、3 项目标、3 组重点讲解、3 组术语、产品交付练习和 4 道角色化模拟题；每题含参考回答、追问和 4 个 2.5 分自评点。
- `src/data/interview.mjs`：数据类产品经理、数据采集产品岗、AI 产品经理、具身智能产品经理的能力维度。
- `src/data/jobSkills.mjs`：将岗位截图中六组职责归纳为能力地图，并映射到相关学习文章。
- `src/pages/Home.jsx`、`src/pages/ArticlePage.jsx`：页面组件。主页搜索涵盖摘要、目标、讲解、术语、练习、模拟题和来源。
- `src/hooks/useLearning.js`：本机收藏与最近访问，浏览器存储不可用时不阻断阅读。
- `src/components/SiteShell.jsx`、`src/components/RobotScene.jsx`：导航、页脚、滚动露出和原创机器人示意图。
- `src/index.css`：响应式样式、设计令牌、焦点状态与减少动态效果支持。
- `src/entry-server.jsx`、`scripts/render-pages.mjs`：构建时 SSR 和独立 HTML 预渲染。
- `scripts/check-site.mjs`：逐篇检查内容结构、SEO 页面、锚点和站内链接。

## 构建与收录

`npm run build` 生成 `dist/` 中 33 个 HTML 页面及静态资源。主页和 29 个文章页可被搜索引擎收录；隐私、条款和 404 为 noindex。`sitemap.xml` 收录 30 个页面。站点静态托管于 1Panel OpenResty，没有后端 API。

## 学习数据与来源

收藏和最近访问保存在浏览器本机，无登录和跨设备同步。本站撰写的是学习导读和岗位练习，不复制原作者全文；页面保留原文章链接、GitHub 清单位置、可用的源仓库和延伸资料链接。
