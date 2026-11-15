# Jasmine｜Embodied Intelligence Learning Station

具身智能学习站，面向数据产品经理、数据采集产品、AI 产品经理和具身智能产品岗位，整理从入门到实战的阅读路线与面试练习。

**线上站点：** <https://robolearning.carcagem.online/>  
**联系 Jasmine：** <mailto:jasminelai@foxmail.com>  
**用途：** 仅供个人学习使用。

## 内容

- 29 篇独立学习导引：入门 9 篇、进阶 16 篇、实战 4 篇。
- 每篇包含预估学习时间、摘要、关键概念、产品练习和岗位面试模拟。
- 116 道岗位面试练习，覆盖四类产品岗位；结合仿真与合成数据、遥操采集、数据质检、标定与同步、后训练、真机部署和故障分析等职责。
- 文章页保留原作者文章、GitHub 清单及延伸资料的出处链接。

站内内容是原创学习导引、摘要与练习，不逐字转载原作者全文或图表。原文及相关素材的权利归原作者或权利人所有。

## 本地运行

需要 Node.js 22 或兼容的较新版本。

```bash
npm ci
npm run dev
```

生产构建及站点内容检查：

```bash
npm run build
npm run check
```

构建会在 `dist/` 生成首页、每篇文章的独立 HTML 页面、隐私与来源说明、404 页面和 sitemap。

## 项目结构

- `src/data/articles.mjs`：文章目录、作者、阶段、阅读时间和来源链接。
- `src/data/learningContent.mjs`：学习摘要、关键概念、术语、练习及模拟面试内容。
- `src/data/interview.mjs`、`src/data/jobSkills.mjs`：岗位考核维度与职责映射。
- `src/pages/`：首页、独立文章页和说明页。
- `scripts/render-pages.mjs`：构建静态页面和 sitemap。
- `scripts/check-site.mjs`：检查文章内容、页面输出与站内链接。
- `docs/`：架构、学习内容设计、岗位考核范围和部署说明。

## 来源与使用

清单中的完整原文请前往各文章页所列的原始链接阅读。本站的学习笔记仅供个人学习使用；转载、商用或复用第三方内容时，请遵守原作者和来源项目的授权要求。
