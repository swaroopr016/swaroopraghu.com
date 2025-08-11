import React from 'react'
import { Mail } from 'lucide-react'

export default function ContactFAB(){
  return (
    <a
      href="mailto:swaroop.raghu11@gmail.com"
      className="fixed left-4 bottom-4 group z-50"
      title="Contact me"
    >
      <div className="relative">
        <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-bluep to-cyanp opacity-40 blur-xl group-hover:opacity-60 transition"></div>
        <div className="w-14 h-14 rounded-full bg-[#0b1326] border border-white/10 grid place-items-center shadow-glow">
          <Mail className="w-6 h-6 text-blue-200" />
        </div>
      </div>
    </a>
  )
}
