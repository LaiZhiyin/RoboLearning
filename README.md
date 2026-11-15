# Jasmine｜Embodied Intelligence Learning Station

> 从第一篇阅读，走向具身智能实践。

把散落的文章，整理成一条可以开始的路。从技术原理到数据采集，再到产品落地，为数据、AI 与具身智能产品岗位积累判断力。

[打开学习站](https://robolearning.carcagem.online/) · [从 A01 开始](https://robolearning.carcagem.online/learn/embodied-ai-research-start/) · [PKU EPIC Lab GitHub 指南](https://github.com/jiangranlv/embodied-ai-start)

**29 篇精选学习资源 · 3 个学习阶段 · 面向产品岗位面试**

## 一条可以走下去的路

不必一次读完所有内容。选择适合自己的阶段，从今天这一篇开始。

| 阶段 | 篇数 | 学习目标 |
| --- | ---: | --- |
| **入门** | 9 | 先建立全局地图，认识具身智能问题、技术路线与学习起点。 |
| **进阶** | 16 | 走进模型与方法，连接论文、架构和工程实践。 |
| **实战** | 4 | 选择一个小任务，通过项目复现和操作验证理解。 |

## 具身智能学习清单

每篇都有独立站内页面，包含预估学习时间、摘要、关键概念、术语、产品练习和岗位模拟题。原文与 GitHub 出处保留在对应链接中。

### 入门（9 篇）

先建立一张全局地图：认识问题与技术路线，找到自己的起点。

- [A01 · 具身智能科研入门指南](https://robolearning.carcagem.online/learn/embodied-ai-research-start/) — 先想清楚机器人要完成什么任务，再选择模型。从基础概念、研究工具到抓取、操作、导航与运控，建立进入具身智能研究的第一张地图。（吕江燃等 · PKU EPIC Lab；精读约 1.5–2.5 小时；[原文](https://github.com/jiangranlv/embodied-ai-start/blob/main/README.md) · [GitHub](https://github.com/jiangranlv/embodied-ai-start)）
- [A02 · 具身智能需要从 ImageNet 做起吗？](https://robolearning.carcagem.online/learn/embodied-ai-imagenet/) — 从机器人数据、视觉、触觉与评测出发，理解具身智能能否走出自己的规模化学习路径。（许华哲 Harry；精读约 1–1.5 小时；[原文](https://zhuanlan.zhihu.com/p/1906157729292219201)）
- [A03 · 具身智能：一场需要谦逊与耐心的科学远征](https://robolearning.carcagem.online/learn/science-and-patience/) — 把具身智能放回机器人学与工程积累之中，认识控制、本体与具体任务的长期价值。（周指导 BoyuZhou；精读约 45–75 分钟；[原文](https://zhuanlan.zhihu.com/p/1906835485990565345)）
- [A04 · 机器人具身智能三大流派：强化学习、VLA、World Model 到底在争什么？](https://robolearning.carcagem.online/learn/rl-vla-world-model/) — 先认识强化学习、VLA 与世界模型分别解决的问题，再理解它们在真实系统中的组合方式。（机器人技术笔记；精读约 30–60 分钟；[原文](https://zhuanlan.zhihu.com/p/2013539588820444796)）
- [A05 · 【综述】具身智能中的 VLA 模型](https://robolearning.carcagem.online/learn/vla-models-overview/) — 沿着架构、数据、训练与评测建立 VLA 全景，连接 RT 系列、扩散策略与机器人操作。（tomsheep；精读约 3–5 小时；[原文](https://zhuanlan.zhihu.com/p/1951985172259004422)）
- [A06 · Diffusion Policy——基于扩散模型的机器人动作生成策略](https://robolearning.carcagem.online/learn/diffusion-policy/) — 从动作分布的多峰性切入，认识扩散模型如何根据观测生成一段机器人动作。（王建明；精读约 2–3 小时；[原文](https://zhuanlan.zhihu.com/p/670555655)）
- [A07 · 机器人学习（robot learning）领域如何入门？](https://robolearning.carcagem.online/learn/robot-learning-start/) — 一份进入机器人学习的资源导引，把行为克隆、ACT、扩散策略与流匹配串在一起。（Stan Fu；精读约 45–75 分钟；[原文](https://www.zhihu.com/question/627309352/answer/1996123281732941388)）
- [A08 · 为什么「数据」被视为具身智能最大壁垒？](https://robolearning.carcagem.online/learn/embodied-data/) — 围绕采集成本、数据质量与场景覆盖，思考机器人数据为什么难以规模化。（于超；精读约 30–60 分钟；[原文](https://www.zhihu.com/question/2072726754230101239/answer/2074508922489141235)）
- [A09 · 具身智能（运动控制方向）如何学习？](https://robolearning.carcagem.online/learn/locomotion-roadmap/) — 梳理运动控制方向的知识依赖，为控制基础、强化学习与动手复现安排学习顺序。（林博；精读约 45–75 分钟；[原文](https://www.zhihu.com/question/2019488603890266175/answer/2022307874802517337)）

### 进阶（16 篇）

走进模型与方法内部：连接论文、架构与工程，理解为什么。

- [B01 · 【具身智能】机器人操作 VLA 模型论文整理](https://robolearning.carcagem.online/learn/vla-paper-map/) — 按机器人操作模型查找代表性论文，带着具体问题建立自己的 VLA 文献地图。（Mayer Zhu；精读约 1–2 小时；[原文](https://zhuanlan.zhihu.com/p/7371838810)）
- [B02 · RL 做足式机器人运控的经典必读文章（带私货）](https://robolearning.carcagem.online/learn/legged-rl-classics/) — 整理足式机器人强化学习的经典阅读，用论文索引连接训练方法与运动控制实践。（Eric Liu；精读约 1.5–2.5 小时；[原文](https://zhuanlan.zhihu.com/p/29806809248)）
- [B03 · 【VLA系列】万字深度解析 π0](https://robolearning.carcagem.online/learn/pi-zero/) — 深入一个代表性 VLA 模型，理解视觉语言骨干与连续动作生成之间的连接。（AIming；精读约 3–5 小时；[原文](https://zhuanlan.zhihu.com/p/1907535034941965833)）
- [B04 · 强化学习 & 四足 Quadruped](https://robolearning.carcagem.online/learn/quadruped-rl/) — 从四足机器人出发认识强化学习问题设置，建立观测、动作、奖励与控制的联系。（白辰甲；精读约 2–3 小时；[原文](https://zhuanlan.zhihu.com/p/570352241)）
- [B05 · Fast-WAM：关于 WAM 核心能力来源的思考](https://robolearning.carcagem.online/learn/fast-wam/) — 通过控制变量与消融实验，讨论世界动作模型的能力来自训练还是推理。（清华 MARS Lab；精读约 1.5–2.5 小时；[原文](https://zhuanlan.zhihu.com/p/2018464228785275484)）
- [B06 · 具身 VLA 的 2025：从 Demo 到通用的距离](https://robolearning.carcagem.online/learn/vla-demo-to-general/) — 把模型、数据、训练和评测连起来，理解机器人从演示走向通用应用的距离。（林天威；精读约 1.5–2.5 小时；[原文](https://zhuanlan.zhihu.com/p/1989799567177307432)）
- [B07 · Reinforcement Learning with Action Chunking 解读](https://robolearning.carcagem.online/learn/rl-action-chunking/) — 关注动作分块如何与强化学习结合，思考时序连贯性、反馈频率与学习效率的取舍。（位德浩；精读约 2–3 小时；[原文](https://zhuanlan.zhihu.com/p/1927420187478570745)）
- [B08 · 世界模型（World Model）是不是机器人（具身智能）下一个「奇点时刻」？](https://robolearning.carcagem.online/learn/world-model-moment/) — 从机器人与物理交互的角度看世界模型，区分能力愿景、技术路径与已有证据。（海抱 AI；精读约 1–1.5 小时；[原文](https://www.zhihu.com/question/1969460053296801225/answer/2031100230167426156)）
- [B09 · 2025 年 Robotics（具身智能）最值得推荐阅读的 10 篇顶会 Paper（总结）](https://robolearning.carcagem.online/learn/robotics-top-papers-2025/) — 通过年度代表性工作寻找研究方向，再回到原论文与项目核对方法和证据。（gurubar；精读约 1.5–2.5 小时；[原文](https://zhuanlan.zhihu.com/p/1998052390599950753)）
- [B10 · 如何看待目前 VLA 的具身智能技术？](https://robolearning.carcagem.online/learn/understanding-vla-today/) — 从当前 VLA 的能力与限制出发，练习判断技术主张与实际工程价值。（胡萝博；精读约 1–1.5 小时；[原文](https://www.zhihu.com/question/1920708362489828723/answer/2034761425411945263)）
- [B11 · 【机器人顶会 CoRL 2025 best paper 完整分析】 从 π0.5 到 LocoFormer](https://robolearning.carcagem.online/learn/corl-2025/) — 借助顶会工作观察数据、策略与运动控制方向，建立进一步精读的论文清单。（gurubar；精读约 2–3 小时；[原文](https://zhuanlan.zhihu.com/p/1955201866083315851)）
- [B12 · 2026 年 RL（强化学习）在 Robotics（具身智能）中的新范式分析](https://robolearning.carcagem.online/learn/robotics-rl-2026/) — 追踪机器人 RL 与预训练策略、世界模型和真机数据闭环的组合思路。（gurubar；精读约 2–3 小时；[原文](https://zhuanlan.zhihu.com/p/2002328291592401820)）
- [B13 · 具身智能部署新思路——记中兴「云—边—端」部署架构](https://robolearning.carcagem.online/learn/cloud-edge-robotics/) — 借助产业部署案例理解云、边、端之间的分工，以及通信与实时控制的工程约束。（Duncan Zhang；精读约 1–1.5 小时；[原文](https://zhuanlan.zhihu.com/p/2012569897574614338)）
- [B14 · VLA 模型如何实现实时且平滑的动作控制？](https://robolearning.carcagem.online/learn/real-time-vla/) — 围绕推理延迟、动作块衔接与执行频率，认识实时且平滑的机器人动作控制。（CLEAR Lab；精读约 1.5–2.5 小时；[原文](https://zhuanlan.zhihu.com/p/1986820879024427514)）
- [B15 · 机器人也有 Scaling Law 吗？瓶颈究竟在模型、数据还是本体？](https://robolearning.carcagem.online/learn/robot-scaling-laws/) — 从模型、数据和机器人本体三个层面，讨论扩展能力时需要验证的瓶颈。（tomsheep；精读约 1–1.5 小时；[原文](https://www.zhihu.com/question/2072753441416242597/answer/2073354114088682507)）
- [B16 · 强化学习中 Sim-to-Real 方法综述：基础模型的进展、前景和挑战](https://robolearning.carcagem.online/learn/sim-to-real-survey/) — 通过综述建立仿真到真实的技术地图，认识基础模型背景下的进展与挑战。（黄浴；精读约 2–3 小时；[原文](https://zhuanlan.zhihu.com/p/26730697492)）

### 实战（4 篇）

把理解变成一次实践：选一个最小任务，在运行中检验知识。

- [C01 · 人形机器人运动控制 Know-How](https://robolearning.carcagem.online/learn/humanoid-control-know-how/) — 以人形机器人运动控制为主线，连接建模、控制算法、仿真训练与部署流程。（Jagger；精读约 3–5 小时；[原文](https://zhuanlan.zhihu.com/p/1993986785630499920)）
- [C02 · 从第一性原理理解 Diffusion & Flow Matching（SDE、ODE 的大一统视角）](https://robolearning.carcagem.online/learn/diffusion-flow-first-principles/) — 从概率、微积分与微分方程出发，深入扩散模型和流匹配的数学视角。（妖妖；精读约 4–8 小时；[原文](https://zhuanlan.zhihu.com/p/2070555284918080338)）
- [C03 · 四足、轮腿、人形开源项目（我跑过的）](https://robolearning.carcagem.online/learn/open-robotics-projects/) — 查找四足、轮腿与人形开源项目，选一个可以运行和记录的最小复现任务。（youyouhuang826；精读约 1–2 小时；[原文](https://zhuanlan.zhihu.com/p/708902030)）
- [C04 · 机器人强化学习与关节 PD 控制](https://robolearning.carcagem.online/learn/rl-joint-pd-control/) — 从策略输出到真实关节执行，理解机器人强化学习与 PD 控制之间的接口。（白告；精读约 2–3 小时；[原文](https://zhuanlan.zhihu.com/p/1990213475369255309)）

## 阅读之后，更进一步

以数据、AI 与具身智能产品岗位面试为检验，让每次阅读连接到真实的产品问题：

1. **带着问题读：** 先看导读和时间预算，把文章放回技术地图，找到它解决的具体问题。
2. **用产品面试方式讲：** 把技术放进场景，说明数据怎么采、质量怎么验、方案如何取舍和落地。
3. **拿一个方案验证：** 从需求定义、采集 SOP 到评测指标，整理一份能解释选择与验证结果的产品方案。

### 从岗位职责，反推学习重点

- **数据平台与开发协作：** 理解数据开发、平台能力与数据交付，能与 Go 等技术栈的研发团队对齐需求。
- **仿真与合成数据：** 连接仿真训练、自动评测与真机部署，理解合成数据及 sim-to-real 的作用。
- **遥操采集与数据质检：** 覆盖 GELLO、UMI、采集 SOP、录制回放、标定、时间同步与观测—动作对齐。
- **人机交互与产品设计：** 从用户痛点到多模态交互，形成 PRD、原型、体验标准与产品迭代路线。
- **后训练与效果评测：** 理解模仿学习、偏好优化和强化学习，围绕成功率、泛化与长尾失败建立闭环。
- **真机部署与故障分析：** 理解 VLA 推理、ROS、软硬件联调与失败案例，把调试反馈转化为产品迭代。

### 面试准备

练习面向四类岗位：**数据类产品经理、数据采集产品岗、AI 产品经理、具身智能产品经理**。29 篇导读共配有 **116 道自编岗位题**，含参考答题思路、追问和自评要点。题目用于学习训练，不代表任何公司的真实面试题。

## 学习站功能

- 按入门、进阶、实战筛选；可搜索文章、作者和学习主题。
- 可按推荐顺序或阅读时间排序。
- 收藏文章并记录最近阅读；记录保存在当前浏览器，不需要注册，也不会跨设备同步。
- 每篇文章都有独立 URL，可直接分享和从原文入口继续阅读。

## 来源与使用说明

本站内容由 Jasmine 独立整理，仅提供学习导读、摘要、讲解和练习，**不逐字转载原作者全文或图表**。原文和相关素材版权归原作者或权利人所有，请通过各条目中的原始链接阅读。

本站**仅供个人学习使用**。联系 Jasmine：<mailto:jasminelai@foxmail.com>。

## 本地运行

需要 Node.js 22 或兼容的较新版本。

```bash
npm ci
npm run dev
```

构建静态页面并检查文章目录：

```bash
npm run build
npm run check
```

构建产物位于 `dist/`，包括首页、29 篇独立文章、隐私与来源说明、404 页面和 sitemap。

## 项目结构

- `src/data/articles.mjs`：文章目录、作者、阶段、阅读时间和来源链接。
- `src/data/learningContent.mjs`：学习摘要、关键概念、术语、练习及模拟面试内容。
- `src/data/interview.mjs`、`src/data/jobSkills.mjs`：岗位考核维度与职责映射。
- `src/pages/`：首页、文章导读和说明页面。
- `scripts/render-pages.mjs`：构建静态页面与 sitemap。
- `scripts/check-site.mjs`：检查文章内容、页面输出和内部链接。
- `docs/`：项目架构、学习设计、面试范围与部署说明。
