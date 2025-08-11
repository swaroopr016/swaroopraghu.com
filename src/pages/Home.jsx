import React from 'react'
import { motion } from 'framer-motion'
import {
  Code2, Palette, Dumbbell, Briefcase, Download, Linkedin, Mail,
  User, MessageSquare, GraduationCap, School, BookOpen, ShieldCheck,
  Cpu, Radio, Wifi, Microscope, Award, Layers
} from 'lucide-react'
import { Link } from 'react-router-dom'

// Assets
import portrait from '../assets/portrait.jpg'
import esbLogo from '../assets/logos/Esb.jpg'
import sonataLogo from '../assets/logos/sonata.jpg'
import mavenLogo from '../assets/logos/maven.jpg'
import aboutCorporate from '../assets/about-blueprint.jpg'

export default function Home(){
  // Typewriter intro
  const fullText = `I am a self-motivated, technology-driven professional with a deep passion for electronics, electrical systems, cybersecurity, and the Internet of Things. Backed by industry experience at ESB International and Sonata Software, I bring hardware-level precision and software-level execution to every project. An engineer by profession, an artist by passion, and a fitness enthusiast by choice. I am a relentlessly competitive individual committed to excellence in everything I do.`
  const [displayText, setDisplayText] = React.useState('')
  const [isTyping, setIsTyping] = React.useState(true)

  React.useEffect(() => {
    let i = 0
    const start = setTimeout(() => {
      const iv = setInterval(() => {
        i++
        setDisplayText(fullText.slice(0, i))
        if (i >= fullText.length){ clearInterval(iv); setIsTyping(false) }
      }, 18)
    }, 250)
    return () => clearTimeout(start)
  }, [])

  // Contact form handler (mailto fallback)
  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:swaroop.raghu11@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />

      {/* HERO */}
      <section id="home" className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6}}
            className="text-4xl md:text-6xl font-black leading-[1.05]">
            <span className="block text-blue-300">SWAROOP RAGHU</span>
          </motion.h1>

          <div className="mt-2 font-semibold tracking-wide text-sm md:text-base text-white/80">
            ENGINEER | ARTIST | FitBUILDER • B.E., M.Sc.
          </div>

          <p className="text-muted mt-5 text-base md:text-lg leading-relaxed text-justify">
            {displayText}{isTyping && <span className="border-r-2 border-blue-300 align-middle ml-1 animate-pulse">&nbsp;</span>}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="px-4 py-3 rounded-xl bg-gradient-to-r from-bluep to-cyanp text-[#00142a] font-semibold shadow-glow"
               href="/assets/Swaroop_Raghu_Master_Resume.pdf" download>
              <Download className="inline w-4 h-4 -mt-1 mr-2" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="reveal">
          <div className="relative h-[500px] w-full grid place-items-center">
            <img
              src={portrait}
              alt="Swaroop Raghu"
              className="w-72 h-72 rounded-full object-cover ring-4 ring-blue-300/70 shadow-glow"
            />
          </div>
        </div>
      </section>

      {/* FOUR BUTTONS */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-4 gap-4">
          <Link
            to="/engineering"
            className="card-light rounded-2xl p-5 group reveal hover:border-blue-400/40 hover:shadow-[0_0_20px_rgba(0,183,255,0.6)] hover:scale-[1.03] transition-transform duration-300 border border-white/10"
          >
            <Code2 className="w-6 h-6 mb-3 text-blue-300" />
            <div className="font-bold text-lg">Engineering</div>
            <div className="text-sm text-muted mt-1">VLSI, Embedded, Full-stack</div>
          </Link>
          <Link
            to="/art"
            className="card-light rounded-2xl p-5 group reveal hover:border-purple-400/40 hover:shadow-[0_0_20px_rgba(177,102,255,0.6)] hover:scale-[1.03] transition-transform duration-300 border border-white/10"
          >
            <Palette className="w-6 h-6 mb-3 text-purple-300" />
            <div className="font-bold text-lg">Art</div>
            <div className="text-sm text-muted mt-1">Portraits, 3D, design</div>
          </Link>
          <Link
            to="/fitness"
            className="card-light rounded-2xl p-5 group reveal hover:border-green-400/40 hover:shadow-[0_0_20px_rgba(0,255,153,0.6)] hover:scale-[1.03] transition-transform duration-300 border border-white/10"
          >
            <Dumbbell className="w-6 h-6 mb-3 text-green-300" />
            <div className="font-bold text-lg">Fitness</div>
            <div className="text-sm text-muted mt-1">12-week cut & macros</div>
          </Link>
          <Link
            to="/business"
            className="card-light rounded-2xl p-5 group reveal hover:border-orange-400/40 hover:shadow-[0_0_20px_rgba(255,179,0,0.6)] hover:scale-[1.03] transition-transform duration-300 border border-white/10"
          >
            <Briefcase className="w-6 h-6 mb-3 text-orange-300" />
            <div className="font-bold text-lg">Business</div>
            <div className="text-sm text-muted mt-1">Projects & ventures</div>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="border-l-4 border-bluep pl-3 text-blue-200">About Me</span>
            </h2>
            <div className="space-y-4 text-muted text-justify leading-relaxed">
              <p>From building enterprise-grade software at Sonata Software to securing critical infrastructure at ESB International, my journey blends engineering depth with creative fire.</p>
              <p>I progressed from intern to Senior Digital Designer, mastering full-stack development with Angular.js, MSSQL, and C#. I led backend innovation for clients such as <b>Danish Agro</b>.</p>
              <p>During my M.Sc. at TU Dublin, I strengthened my foundation in <b>VLSI design</b>, <b>SystemVerilog</b>, and <b>FPGA</b>, while expanding into Python, Linux, and embedded systems.</p>
              <p>I’m <b>Swaroop Raghu</b> — a technology-driven professional specializing in <b>Cybersecurity for Operational Technology (OT)</b>. With a multidisciplinary background spanning IoT Security, RTL/VLSI design, and full-stack development, I deliver secure, scalable solutions at the intersection of hardware and software.</p>
              <p>At ESB International, I help safeguard critical infrastructure by aligning cybersecurity strategy with deep technical insight across complex industrial environments.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              <div className="card-light rounded-2xl p-4">
                <div className="font-semibold">Strengths</div>
                <ul className="list-disc list-inside text-sm text-muted mt-1">
                  <li>OT Cybersecurity & secure systems</li>
                  <li>VLSI/FPGA • SystemVerilog • UVM</li>
                  <li>Full-stack (C#, ASP.NET Core, Angular.js)</li>
                </ul>
              </div>
              <div className="card-light rounded-2xl p-4">
                <div className="font-semibold">I’m currently focused on</div>
                <ul className="list-disc list-inside text-sm text-muted mt-1">
                  <li>Threat modeling for OT/ICS</li>
                  <li>Embedded hardening & secure comms</li>
                  <li>Performance-safe, testable UIs</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="badge">M.Sc. — TU Dublin</span>
              <span className="badge">ISC2 CC</span>
              <span className="badge">Dynamics 365</span>
              <span className="badge">Python • C# • SV</span>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="reveal">
            <div className="rounded-3xl overflow-hidden border border-white/10 relative">
              <img src={aboutCorporate} alt="Systems blueprint" className="w-full h-[760px] object-cover opacity-90" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
              <div className="absolute -inset-10 bg-gradient-to-br from-bluep/10 to-cyanp/5 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative container mx-auto px-4 py-16">
        <div className="bg-experience"></div>

        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="border-l-4 border-bluep pl-3 text-blue-200">Professional Experience</span>
          </h2>
          <ExperienceTimeline />
        </div>

        <h3 className="text-xl font-bold mb-4 mt-8">Internships</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card-light rounded-2xl p-5">
            <div className="font-semibold">Elecsis Pvt Ltd — Intern</div>
            <div className="text-sm text-muted">Bangalore, India • Jan 2020 – Mar 2020</div>
            <ul className="list-disc list-inside text-muted mt-2 text-sm space-y-1">
              <li>Electronics circuit design & embedded development workflows.</li>
              <li>Assisted real-time system implementation & schematic testing.</li>
            </ul>
          </div>
          <div className="card-light rounded-2xl p-5">
            <div className="font-semibold">Appslucent Software Pvt Ltd — Intern</div>
            <div className="text-sm text-muted">Bangalore, India • Aug 2019 – Oct 2019</div>
            <ul className="list-disc list-inside text-muted mt-2 text-sm space-y-1">
              <li>Web dev using HTML, CSS, JS, and Python.</li>
              <li>Supported UI implementation & backend integration.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative container mx-auto px-4 py-16">
        <div className="absolute inset-0 opacity-[.08] pointer-events-none -z-10"
             style={{ background: "url(/assets/bg-education.png) center/cover no-repeat" }} />

        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="border-l-4 border-bluep pl-3 text-blue-200">Education & Certifications</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Degrees Timeline */}
          <div className="relative pl-10">
            <div className="timeline-line" />

            <EduItem
              icon={<GraduationCap className="w-5 h-5" />}
              title="Technological University Dublin (TU Dublin)"
              subtitle="MSc – Electronics & Communications"
              meta="Dublin, Ireland • 2023 – 2024"
              chips={["Network Security","VLSI","RF & Microwave","Secure IoT"]}
              bullets={[
                "Key Modules: VLSI Design, Optoelectronics, Microwave & RF, Wireless Comms, Network Security, Nanoelectronics.",
                "Dissertation: Advanced VLSI-based 5×1 router."
              ]}
              glow="hover:shadow-[0_0_24px_rgba(0,183,255,.35)]"
              border="border-blue-400/40"
            />

            <EduItem
              icon={<School className="w-5 h-5" />}
              title="Rajarajeswari College of Engineering (RRCE)"
              subtitle="BE – Electronics & Communication Engineering"
              meta="Bangalore, India • 2016 – 2020"
              chips={["Digital/Analog","Embedded","Automation"]}
              bullets={[
                "Project-based learning in digital & analog electronics, electrical & embedded systems, automation.",
                "Final Project: Smart Indoor Vertical Gardening using IoT systems."
              ]}
              glow="hover:shadow-[0_0_24px_rgba(177,102,255,.28)]"
              border="border-purple-400/40"
            />

            <EduItem
              icon={<BookOpen className="w-5 h-5" />}
              title="Jnanodaya PU College"
              subtitle="Pre-University – PCME"
              meta="Bangalore, India • 2014 – 2016"
              chips={["Physics","Chemistry","Maths","Electronics"]}
              bullets={[
                "Focused on competitive exam prep for engineering streams."
              ]}
              glow="hover:shadow-[0_0_24px_rgba(16,181,216,.28)]"
              border="border-cyan-400/40"
            />

            <EduItem
              icon={<Layers className="w-5 h-5" />}
              title="N.E.T. Public School"
              subtitle="High School"
              meta="Bangalore, India • Graduated 2014"
              chips={["97% Overall","State Rank"]}
              bullets={[
                "Strong foundation in core subjects; recognized for discipline & academic excellence."
              ]}
              glow="hover:shadow-[0_0_24px_rgba(255,179,0,.25)]"
              border="border-orange-400/40"
            />
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <CertCard
              icon={<ShieldCheck className="w-5 h-5" />}
              title="Certified in Cybersecurity (CC) — ISC2"
              meta="Issued Sep 2024 • Expires Sep 2027"
              id="ac3eb0d4-a2f3-41e0-bff1-47ae19843469"
              topics={["Cybersecurity fundamentals","Access control","Risk management"]}
              color="green"
            />
            <CertCard
              icon={<Cpu className="w-5 h-5" />}
              title="Diploma in Full Stack Web Development — NIIT"
              meta="Bangalore, India • 2020"
              topics={["Programming in C","Front-end basics"]}
              color="purple"
            />
            <CertCard
              icon={<Award className="w-5 h-5" />}
              title="AWS Node Runners for BNB Chain — Binance Academy"
              meta="Issued Feb 2025"
              id="51bd462f925f9fede678b13a631da7c1a1dc0c693e1847b7e65d8d372d100f37"
              topics={["Blockchain nodes","DevOps","AWS infrastructure"]}
              color="orange"
            />
            <CertCard
              icon={<Microscope className="w-5 h-5" />}
              title="Programming in C — NIIT Technologies"
              topics={["Loops & arrays","Memory management","Core C"]}
              color="cyan"
            />
            <CertCard
              icon={<Wifi className="w-5 h-5" />}
              title="Python Development — PySpiders"
              topics={["HTML/SQL/Android basics","Python scripting & debugging","Automation for backend systems","Testing & data parsing"]}
              color="blue"
            />
            <CertCard
              icon={<Radio className="w-5 h-5" />}
              title="Networking & Cloud Computing — Appslucent"
              topics={["Cloud infrastructure","Basic networking","Mobile systems"]}
              color="purple"
            />
            <CertCard
              icon={<BookOpen className="w-5 h-5" />}
              title="Web Development — Appslucent"
              topics={["Web testing","HTML/CSS/JS integration","Backend functionality basics"]}
              color="orange"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
        <section id="contact" className="container mx-auto px-4 pb-24 bg-blue-400/10 rounded-3xl shadow-[0_0_20px_rgba(0,183,255,0.2)] border border-blue-400/20">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="card-light p-6 rounded-2xl space-y-4 border border-blue-400/10 hover:border-blue-400/30 hover:shadow-[0_0_18px_rgba(30,94,255,0.3)] transition"
          >
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-3 text-blue-300" />
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full pl-10 rounded-xl bg-[#0b1326] border border-white/10 px-3 py-2 outline-none focus:border-bluep transition"
                required
              />
            </div>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-3 text-blue-300" />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full pl-10 rounded-xl bg-[#0b1326] border border-white/10 px-3 py-2 outline-none focus:border-bluep transition"
                required
              />
            </div>
            <div className="relative">
              <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-blue-300" />
              <textarea
                name="message"
                rows="5"
                placeholder="Your message"
                className="w-full pl-10 rounded-xl bg-[#0b1326] border border-white/10 px-3 py-2 outline-none focus:border-bluep transition"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-3 rounded-xl bg-gradient-to-r from-bluep to-cyanp text-[#00142a] font-semibold shadow-glow hover:scale-[1.03] transition-transform"
            >
              Send Message
            </button>
          </form>

          {/* Quick Links */}
          <div className="card-light p-6 rounded-2xl border border-cyan-400/10 hover:border-cyan-400/30 hover:shadow-[0_0_18px_rgba(0,255,255,0.25)] transition">
            <p className="text-muted mb-4">Prefer quick links?</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:swaroop.raghu11@gmail.com"
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 hover:scale-[1.02] transition inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/swaroop-raghu"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 hover:scale-[1.02] transition inline-flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ===== Helper components BELOW the main component ===== */

function ExperienceTimeline(){
  const expRef = React.useRef(null)
  const [sparkTop, setSparkTop] = React.useState(0)

  React.useEffect(()=>{
    const onScroll = () => {
      const el = expRef.current
      if(!el) return
      const line = el.querySelector('.timeline-line')
      if(!line) return
      const rect = el.getBoundingClientRect()
      const h = rect.height || 1
      const viewport = Math.min(window.innerHeight, h)
      let p = 0
      if (rect.top < viewport && rect.bottom > 0) {
        const visibleTop = Math.max(0, -rect.top)
        p = Math.min(1, (visibleTop + viewport*0.4) / h)
      }
      setSparkTop(p * (line.clientHeight - 10))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  },[])

  const experiences = [
    {
      company: "ESB International",
      role: "Electronics & Electrical Engineer",
      location: "Dublin, Ireland",
      duration: "Sep 2024 – Present",
      logo: esbLogo,
      glow: "hover:shadow-[0_0_20px_rgba(0,183,255,.35)]",
      border: "border-blue-400/50",
      badges: ["SCADA/NMS","Cyber Audits","Python"],
      points: [
        "Working in the Network Operations team, enhancing SCADA/NMS system security.",
        "Involved in cybersecurity audits, hardening procedures, and automation tasks.",
        "Developed automation scripts in Python for data validation and log parsing."
      ],
      more: []
    },
    {
      company: "Sonata Software Ltd",
      role: "Senior Digital Engineer",
      location: "Bangalore, India",
      duration: "Jan 2021 – Aug 2023",
      logo: sonataLogo,
      glow: "hover:shadow-[0_0_20px_rgba(177,102,255,.35)]",
      border: "border-purple-400/50",
      badges: ["C#","ASP.NET Core","Angular.js","Azure DevOps","MSSQL"],
      points: [
        "Full-stack developer in Microsoft D365 and Danish Agro projects.",
        "Worked with C#, MSSQL, ASP.NET Core, Angular.js, and Azure DevOps.",
        "Handled both backend APIs and front-end implementation, debugging complex modules."
      ],
      more: []
    },
    {
      company: "Maven Silicon",
      role: "Engineering Trainee",
      location: "Bangalore, India",
      duration: "Aug 2022 – Aug 2023",
      logo: mavenLogo,
      glow: "hover:shadow-[0_0_20px_rgba(16,181,216,.35)]",
      border: "border-cyan-400/50",
      badges: ["SystemVerilog","UVM","FPGA"],
      points: [
        "Certified in VLSI Design and Verification (SystemVerilog & UVM).",
        "Worked on RTL design, FPGA prototyping, and Synopsys tools."
      ],
      more: []
    }
  ]

  return (
    <div ref={expRef} className="relative pl-12">
      <div className="timeline-line" />
      <div className="spark" style={{ top: sparkTop }} />
      {experiences.map((exp, idx)=>(
        <ExpCard key={idx} exp={exp} />
      ))}
    </div>
  )
}

function ExpCard({ exp }){
  const [open, setOpen] = React.useState(false)
  const caseStudyHref = `/assets/case-studies/${(exp.company || 'role').toLowerCase().replace(/[^a-z0-9]+/g,'-')}.pdf`

  return (
    <div className="mb-10 relative group">
      {/* Logo circle */}
      <div className={`absolute -left-12 top-1 w-8 h-8 rounded-full bg-[#0b1326] ${exp.border} border grid place-items-center shadow-glow overflow-hidden`}>
        <img
          src={exp.logo}
          alt={exp.company}
          className="w-8 h-8 object-contain logo"
          onError={(e)=>{e.currentTarget.style.display='none'}}
        />
        <span className="text-[10px] text-blue-200 font-bold">
          {!exp.logo && (exp.company || 'XX').slice(0,2).toUpperCase()}
        </span>
      </div>

      {/* Content */}
      <div className={`card rounded-2xl p-5 transition transform ${exp.glow} hover:scale-[1.01]`}>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <div className="text-lg font-bold">{exp.company}</div>
            <div className="text-blue-300 font-semibold">{exp.role}</div>
          </div>
          <div className="text-sm text-muted">{exp.location} • {exp.duration}</div>
        </div>

        <ul className="mt-2 list-disc list-inside text-muted space-y-1">
          {exp.points.map((p,i)=> <li key={i}>{p}</li>)}
          {open && exp.more?.map((p,i)=> <li key={`m-${i}`}>{p}</li>)}
        </ul>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {exp.badges.map((b,i)=> <span key={i} className="badge">{b}</span>)}
          <span className="flex-1" />
          {exp.more && exp.more.length > 0 && (
            <button
              onClick={()=>setOpen(v=>!v)}
              className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15 text-sm"
            >
              {open ? 'Show less' : 'Read more'}
            </button>
          )}
          <a
            href={caseStudyHref}
            target="_blank" rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-bluep to-cyanp text-[#00142a] font-semibold shadow-glow text-sm"
            onClick={(e)=>{
              fetch(caseStudyHref, { method: 'HEAD' }).then(r=>{
                if(!r.ok){ e.preventDefault(); alert('Upload your case study PDF to public/assets/case-studies/ to enable this.') }
              }).catch(()=>{ e.preventDefault(); alert('Upload your case study PDF to public/assets/case-studies/.') })
            }}
          >
            Download case study
          </a>
        </div>
      </div>
    </div>
  )
}

/* ===== Reusable Education components ===== */

function EduItem({ icon, title, subtitle, meta, chips=[], bullets=[], glow="", border="" }){
  return (
    <div className="mb-6 relative group">
      {/* timeline dot */}
      <div className={`absolute -left-12 top-2 w-8 h-8 rounded-full bg-[#0b1326] ${border} border grid place-items-center shadow-glow`}>
        {icon}
      </div>

      <div className={`card rounded-2xl p-5 transition ${glow} hover:scale-[1.01]`}>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-blue-300 font-semibold">{subtitle}</div>
          </div>
          <div className="text-sm text-muted">{meta}</div>
        </div>

        {bullets?.length > 0 && (
          <ul className="mt-2 list-disc list-inside text-muted space-y-1">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}

        {chips?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {chips.map((c,i)=> <span key={i} className="badge">{c}</span>)}
          </div>
        )}
      </div>
    </div>
  )
}

function CertCard({ icon, title, meta, id, topics = [], color = "blue" }) {
  const [open, setOpen] = React.useState(false)

  // Clean color styles (separate border/text/hover)
  const colorStyles = {
    blue:   { border: "border-blue-400/40",  text: "text-blue-200",   shadow: "hover:shadow-[0_0_18px_rgba(30,94,255,.35)]" },
    green:  { border: "border-green-400/40", text: "text-green-200",  shadow: "hover:shadow-[0_0_18px_rgba(0,200,150,.35)]" },
    purple: { border: "border-purple-400/40",text: "text-purple-200", shadow: "hover:shadow-[0_0_18px_rgba(177,102,255,.35)]" },
    orange: { border: "border-orange-400/40",text: "text-orange-200", shadow: "hover:shadow-[0_0_18px_rgba(255,179,0,.35)]" },
    cyan:   { border: "border-cyan-400/40",  text: "text-cyan-200",   shadow: "hover:shadow-[0_0_18px_rgba(0,255,255,.35)]" },
  }
  const c = colorStyles[color] ?? colorStyles.blue

  return (
    <div className={`card rounded-2xl p-5 border-l-4 ${c.border} ${c.shadow} transition`}>
      <div className="flex items-start gap-3">
        <div className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center ${c.text}`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="font-semibold">{title}</div>
          {meta && <div className="text-sm text-muted">{meta}</div>}
          {id && <div className="text-xs text-muted/70 mt-1">Credential ID: {id}</div>}

          {topics.length > 0 && (
            <>
              <button
                onClick={() => setOpen(v => !v)}
                className="mt-2 text-xs px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15 transition"
              >
                {open ? 'Hide details' : 'Show details'}
              </button>
              {open && (
                <ul className="mt-3 list-disc list-inside text-sm text-muted space-y-1">
                  {topics.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
