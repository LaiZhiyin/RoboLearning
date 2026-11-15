import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

const points = Array.from({ length: 210 }, (_, index) => {
  const y = 1 - (index / 209) * 2;
  const radius = Math.sqrt(1 - y * y);
  const angle = index * Math.PI * (3 - Math.sqrt(5));
  return [Math.cos(angle) * radius, y, Math.sin(angle) * radius];
});
const connections = [];
points.forEach((point, i) => {
  for (let j = i + 1; j < points.length; j += 1) {
    if (Math.hypot(...point.map((value, axis) => value - points[j][axis])) < 0.31) connections.push([i, j]);
  }
});

export default function KnowledgeOrbit() {
  const canvasRef = useRef(null);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let frame = 0;
    let angle = 0.35;
    let width = 0;
    let height = 0;
    let visible = true;
    let lastTime = 0;
    const project = ([x, y, z]) => {
      const rotatedX = x * Math.cos(angle) - z * Math.sin(angle);
      const rotatedZ = x * Math.sin(angle) + z * Math.cos(angle);
      const tilt = -0.22;
      const rotatedY = y * Math.cos(tilt) - rotatedZ * Math.sin(tilt);
      const depth = y * Math.sin(tilt) + rotatedZ * Math.cos(tilt);
      const perspective = 3.5 / (3.5 - depth * 0.35);
      const radius = Math.min(width, height) * 0.315;
      return { x: width / 2 + rotatedX * radius * perspective, y: height / 2 + rotatedY * radius * perspective, z: depth };
    };
    const draw = () => {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);
      const projected = points.map(project);
      const radius = Math.min(width, height) * 0.315;
      const glow = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, radius * 1.5);
      glow.addColorStop(0, 'rgba(255, 125, 81, 0.085)');
      glow.addColorStop(1, 'rgba(255, 125, 81, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      for (let orbit = 0; orbit < 3; orbit += 1) {
        ctx.beginPath();
        ctx.ellipse(width / 2, height / 2, radius * 1.38, radius * (0.36 + orbit * 0.11), -0.5 + orbit * 0.85, 0, Math.PI * 2);
        ctx.strokeStyle = orbit === 1 ? 'rgba(255, 141, 100, 0.28)' : 'rgba(163, 186, 188, 0.15)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      connections.forEach(([a, b]) => {
        const start = projected[a];
        const end = projected[b];
        const alpha = 0.08 + ((start.z + end.z + 2) / 4) * 0.3;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.strokeStyle = `rgba(186, 202, 192, ${alpha})`;
        ctx.lineWidth = 0.65;
        ctx.stroke();
      });
      projected.forEach((point, index) => {
        const accent = index % 17 === 0;
        const alpha = 0.25 + ((point.z + 1) / 2) * 0.7;
        ctx.beginPath();
        ctx.arc(point.x, point.y, accent ? 2.6 : 1.15, 0, Math.PI * 2);
        ctx.fillStyle = accent ? `rgba(255, 139, 90, ${alpha})` : `rgba(200, 221, 209, ${alpha})`;
        ctx.fill();
        if (accent && point.z > 0) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 7, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 139, 90, ${alpha * 0.3})`;
          ctx.stroke();
        }
      });
    };
    const tick = (time) => {
      if (lastTime) angle += Math.min(time - lastTime, 50) * 0.000055;
      lastTime = time;
      draw();
      frame = requestAnimationFrame(tick);
    };
    const syncAnimation = () => {
      cancelAnimationFrame(frame);
      lastTime = 0;
      draw();
      if (!paused && visible && !document.hidden) frame = requestAnimationFrame(tick);
    };
    const resize = new ResizeObserver(([entry]) => {
      ({ width, height } = entry.contentRect);
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    });
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncAnimation(); });
    resize.observe(canvas);
    intersection.observe(canvas);
    document.addEventListener('visibilitychange', syncAnimation);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); intersection.disconnect(); document.removeEventListener('visibilitychange', syncAnimation); };
  }, [paused]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (event) => { if (event.matches) setPaused(true); };
    preference.addEventListener('change', onChange);
    return () => preference.removeEventListener('change', onChange);
  }, []);

  return <div className="knowledge-orbit"><div className="orbit-topline mono"><span>THE KNOWLEDGE ORBIT</span><span>FIG. 001</span></div><div className="orbit-art" aria-hidden="true"><div className="orbit-crosshair crosshair-one">+</div><div className="orbit-crosshair crosshair-two">+</div><canvas ref={canvasRef} /><span className="orbit-label label-build"><i />BUILD / 创造</span><span className="orbit-label label-learn"><i />LEARN / 学习</span><span className="orbit-label label-share"><i />SHARE / 分享</span></div><div className="orbit-bottomline"><span><span className="status-dot" /> 好奇心驱动，持续进化</span><button type="button" aria-label={paused ? '播放知识轨道动画' : '暂停知识轨道动画'} onClick={() => setPaused(!paused)}>{paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}</button></div></div>;
}
