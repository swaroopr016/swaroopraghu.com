import React from "react"

function LangBar({ name, level = 100 }) {
  return (
    <div>
      <div className="text-sm font-semibold mb-1">{name}</div>
      <div className="h-2.5 rounded-full bg-white/10 border border-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-bluep to-cyanp"
          style={{ width: `${Math.max(0, Math.min(100, level))}%` }}
        />
      </div>
    </div>
  )
}

export default function Languages({ items = [] }) {
  return (
    <div className="card rounded-2xl p-5">
      <div className="font-bold mb-4">Languages</div>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((it, i)=>(
          <LangBar key={i} name={it.name} level={it.level} />
        ))}
      </div>
      <div className="text-xs text-muted mt-3">* Level shown as % proficiency (self-rated).</div>
    </div>
  )
}
