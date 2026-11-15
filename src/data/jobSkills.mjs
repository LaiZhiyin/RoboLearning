// Based on the visible responsibilities in the user's six job screenshots.
// This is a learning competency map, not a claim that these jobs are still open.
export const JOB_SKILLS = [
  { id: 'data-platform', title: '数据平台与开发协作', description: '理解数据开发、平台能力与数据交付，能与 Go 等技术栈的研发团队对齐需求。', keyword: '数据', sources: [1], articles: ['embodied-data', 'vla-demo-to-general', 'cloud-edge-robotics', 'robotics-rl-2026'] },
  { id: 'simulation', title: '仿真与合成数据', description: '连接仿真训练、自动评测与真机部署，理解合成数据及仿真迁移的作用。', keyword: '仿真', sources: [2], articles: ['sim-to-real-survey', 'quadruped-rl', 'open-robotics-projects', 'humanoid-control-know-how', 'robotics-rl-2026'] },
  { id: 'collection', title: '遥操采集与数据质检', description: '覆盖 GELLO、UMI、采集 SOP、录制回放、标定、时间同步与观测动作对齐。', keyword: '数据', sources: [3,6], articles: ['embodied-data', 'robot-learning-start', 'diffusion-policy', 'vla-demo-to-general', 'robot-scaling-laws', 'open-robotics-projects'] },
  { id: 'hri', title: '人机交互与产品设计', description: '从用户痛点到多模态交互，形成 PRD、原型、体验标准与产品迭代路线。', keyword: 'VLA', sources: [4], articles: ['vla-models-overview', 'understanding-vla-today', 'vla-demo-to-general', 'cloud-edge-robotics', 'world-model-moment'] },
  { id: 'post-training', title: '后训练与效果评测', description: '理解模仿学习、偏好优化和强化学习，围绕任务成功率、泛化与长尾失败建立闭环。', keyword: '强化学习', sources: [5], articles: ['robotics-rl-2026', 'rl-action-chunking', 'pi-zero', 'vla-models-overview', 'fast-wam', 'diffusion-policy'] },
  { id: 'deployment', title: '真机部署与故障分析', description: '理解 VLA 推理、ROS、软硬件联调与失败案例，把调试反馈转化为产品迭代。', keyword: '控制', sources: [3,6], articles: ['real-time-vla', 'cloud-edge-robotics', 'rl-joint-pd-control', 'humanoid-control-know-how', 'sim-to-real-survey'] },
];

export function skillsForArticle(article) {
  if (article.slug === 'embodied-ai-research-start') return JOB_SKILLS;
  const matches = JOB_SKILLS.filter(skill => skill.articles.includes(article.slug));
  return matches.length ? matches : JOB_SKILLS.filter(skill => ['collection', 'hri', 'post-training'].includes(skill.id));
}
