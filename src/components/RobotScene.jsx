export default function RobotScene({ compact = false }) {
  return (
    <div className={'robot-scene' + (compact ? ' is-compact' : '')}>
      <div className="scene-header caption-4"><span><span className="signal-dot" />JASMINE ROBOTICS LAB</span><span>FIG. 01</span></div>
      <svg className="robot-drawing" viewBox="0 0 560 416" role="img" aria-label="机器人机械臂观察并抓取橙色方块的示意图，连接感知、决策与行动">
        <defs>
          <pattern id={compact ? 'lab-dots-compact' : 'lab-dots'} width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#d2d6ce" /></pattern>
          <marker id={compact ? 'axis-arrow-compact' : 'axis-arrow'} viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 8 4 0 8" fill="none" stroke="#98a39a" strokeWidth="1.5" /></marker>
        </defs>
        <rect width="560" height="416" fill={'url(#' + (compact ? 'lab-dots-compact' : 'lab-dots') + ')'} />
        <path d="M65 321 316 180 529 301 278 440Z" fill="#e8ebe2" />
        <path d="M76 327 314 191 514 304M125 355 363 219M173 383 411 247M222 411 459 275M122 301 323 416M170 274 371 389M217 247 418 362M265 220 466 335" stroke="#d7dcd1" strokeWidth="1" fill="none" />
        <ellipse cx="243" cy="333" rx="91" ry="23" fill="#cdd2c5" opacity=".6" />
        <path d="M143 322 225 276 309 323 227 369Z" fill="#bdc4b5" stroke="#73806d" strokeWidth="1.5" />
        <path d="M143 322v16l84 47 82-46v-16l-82 46Z" fill="#aeb8a5" stroke="#73806d" strokeWidth="1.5" />
        <path d="M227 369v16M159 323l68 38 66-38" fill="none" stroke="#73806d" strokeWidth="1.5" />
        <path d="M196 307v-43c0-26 62-26 62 0v43c0 26-62 26-62 0Z" fill="#dce2d4" stroke="#586950" strokeWidth="2" />
        <ellipse cx="227" cy="264" rx="31" ry="16" fill="#edf0e8" stroke="#586950" strokeWidth="2" />
        <path d="M210 272v32M218 275v33M238 275v33M246 273v32" stroke="#aebaa4" strokeWidth="2" />
        <g className="robot-upper">
          <path d="M210 248 173 168 193 142 226 157 258 239Z" fill="#e7ece0" stroke="#586950" strokeWidth="2" />
          <path d="m210 248 18-13-32-77-23 10Z" fill="#c3cdb8" stroke="#586950" strokeWidth="2" />
          <ellipse cx="227" cy="246" rx="29" ry="23" fill="#e1e7d9" stroke="#586950" strokeWidth="2" />
          <ellipse cx="227" cy="246" rx="17" ry="14" fill="#7a8e6c" stroke="#586950" strokeWidth="2" />
          <ellipse cx="227" cy="246" rx="6" ry="5" fill="#dce5d3" />
          <path d="m182 146 102-57 24 17-3 30-102 58-20-18Z" fill="#e8edde" stroke="#586950" strokeWidth="2" />
          <path d="m182 146 21 18 105-58M203 164v30" fill="none" stroke="#586950" strokeWidth="2" />
          <path d="m198 151 83-47 10 7-82 47Z" fill="#9bad8c" />
          <ellipse cx="192" cy="168" rx="25" ry="28" fill="#d8e2cb" stroke="#586950" strokeWidth="2" transform="rotate(-24 192 168)" />
          <ellipse cx="192" cy="168" rx="14" ry="17" fill="#718863" stroke="#586950" strokeWidth="2" transform="rotate(-24 192 168)" />
          <ellipse cx="192" cy="168" rx="5" ry="6" fill="#e9eedf" transform="rotate(-24 192 168)" />
          <path d="m284 99 68 38 5 31-22 15-63-38Z" fill="#e8edde" stroke="#586950" strokeWidth="2" />
          <path d="m284 99-12 46 21-13 64 36M293 132l59 5" fill="none" stroke="#586950" strokeWidth="2" />
          <ellipse cx="289" cy="117" rx="19" ry="23" fill="#d8e2cb" stroke="#586950" strokeWidth="2" transform="rotate(-30 289 117)" />
          <ellipse cx="289" cy="117" rx="9" ry="12" fill="#718863" stroke="#586950" strokeWidth="2" transform="rotate(-30 289 117)" />
          <path d="m333 151 23 13v31l-23 14-22-13v-32Z" fill="#72886a" stroke="#485d43" strokeWidth="2" />
          <path d="m311 164 22 14 23-14M333 178v31" fill="none" stroke="#485d43" strokeWidth="2" />
          <path d="m318 196-16 16v26l9 5v-25l16-15M348 202l15 10v26l-9 5v-25l-15-10" fill="#c8d4ba" stroke="#485d43" strokeWidth="2" strokeLinejoin="round" />
          <path d="m303 231 8 5m43 0 9-5" stroke="#485d43" strokeWidth="2" />
        </g>
        <g className="target-cube">
          <path d="m331 255 32 18-32 19-32-19Z" fill="#f49b6f" stroke="#bc4c2a" strokeWidth="1.5" />
          <path d="m299 273 32 19v37l-32-18Z" fill="#e87140" stroke="#bc4c2a" strokeWidth="1.5" />
          <path d="m331 292 32-19v37l-32 19Z" fill="#d8582e" stroke="#bc4c2a" strokeWidth="1.5" />
          <path d="m314 265 32 18v37" stroke="#ffc69b" strokeWidth="2" fill="none" />
        </g>
        <path d="M332 220v28" stroke="#d65d34" strokeWidth="1.5" strokeDasharray="4 5" />
        <ellipse cx="331" cy="310" rx="54" ry="30" fill="none" stroke="#ce8b68" strokeDasharray="4 5" />
        <g fill="none" stroke="#9caa95" strokeWidth="1.5">
          <path d="m74 113 46 26 35-20" /><path d="m120 139 1-48" />
          <circle cx="120" cy="139" r="3" fill="#9caa95" />
        </g>
        <g className="caption-5" fill="#78856f"><text x="63" y="111">X</text><text x="159" y="119">Y</text><text x="117" y="83">Z</text></g>
        <path d="M353 166h74l24-24" fill="none" stroke="#819477" strokeWidth="1.5" />
        <circle cx="353" cy="166" r="3" fill="#819477" />
        <g className="caption-4" fill="#53664a"><text x="428" y="115">动作生成</text><text className="caption-5" x="428" y="135">ACTION POLICY</text></g>
        <path d="M345 306h73l22 22" fill="none" stroke="#c7805e" strokeWidth="1.5" />
        <circle cx="345" cy="306" r="3" fill="#c7805e" />
        <g className="caption-4" fill="#a95735"><text x="428" y="348">目标物体</text><text className="caption-5" x="428" y="368">TARGET OBJECT</text></g>
        <path d="M121 203h34M138 186v34" fill="none" stroke="#c1c9b7" strokeWidth="1" />
        <circle cx="486" cy="220" r="4" fill="#879b79" /><circle cx="486" cy="244" r="4" fill="#b0bda3" /><circle cx="486" cy="268" r="4" fill="#d3dac9" />
      </svg>
      <div className="scene-caption caption-4"><span>观察环境</span><span aria-hidden="true">→</span><span>理解任务</span><span aria-hidden="true">→</span><span>采取行动</span><span className="scene-online"><span className="signal-dot" />CLOSED LOOP</span></div>
    </div>
  );
}
