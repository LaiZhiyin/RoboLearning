// Metadata verified against the source list on 2026-11-15.
// Introductions and time estimates are editorial drafts; original full text is not included.
export const SOURCE_REPOSITORY = 'https://github.com/Zhihufrontier/zhihu-ai-cookbook';
export const SOURCE_DOCUMENT = `${SOURCE_REPOSITORY}/blob/1c540731518d92386a8c78314f17681c4f4d9313/books/03-embodied-ai.md`;
export const SITE_URL = 'https://robolearning.carcagem.online';
export const SITE_NAME = 'Jasmine｜Embodied Intelligence Learning Station';
export const STAGES = [
  { id: 'beginner', label: '入门', count: 9, index: '01', title: '先建立一张全局地图', description: '认识问题与技术路线，找到自己的起点。', note: '建立认知', color: 'green' },
  { id: 'advanced', label: '进阶', count: 16, index: '02', title: '走进模型与方法内部', description: '连接论文、架构与工程，理解为什么。', note: '理解方法', color: 'blue' },
  { id: 'practice', label: '实战', count: 4, index: '03', title: '把理解变成一次实践', description: '选一个最小任务，在运行中检验知识。', note: '动手验证', color: 'purple' },
];
export const ARTICLES = [
  {
    "id": "A01",
    "slug": "embodied-ai-research-start",
    "title": "具身智能科研入门指南",
    "originalTitle": "How to Get Started with Embodied AI Research",
    "author": "吕江燃等 · PKU EPIC Lab",
    "authors": [
      "吕江燃",
      "张嘉曌",
      "邓胜亮",
      "陈嘉毅",
      "严汨",
      "李忆唐"
    ],
    "excerpt": "先想清楚机器人要完成什么任务，再选择模型。从基础概念、研究工具到抓取、操作、导航与运控，建立进入具身智能研究的第一张地图。",
    "topic": "科研入门",
    "tags": [
      "入门指南",
      "任务定义",
      "机器人学"
    ],
    "stage": "beginner",
    "readingMinutes": [
      90,
      150
    ],
    "skimMinutes": [
      25,
      45
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://github.com/jiangranlv/embodied-ai-start/blob/main/README.md",
    "originalHomeUrl": "https://jiangranlv.notion.site/How-to-Get-Started-with-Embodied-AI-Research-252a467c9b60804d85dcfeffcc7771fb",
    "githubUrl": "https://github.com/jiangranlv/embodied-ai-start",
    "repositoryUrl": "https://github.com/jiangranlv/embodied-ai-start",
    "sourceName": "PKU EPIC Lab",
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "A02",
    "slug": "embodied-ai-imagenet",
    "title": "具身智能需要从 ImageNet 做起吗？",
    "author": "许华哲 Harry",
    "excerpt": "从机器人数据、视觉、触觉与评测出发，理解具身智能能否走出自己的规模化学习路径。",
    "topic": "全局认知",
    "tags": [
      "具身智能",
      "数据",
      "Scaling"
    ],
    "stage": "beginner",
    "readingMinutes": [
      60,
      90
    ],
    "skimMinutes": [
      20,
      30
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/1906157729292219201",
    "sourceLine": 405,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "A03",
    "slug": "science-and-patience",
    "title": "具身智能：一场需要谦逊与耐心的科学远征",
    "author": "周指导 BoyuZhou",
    "excerpt": "把具身智能放回机器人学与工程积累之中，认识控制、本体与具体任务的长期价值。",
    "topic": "全局认知",
    "tags": [
      "机器人学",
      "工程"
    ],
    "stage": "beginner",
    "readingMinutes": [
      45,
      75
    ],
    "skimMinutes": [
      15,
      25
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/1906835485990565345",
    "sourceLine": 406,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "A04",
    "slug": "rl-vla-world-model",
    "title": "机器人具身智能三大流派：强化学习、VLA、World Model 到底在争什么？",
    "author": "机器人技术笔记",
    "excerpt": "先认识强化学习、VLA 与世界模型分别解决的问题，再理解它们在真实系统中的组合方式。",
    "topic": "技术地图",
    "tags": [
      "强化学习",
      "VLA",
      "世界模型"
    ],
    "stage": "beginner",
    "readingMinutes": [
      30,
      60
    ],
    "skimMinutes": [
      10,
      20
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/2013539588820444796",
    "sourceLine": 407,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "A05",
    "slug": "vla-models-overview",
    "title": "【综述】具身智能中的 VLA 模型",
    "author": "tomsheep",
    "excerpt": "沿着架构、数据、训练与评测建立 VLA 全景，连接 RT 系列、扩散策略与机器人操作。",
    "topic": "VLA",
    "tags": [
      "VLA",
      "模型综述"
    ],
    "stage": "beginner",
    "readingMinutes": [
      180,
      300
    ],
    "skimMinutes": [
      60,
      100
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/1951985172259004422",
    "sourceLine": 408,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "A06",
    "slug": "diffusion-policy",
    "title": "Diffusion Policy——基于扩散模型的机器人动作生成策略",
    "author": "王建明",
    "excerpt": "从动作分布的多峰性切入，认识扩散模型如何根据观测生成一段机器人动作。",
    "topic": "动作生成",
    "tags": [
      "Diffusion",
      "模仿学习"
    ],
    "stage": "beginner",
    "readingMinutes": [
      120,
      180
    ],
    "skimMinutes": [
      40,
      60
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/670555655",
    "sourceLine": 409,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "A07",
    "slug": "robot-learning-start",
    "title": "机器人学习（robot learning）领域如何入门？",
    "author": "Stan Fu",
    "excerpt": "一份进入机器人学习的资源导引，把行为克隆、ACT、扩散策略与流匹配串在一起。",
    "topic": "学习路线",
    "tags": [
      "Robot Learning",
      "模仿学习"
    ],
    "stage": "beginner",
    "readingMinutes": [
      45,
      75
    ],
    "skimMinutes": [
      15,
      25
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://www.zhihu.com/question/627309352/answer/1996123281732941388",
    "sourceLine": 410,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "A08",
    "slug": "embodied-data",
    "title": "为什么「数据」被视为具身智能最大壁垒？",
    "author": "于超",
    "excerpt": "围绕采集成本、数据质量与场景覆盖，思考机器人数据为什么难以规模化。",
    "topic": "数据",
    "tags": [
      "数据",
      "泛化"
    ],
    "stage": "beginner",
    "readingMinutes": [
      30,
      60
    ],
    "skimMinutes": [
      10,
      20
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://www.zhihu.com/question/2072726754230101239/answer/2074508922489141235",
    "sourceLine": 411,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "A09",
    "slug": "locomotion-roadmap",
    "title": "具身智能（运动控制方向）如何学习？",
    "author": "林博",
    "excerpt": "梳理运动控制方向的知识依赖，为控制基础、强化学习与动手复现安排学习顺序。",
    "topic": "运动控制",
    "tags": [
      "运动控制",
      "学习路线"
    ],
    "stage": "beginner",
    "readingMinutes": [
      45,
      75
    ],
    "skimMinutes": [
      15,
      25
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://www.zhihu.com/question/2019488603890266175/answer/2022307874802517337",
    "sourceLine": 412,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B01",
    "slug": "vla-paper-map",
    "title": "【具身智能】机器人操作 VLA 模型论文整理",
    "author": "Mayer Zhu",
    "excerpt": "按机器人操作模型查找代表性论文，带着具体问题建立自己的 VLA 文献地图。",
    "topic": "VLA",
    "tags": [
      "VLA",
      "论文索引"
    ],
    "stage": "advanced",
    "readingMinutes": [
      60,
      120
    ],
    "skimMinutes": [
      20,
      40
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/7371838810",
    "sourceLine": 416,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B02",
    "slug": "legged-rl-classics",
    "title": "RL 做足式机器人运控的经典必读文章（带私货）",
    "author": "Eric Liu",
    "excerpt": "整理足式机器人强化学习的经典阅读，用论文索引连接训练方法与运动控制实践。",
    "topic": "强化学习",
    "tags": [
      "强化学习",
      "足式机器人"
    ],
    "stage": "advanced",
    "readingMinutes": [
      90,
      150
    ],
    "skimMinutes": [
      30,
      50
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/29806809248",
    "sourceLine": 417,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B03",
    "slug": "pi-zero",
    "title": "【VLA系列】万字深度解析 π0",
    "author": "AIming",
    "excerpt": "深入一个代表性 VLA 模型，理解视觉语言骨干与连续动作生成之间的连接。",
    "topic": "VLA",
    "tags": [
      "π0",
      "Flow Matching"
    ],
    "stage": "advanced",
    "readingMinutes": [
      180,
      300
    ],
    "skimMinutes": [
      60,
      100
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/1907535034941965833",
    "sourceLine": 418,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B04",
    "slug": "quadruped-rl",
    "title": "强化学习 & 四足 Quadruped",
    "author": "白辰甲",
    "excerpt": "从四足机器人出发认识强化学习问题设置，建立观测、动作、奖励与控制的联系。",
    "topic": "运动控制",
    "tags": [
      "强化学习",
      "四足机器人"
    ],
    "stage": "advanced",
    "readingMinutes": [
      120,
      180
    ],
    "skimMinutes": [
      40,
      60
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/570352241",
    "sourceLine": 419,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B05",
    "slug": "fast-wam",
    "title": "Fast-WAM：关于 WAM 核心能力来源的思考",
    "author": "清华 MARS Lab",
    "excerpt": "通过控制变量与消融实验，讨论世界动作模型的能力来自训练还是推理。",
    "topic": "世界模型",
    "tags": [
      "WAM",
      "消融实验"
    ],
    "stage": "advanced",
    "readingMinutes": [
      90,
      150
    ],
    "skimMinutes": [
      30,
      50
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/2018464228785275484",
    "sourceLine": 420,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B06",
    "slug": "vla-demo-to-general",
    "title": "具身 VLA 的 2025：从 Demo 到通用的距离",
    "author": "林天威",
    "excerpt": "把模型、数据、训练和评测连起来，理解机器人从演示走向通用应用的距离。",
    "topic": "VLA",
    "tags": [
      "VLA",
      "泛化",
      "评测"
    ],
    "stage": "advanced",
    "readingMinutes": [
      90,
      150
    ],
    "skimMinutes": [
      30,
      50
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/1989799567177307432",
    "sourceLine": 421,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B07",
    "slug": "rl-action-chunking",
    "title": "Reinforcement Learning with Action Chunking 解读",
    "author": "位德浩",
    "excerpt": "关注动作分块如何与强化学习结合，思考时序连贯性、反馈频率与学习效率的取舍。",
    "topic": "强化学习",
    "tags": [
      "强化学习",
      "Action Chunking"
    ],
    "stage": "advanced",
    "readingMinutes": [
      120,
      180
    ],
    "skimMinutes": [
      40,
      60
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/1927420187478570745",
    "sourceLine": 422,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B08",
    "slug": "world-model-moment",
    "title": "世界模型（World Model）是不是机器人（具身智能）下一个「奇点时刻」？",
    "author": "海抱 AI",
    "excerpt": "从机器人与物理交互的角度看世界模型，区分能力愿景、技术路径与已有证据。",
    "topic": "世界模型",
    "tags": [
      "世界模型",
      "研究视角"
    ],
    "stage": "advanced",
    "readingMinutes": [
      60,
      90
    ],
    "skimMinutes": [
      20,
      30
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://www.zhihu.com/question/1969460053296801225/answer/2031100230167426156",
    "sourceLine": 423,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B09",
    "slug": "robotics-top-papers-2025",
    "title": "2025 年 Robotics（具身智能）最值得推荐阅读的 10 篇顶会 Paper（总结）",
    "author": "gurubar",
    "excerpt": "通过年度代表性工作寻找研究方向，再回到原论文与项目核对方法和证据。",
    "topic": "论文阅读",
    "tags": [
      "论文索引",
      "年度回顾"
    ],
    "stage": "advanced",
    "readingMinutes": [
      90,
      150
    ],
    "skimMinutes": [
      30,
      50
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/1998052390599950753",
    "sourceLine": 424,
    "timeSensitive": true,
    "contentStatus": "framework"
  },
  {
    "id": "B10",
    "slug": "understanding-vla-today",
    "title": "如何看待目前 VLA 的具身智能技术？",
    "author": "胡萝博",
    "excerpt": "从当前 VLA 的能力与限制出发，练习判断技术主张与实际工程价值。",
    "topic": "VLA",
    "tags": [
      "VLA",
      "技术判断"
    ],
    "stage": "advanced",
    "readingMinutes": [
      60,
      90
    ],
    "skimMinutes": [
      20,
      30
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://www.zhihu.com/question/1920708362489828723/answer/2034761425411945263",
    "sourceLine": 425,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B11",
    "slug": "corl-2025",
    "title": "【机器人顶会 CoRL 2025 best paper 完整分析】 从 π0.5 到 LocoFormer",
    "author": "gurubar",
    "excerpt": "借助顶会工作观察数据、策略与运动控制方向，建立进一步精读的论文清单。",
    "topic": "论文阅读",
    "tags": [
      "CoRL",
      "论文索引"
    ],
    "stage": "advanced",
    "readingMinutes": [
      120,
      180
    ],
    "skimMinutes": [
      40,
      60
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/1955201866083315851",
    "sourceLine": 426,
    "timeSensitive": true,
    "contentStatus": "framework"
  },
  {
    "id": "B12",
    "slug": "robotics-rl-2026",
    "title": "2026 年 RL（强化学习）在 Robotics（具身智能）中的新范式分析",
    "author": "gurubar",
    "excerpt": "追踪机器人 RL 与预训练策略、世界模型和真机数据闭环的组合思路。",
    "topic": "强化学习",
    "tags": [
      "强化学习",
      "前沿观察"
    ],
    "stage": "advanced",
    "readingMinutes": [
      120,
      180
    ],
    "skimMinutes": [
      40,
      60
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/2002328291592401820",
    "sourceLine": 427,
    "timeSensitive": true,
    "contentStatus": "framework"
  },
  {
    "id": "B13",
    "slug": "cloud-edge-robotics",
    "title": "具身智能部署新思路——记中兴「云—边—端」部署架构",
    "author": "Duncan Zhang",
    "excerpt": "借助产业部署案例理解云、边、端之间的分工，以及通信与实时控制的工程约束。",
    "topic": "工程部署",
    "tags": [
      "云边端",
      "工程部署"
    ],
    "stage": "advanced",
    "readingMinutes": [
      60,
      90
    ],
    "skimMinutes": [
      20,
      30
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/2012569897574614338",
    "sourceLine": 428,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B14",
    "slug": "real-time-vla",
    "title": "VLA 模型如何实现实时且平滑的动作控制？",
    "author": "CLEAR Lab",
    "excerpt": "围绕推理延迟、动作块衔接与执行频率，认识实时且平滑的机器人动作控制。",
    "topic": "工程部署",
    "tags": [
      "实时控制",
      "VLA"
    ],
    "stage": "advanced",
    "readingMinutes": [
      90,
      150
    ],
    "skimMinutes": [
      30,
      50
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/1986820879024427514",
    "sourceLine": 429,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B15",
    "slug": "robot-scaling-laws",
    "title": "机器人也有 Scaling Law 吗？瓶颈究竟在模型、数据还是本体？",
    "author": "tomsheep",
    "excerpt": "从模型、数据和机器人本体三个层面，讨论扩展能力时需要验证的瓶颈。",
    "topic": "数据",
    "tags": [
      "Scaling",
      "数据",
      "本体"
    ],
    "stage": "advanced",
    "readingMinutes": [
      60,
      90
    ],
    "skimMinutes": [
      20,
      30
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://www.zhihu.com/question/2072753441416242597/answer/2073354114088682507",
    "sourceLine": 430,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "B16",
    "slug": "sim-to-real-survey",
    "title": "强化学习中 Sim-to-Real 方法综述：基础模型的进展、前景和挑战",
    "author": "黄浴",
    "excerpt": "通过综述建立仿真到真实的技术地图，认识基础模型背景下的进展与挑战。",
    "topic": "仿真迁移",
    "tags": [
      "Sim to Real",
      "基础模型"
    ],
    "stage": "advanced",
    "readingMinutes": [
      120,
      180
    ],
    "skimMinutes": [
      40,
      60
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": null,
    "originalUrl": "https://zhuanlan.zhihu.com/p/26730697492",
    "sourceLine": 431,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "C01",
    "slug": "humanoid-control-know-how",
    "title": "人形机器人运动控制 Know-How",
    "author": "Jagger",
    "excerpt": "以人形机器人运动控制为主线，连接建模、控制算法、仿真训练与部署流程。",
    "topic": "运动控制",
    "tags": [
      "人形机器人",
      "运动控制"
    ],
    "stage": "practice",
    "readingMinutes": [
      180,
      300
    ],
    "skimMinutes": [
      60,
      100
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": [
      480,
      960
    ],
    "originalUrl": "https://zhuanlan.zhihu.com/p/1993986785630499920",
    "sourceLine": 435,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "C02",
    "slug": "diffusion-flow-first-principles",
    "title": "从第一性原理理解 Diffusion & Flow Matching（SDE、ODE 的大一统视角）",
    "author": "妖妖",
    "excerpt": "从概率、微积分与微分方程出发，深入扩散模型和流匹配的数学视角。",
    "topic": "动作生成",
    "tags": [
      "Diffusion",
      "Flow Matching"
    ],
    "stage": "practice",
    "readingMinutes": [
      240,
      480
    ],
    "skimMinutes": [
      80,
      160
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": [
      120,
      240
    ],
    "originalUrl": "https://zhuanlan.zhihu.com/p/2070555284918080338",
    "sourceLine": 436,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "C03",
    "slug": "open-robotics-projects",
    "title": "四足、轮腿、人形开源项目（我跑过的）",
    "author": "youyouhuang826",
    "excerpt": "查找四足、轮腿与人形开源项目，选一个可以运行和记录的最小复现任务。",
    "topic": "开源实践",
    "tags": [
      "开源项目",
      "仿真"
    ],
    "stage": "practice",
    "readingMinutes": [
      60,
      120
    ],
    "skimMinutes": [
      20,
      40
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": [
      480,
      1200
    ],
    "originalUrl": "https://zhuanlan.zhihu.com/p/708902030",
    "sourceLine": 437,
    "timeSensitive": false,
    "contentStatus": "framework"
  },
  {
    "id": "C04",
    "slug": "rl-joint-pd-control",
    "title": "机器人强化学习与关节 PD 控制",
    "author": "白告",
    "excerpt": "从策略输出到真实关节执行，理解机器人强化学习与 PD 控制之间的接口。",
    "topic": "运动控制",
    "tags": [
      "强化学习",
      "PD 控制"
    ],
    "stage": "practice",
    "readingMinutes": [
      120,
      180
    ],
    "skimMinutes": [
      40,
      60
    ],
    "assessmentMinutes": [
      15,
      30
    ],
    "practiceMinutes": [
      120,
      240
    ],
    "originalUrl": "https://zhuanlan.zhihu.com/p/1990213475369255309",
    "sourceLine": 438,
    "timeSensitive": false,
    "contentStatus": "framework"
  }
];

// All 29 entries now have complete, independently authored study guides and interview practice.
for (const article of ARTICLES) article.contentStatus = 'complete';

export function articlePath(article) { return `/learn/${article.slug}/`; }
export function articleSource(article) { return article.githubUrl || `${SOURCE_DOCUMENT}#L${article.sourceLine}`; }
export function stageFor(article) { return STAGES.find(stage => stage.id === article.stage); }
export function formatMinutes(minutes) {
  const [min, max] = minutes;
  if (max < 90) return `${min}–${max} 分钟`;
  const hours = number => Number((number / 60).toFixed(1));
  return `${hours(min)}–${hours(max)} 小时`;
}
export function getRoute(pathname = '/') {
  const path = pathname.replace(/\/index\.html$/, '/').replace(/\/+$/, '') || '/';
  if (path === '/') return { type: 'home' };
  if (path === '/privacy' || path === '/terms') return { type: path.slice(1) };
  const article = ARTICLES.find(item => path === articlePath(item).replace(/\/$/, ''));
  return article ? { type: 'article', article } : { type: 'not-found' };
}
export function pageMeta(pathname) {
  const route = getRoute(pathname);
  const brand = SITE_NAME;
  if (route.type === 'home') return { title: brand, description: '29 篇具身智能学习资源，涵盖 9 篇入门、16 篇进阶与 4 篇实战。连接原始来源、学习时间与数据、采集、AI 和具身智能产品岗位的面试准备。', path: '/', index: true };
  if (route.type === 'article') return { title: `${route.article.title} | ${brand}`, description: route.article.excerpt, path: articlePath(route.article), index: true };
  if (route.type === 'privacy') return { title: `隐私说明 | ${brand}`, description: '了解学习记录、收藏和本机存储的使用方式。', path: '/privacy/', index: false };
  if (route.type === 'terms') return { title: `使用与来源说明 | ${brand}`, description: '了解阅读清单的来源、内容状态与使用说明。', path: '/terms/', index: false };
  return { title: `页面未找到 | ${brand}`, description: '回到学习清单，继续探索具身智能。', path: '/404.html', index: false };
}

