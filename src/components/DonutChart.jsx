import React from "react"

export default function DonutChart({
  size = 200,
  thickness = 22,
  data = [],              // [{ label, value, color }]
  title = "Skills",
  subtitle = "",
}) {
  const total = data.reduce((s,d)=>s + (d.value||0), 0) || 1
  const R = (size - thickness) / 2
  const C = size / 2
  const CIRC = 2 * Math.PI * R

  let offset = 0
  const arcs = data.map((d, i) => {
    const frac = (d.value || 0) / total
    const dash = CIRC * frac
    const seg = (
      <circle
        key={i}
        cx={C}
        cy={C}
        r={R}
        fill="none"
        stroke={d.color || "#60a5fa"} // fallback blue-400
        strokeWidth={thickness}
        strokeDasharray={`${dash} ${CIRC - dash}`}
        strokeDashoffset={-offset}
        strokeLinecap="butt"
        transform={`rotate(-90 ${C} ${C})`}
      />
    )
    offset += dash
    return seg
  })

  return (
    <div className="card rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="font-bold">{title}</div>
          {subtitle && <div className="text-sm text-muted">{subtitle}</div>}
        </div>
        <div className="text-sm text-muted">Total: {total}</div>
      </div>

      <div className="grid md:grid-cols-[auto_1fr] gap-5 items-center">
        <svg width={size} height={size}>
          {/* track */}
          <circle
            cx={C}
            cy={C}
            r={R}
            fill="none"
            stroke="rgba(255,255,255,.08)"
            strokeWidth={thickness}
          />
          {arcs}
          {/* center label */}
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
                className="fill-[#e6f0ff]" style={{fontWeight:700, fontSize:18}}>
            {title}
          </text>
        </svg>

        <ul className="space-y-2">
          {data.map((d,i)=>(
            <li key={i} className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded"
                    style={{ background: d.color || "#60a5fa" }} />
              <div className="flex-1">
                <div className="text-sm font-medium">{d.label}</div>
                <div className="text-xs text-muted">{d.value}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
