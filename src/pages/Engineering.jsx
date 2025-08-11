import React from "react"
import { motion } from "framer-motion"
import {
  Briefcase, GraduationCap, ShieldCheck, Award, FolderGit2, Medal,
  Building2, Calendar, MapPin, Cpu, Layers, BookOpen, Radio, Microscope, Wifi
} from "lucide-react"

// Logos you already have
import esbLogo from "../assets/logos/Esb.jpg"
import sonataLogo from "../assets/logos/sonata.jpg"
import mavenLogo from "../assets/logos/maven.jpg"
import { Cloud, Wrench, Code } from "lucide-react"
import DonutChart from "../components/DonutChart.jsx"
import Languages from "../components/Languages.jsx"

export default function Engineering(){
  // ---- Tab routing (hash) ----
  const tabs = ["experience","education","certifications","projects","achievements"]
  const [active, setActive] = React.useState(() => cleanHash(window.location.hash) || "experience")
  React.useEffect(()=>{
    const onHash = () => setActive(cleanHash(window.location.hash) || "experience")
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  },[])
  function cleanHash(h){ return (h || "").replace("#","") }

  const setTab = (key) => {
    setActive(key)
    // smooth scroll to section
    const el = document.getElementById(key)
    if(el) el.scrollIntoView({ behavior:"smooth", block:"start" })
    // update hash
    history.replaceState(null, "", `#${key}`)
  }

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />

      {/* HERO */}
      <section className="container mx-auto px-4 pt-10 pb-6">
        <motion.h1
          initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.5}}
          className="text-4xl md:text-5xl font-black"
        >
          Engineering
        </motion.h1>
        <p className="text-muted mt-2">
          OT cybersecurity • SCADA/NMS • Full-stack Dev • VLSI/FPGA — curated work, proofs, and wins.
        </p>
      </section>

      {/* Sticky Tabs */}
      <div className="sticky top-0 z-20 bg-[#050915]/80 backdrop-blur-md border-b border-white/5">
        <nav className="container mx-auto px-4 py-3 flex flex-wrap gap-2">
          {tabs.map(t => (
            <button
              key={t}
              onClick={()=>setTab(t)}
              className={`btn-pill px-4 py-2 text-sm transition ${
                active===t ? "bg-white/15 border-white/20" : "hover:bg-white/10"
              }`}
            >
              {iconForTab(t)} <span className="ml-2 capitalize">{t}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* EXPERIENCE */}
      <Section id="experience" title="Professional Experience" icon={<Briefcase className="w-5 h-5 text-blue-300" />}>
        <Timeline items={EXPERIENCE}/>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education" icon={<GraduationCap className="w-5 h-5 text-purple-300" />}>
        <div className="relative pl-10">
          <div className="timeline-line" />
          {EDU.map((e,i)=>(
            <div key={i} className="mb-6 relative group">
              <div className={`absolute -left-12 top-2 w-8 h-8 rounded-full bg-[#0b1326] border border-purple-400/50 grid place-items-center shadow-glow`}>
                {e.icon}
              </div>
              <div className="card rounded-2xl p-5 hover:scale-[1.01] transition">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <div className="font-bold">{e.title}</div>
                    <div className="text-purple-200 font-semibold">{e.subtitle}</div>
                  </div>
                  <div className="text-sm text-muted flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {e.meta}
                  </div>
                </div>
                <ul className="mt-3 list-disc list-inside text-muted space-y-1">
                  {e.points.map((p,idx)=><li key={idx}>{p}</li>)}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {e.tags.map((t,idx)=><span key={idx} className="badge">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications" title="Certifications" icon={<ShieldCheck className="w-5 h-5 text-green-300" />}>
        <div className="grid md:grid-cols-2 gap-4">
          {CERTS.map((c,i)=>(
            <div key={i} className={`card-light rounded-2xl p-5 ${c.pulse ? "card-light--pulse" : ""}`}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">{c.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-muted">{c.meta}</div>
                  {c.id && <div className="text-xs text-muted/70 mt-1">Credential ID: {c.id}</div>}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.topics.map((t,idx)=><span key={idx} className="badge">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Selected Projects" icon={<FolderGit2 className="w-5 h-5 text-cyan-300" />}>
        <div className="grid md:grid-cols-2 gap-4">
          {PROJECTS.map((p,i)=>(
            <div key={i} className="card rounded-2xl p-5 hover:shadow-glow transition group">
              <div className="flex items-center justify-between">
                <div className="font-bold">{p.title}</div>
                <span className="text-xs text-muted flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {p.when}
                </span>
              </div>
              <p className="text-muted mt-2">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t,idx)=><span key={idx} className="badge">{t}</span>)}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer"
                   className="inline-block mt-3 text-sm underline decoration-dotted text-blue-200">
                  View case study
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>
{/* SKILLS & LANGUAGES */}
<Section id="skills" title="Skills & Languages" icon={<Briefcase className="w-5 h-5 text-cyan-300" />}>
  <div className="grid md:grid-cols-2 gap-4">
    <DonutChart
      title="Skill Mix"
      subtitle="IT • OT • VLSI • Cyber"
      data={[
        { label: "IT / Full-stack", value: 30, color: "#60a5fa" },  // blue-400
        { label: "OT / SCADA",     value: 25, color: "#22d3ee" },  // cyan-400
        { label: "VLSI / FPGA",    value: 20, color: "#a78bfa" },  // violet-400
        { label: "Cybersecurity",  value: 25, color: "#34d399" },  // emerald-400
      ]}
    />
    <Languages
      items={[
        { name: "English",  level: 100 },
        { name: "Hindi",    level: 100 },
        { name: "Spanish",  level: 60 },
        { name: "Kannada",  level: 100 },
        
      ]}
    />
  </div>
</Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements" title="Other Achievements" icon={<Medal className="w-5 h-5 text-orange-300" />}>
        <div className="grid md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((a,i)=>(
            <div key={i} className="card rounded-2xl p-5 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                <Award className="w-5 h-5 text-orange-300" />
              </div>
              <div>
                <div className="font-semibold">{a.title}</div>
                <div className="text-sm text-muted">{a.meta}</div>
                {a.tags?.length>0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {a.tags.map((t,idx)=><span key={idx} className="badge">{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}

/* ---------- Data ---------- */

const EXPERIENCE = [
  {
    company: "ESB International",
    role: "Electronics & Electrical Engineer",
    when: "Sep 2024 – Present",
    where: "Dublin, Ireland",
    logo: esbLogo,
    points: [
      "Network Operations: improving SCADA/NMS security posture.",
      "Cybersecurity operations, hardening, and automation.",
      "Python tooling for data validation and log parsing, Penetration testing"
    ],
    tags: ["SCADA/NMS","Cyber Ops","Python"]
  },
  {
    company: "Sonata Software Ltd",
    role: "Senior Digital Engineer",
    when: "Jan 2021 – Aug 2023",
    where: "Bangalore, India",
    logo: sonataLogo,
    points: [
      "Full-stack dev across D365 & ERP for Danish Agro project.",
      "C#, MSSQL, ASP.NET Core, Angular.js, Azure DevOps.",
      "API + UI delivery; debugging complex modules."
    ],
    tags: ["C#","ASP.NET Core","Angular.js","Azure DevOps","MSSQL"]
  },
  {
    company: "Maven Silicon",
    role: "Engineering Trainee",
    when: "Aug 2022 – Aug 2023",
    where: "Bangalore, India",
    logo: mavenLogo,
    points: [
      "VLSI Design & Verification (SystemVerilog/UVM).",
      "RTL design, FPGA prototyping, Synopsys tools."
    ],
    tags: ["SystemVerilog","UVM","FPGA"]
  },
]

const EDU = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Technological University Dublin (TU Dublin)",
    subtitle: "MSc – Electronics & Communications",
    meta: "Dublin, Ireland • 2023 – 2024",
    points:[
      "Key Modules: VLSI Design, Optoelectronics, Microwave & RF, Wireless Comms, Network Security, Nanoelectronics.",
      "Dissertation: Advanced VLSI-based 5×1 router."
    ],
    tags:["Network Security","VLSI","RF & Microwave","Secure IoT"],
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Rajarajeswari College of Engineering (RRCE)",
    subtitle: "BE – Electronics & Communication",
    meta: "Bangalore, India • 2016 – 2020",
    points:[
      "Project-based learning in digital/analog, embedded, and automation.",
      "Final Project: Smart Indoor Vertical Gardening using IoT."
    ],
    tags:["Digital/Analog","Embedded","Automation"],
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Jnanodaya PU College",
    subtitle: "Pre-University – PCME",
    meta: "Bangalore, India • 2014 – 2016",
    points:["Competitive exam prep for engineering streams."],
    tags:["Physics","Chemistry","Maths","Electronics"],
  },
]

const CERTS = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-green-300" />,
    title: "Certified in Cybersecurity (CC) — ISC2",
    meta: "Issued Sep 2024 • Expires Sep 2027",
    id: "ac3eb0d4-a2f3-41e0-bff1-47ae19843469",
    topics: ["Cybersecurity fundamentals", "Access control", "Risk management"],
    pulse: true
  },
  {
    icon: <Radio className="w-5 h-5 text-orange-200" />,
    title: "AWS Node Runners for BNB Chain — Binance Academy",
    meta: "Issued Feb 2025",
    id: "51bd462f925f9fede678b13a631da7c1a1dc0c693e1847b7e65d8d372d100f37",
    topics: ["Blockchain nodes", "DevOps", "AWS infra"]
  },
  {
    icon: <Microscope className="w-5 h-5 text-pink-300" />,
    title: "Advanced VLSI Design and Verification — Maven Silicon",
    meta: "Issued Feb 2023",
    topics: ["VLSI Design", "FPGA", "UVM", "Static Timing Analysis"]
  },
  {
    icon: <Wifi className="w-5 h-5 text-blue-300" />,
    title: "Python Full Stack Development — PySpiders",
    topics: ["Python scripting", "Debugging", "MongoDB", "Automation", "Android Dev"]
  },  {
    icon: <Code className="w-5 h-5 text-purple-300" />,
    title: "Linux Fundamentals — Sonata Software",
    topics: ["Linux OS", "Navigation", "Kernel"]
  },
  {
    icon: <Microscope className="w-5 h-5 text-cyan-300" />,
    title: "Programming in C — NIIT Technologies",
    meta: "Issued 2016",
    topics: ["Loops & arrays", "Memory management", "Core C language"]
  },
  {
    icon: <Cloud className="w-5 h-5 text-sky-300" />,
    title: "Networking and Cloud Computing — Appslucent Software Pvt Ltd",
    meta: "Issued 2019",
    topics: ["Amazon EC2 Console", "Cloud infrastructure", "Networking basics", "Mobile systems"]
  },
  {
    icon: <Wrench className="w-5 h-5 text-yellow-300" />,
    title: "CompTIA A+ — Appslucent Software Pvt Ltd",
    meta: "Issued 2018",
    topics: ["IT fundamentals", "Hardware/software troubleshooting", "OS installation", "Networking basics"]
  },
  {
    icon: <Code className="w-5 h-5 text-purple-300" />,
    title: "Web Development — Appslucent Software Pvt Ltd",
    topics: ["Web testing", "HTML/CSS/JS integration", "Backend basics"]
  }

]

const PROJECTS = [
  {
    title: "VLSI Router 1×5 — Design & Verification",
    when: "Dec 2023 – Sep 2024",
    org: "Technological University Dublin",
    desc: "MSc thesis: performance-safe, scalable 5×1 router. Implemented robust arbitration, power awareness and verification strategy to ensure reliability.",
    stack: ["SystemVerilog", "UVM", "RTL", "Synthesis", "Network Design"]
  },
  {
    title: "AHB2APB Bridge IP Core Design",
    when: "2023",
    desc: "Designed an AMBA AHB-slave bridge that interfaces to APB. Focused on protocol correctness, timing and SoC integration.",
    stack: ["AMBA AHB/APB", "RTL", "FPGA", "Verification"]
  },
  {
    title: "AXI Slave UVC — AMBA AX4 Protocol Verification",
    when: "2023",
    desc: "Built a reusable AXI-slave UVC for verification IP; drove functional coverage and protocol checks for AXI transactions.",
    stack: ["AXI", "UVM", "SystemVerilog", "Coverage"]
  },
  {
    title: "Router 1×3 — RTL Design & Verification",
    when: "2022",
    desc: "Implemented 1×3 packet router; generated functional+code coverage and synthesized the design as a baseline for 1×5.",
    stack: ["RTL", "SystemVerilog", "UVM", "Synthesis"]
  },
  {
    title: "UART — IP Core Verification",
    when: "2022",
    desc: "Verified UART IP core behavior under edge cases, baud mismatches and reset conditions with self-checking testbench.",
    stack: ["UVM", "SystemVerilog", "Assertions"]
  },
  {
    title: "Mini PC using Raspberry Pi",
    when: "2020",
    desc: "Built a portable Linux desktop on Raspberry Pi (Debian). Hands-on with device setup, packaging and UX hardening.",
    stack: ["Raspberry Pi", "Linux", "Python"]
  },
  {
    title: "Quadcopter Drone using KK2.1.5 Controller",
    when: "2019",
    desc: "End-to-end build: electrical, mechanical and aerodynamic tuning; low-cost multi-functional quadcopter platform.",
    stack: ["Embedded", "Electrical Design", "Mechanical Design"]
  },
  {
    title: "Smart Indoor Vertical Farming (IoT)",
    when: "2019–2020",
    org: "RRCE",
    desc: "LPC2148-based controller with sensors & relays; Android app; research published in IJAST & ICACT.",
    stack: ["Embedded C", "IoT", "Android", "Sensors"]
  }
]


const ACHIEVEMENTS = [
  { title:"First Prize — Drone Project", meta:"College competition • RRCE", tags:["Quadcopter","Team Lead"] },
  { title:"Full-stack & Azure DevOps Training", meta:"Sonata Software Ltd", tags:["D365","DevOps"] },
  { title:"State Rank — SSLC (97%)", meta:"N.E.T. Public School", tags:["Academic Excellence"] },
]

/* ---------- Small components ---------- */

function Section({ id, title, icon, children }){
  return (
    <section id={id} className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
        {icon} <span>{title}</span>
      </h2>
      {children}
    </section>
  )
}

function Timeline({ items }){
  return (
    <div className="relative pl-10">
      <div className="timeline-line" />
      {items.map((it,idx)=>(
        <div key={idx} className="mb-8 relative group">
          <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-[#0b1326] border border-blue-400/50 grid place-items-center shadow-glow overflow-hidden">
            <img src={it.logo} alt={it.company} className="w-8 h-8 object-contain logo" />
          </div>

          <div className="card rounded-2xl p-5 hover:scale-[1.01] transition">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="text-lg font-bold">{it.company}</div>
                <div className="text-blue-300 font-semibold">{it.role}</div>
              </div>
              <div className="text-sm text-muted flex items-center gap-3">
                <MapPin className="w-4 h-4" /> {it.where}
                <span className="opacity-60">•</span>
                <Calendar className="w-4 h-4" /> {it.when}
              </div>
            </div>

            <ul className="mt-2 list-disc list-inside text-muted space-y-1">
              {it.points.map((p,i)=><li key={i}>{p}</li>)}
            </ul>

            <div className="mt-3 flex flex-wrap gap-2">
              {it.tags.map((t,i)=><span key={i} className="badge">{t}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function iconForTab(key){
  switch(key){
    case "experience": return <Briefcase className="w-4 h-4" />
    case "education": return <GraduationCap className="w-4 h-4" />
    case "certifications": return <ShieldCheck className="w-4 h-4" />
    case "projects": return <FolderGit2 className="w-4 h-4" />
    case "achievements": return <Medal className="w-4 h-4" />
    default: return null
  }
}
