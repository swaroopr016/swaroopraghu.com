// src/pages/Fitness.jsx
import React from "react"
import { motion } from "framer-motion"
import {
  Dumbbell, Flame, Salad, ClipboardList, Clock, BadgeCheck, CheckCircle2, PlayCircle
} from "lucide-react"

// --- Image imports from src/assets/fitness ---
import hero from "../assets/fitness/hero-ultrafit.jpg"
import programCut from "../assets/fitness/program-cut.jpg"
import programHypertrophy from "../assets/fitness/program-hypertrophy.jpg"
import programAthletic from "../assets/fitness/program-athletic.jpg"

function FitnessAbout(){
  return (
    <section id="about" className="container mx-auto px-4 pt-2 pb-10">
      <div className="card rounded-2xl p-6 md:p-8 border-emerald-400/20">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-2">
          About <span className="text-emerald-300">SR Aesthetics</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-3 text-muted">
            <p>
              I’ve been training since <b>2015</b> — nearly a decade of lifting,
              cutting, bulking, and testing what actually works in the real world.
              SR Aesthetics is the distillation of that experience: <b>simple programs</b>,
              <b> dialed nutrition</b>, and <b>consistent execution</b>.
            </p>
            <p>
              I’m currently pursuing a <b>fitness coaching certification</b> to formalize
              my coaching methodology. Until that’s complete, I keep the focus on
              evidence-based training, clean technique, and habits that stick.
            </p>
            <p>
              If you want results without the fluff — welcome. We’ll set targets,
              track the numbers, and iterate weekly.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-4">
              <div className="text-xs text-emerald-200">Started</div>
              <div className="text-xl font-bold mt-1 text-emerald-200">2015</div>
            </div>
            <div className="rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-4">
              <div className="text-xs text-emerald-200">Focus</div>
              <div className="text-xl font-bold mt-1 text-emerald-200">Strength • Aesthetics • Mobility</div>
            </div>
            <div className="rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-4">
              <div className="text-xs text-emerald-200">Style</div>
              <div className="text-xl font-bold mt-1 text-emerald-200">Progressive Overload • Form First</div>
            </div>
            <div className="rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-4">
              <div className="text-xs text-emerald-200">Coaching</div>
              <div className="text-xl font-bold mt-1 text-emerald-200">1:1 check-ins • Video feedback</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Fitness(){
  return (
    <main className="relative overflow-hidden fitness-green">
      {/* subtle green aura */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_20%,rgba(16,185,129,.18),transparent_60%),radial-gradient(50%_35%_at_80%_0%,rgba(163,230,53,.16),transparent_60%)]" />
      </div>

      {/* HERO */}
      <section className="container mx-auto px-4 pt-12 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.5}}
              className="text-4xl md:text-5xl font-black leading-tight"
            >
              SR Aesthetics <span className="text-emerald-300">— by Swaroop</span>
            </motion.h1>
            <p className="text-muted mt-3">
              High-performance training, smart nutrition, and ruthless consistency. Build lean muscle,
              strip fat, and move better - without guesswork.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#programs"
                 className="px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-300 text-[#052012] font-semibold shadow-[0_0_24px_rgba(16,185,129,.35)] inline-flex items-center gap-2">
                <PlayCircle className="w-4 h-4" /> View Programs
              </a>
              <a href="#contact"
                 className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 inline-flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-emerald-300" /> Free Consult
              </a>
            </div>

            {/* quick highlights */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="card rounded-2xl p-4 border-emerald-400/20">
                <div className="text-2xl font-black text-emerald-300">12</div>
                <div className="text-xs text-muted mt-1">Week Cuts</div>
              </div>
              <div className="card rounded-2xl p-4 border-emerald-400/20">
                <div className="text-2xl font-black text-emerald-300">3</div>
                <div className="text-xs text-muted mt-1">Programs</div>
              </div>
              <div className="card rounded-2xl p-4 border-emerald-400/20">
                <div className="text-2xl font-black text-emerald-300">24/7</div>
                <div className="text-xs text-muted mt-1">Support</div>
              </div>
            </div>
          </div>

          {/* hero image */}
          <div className="reveal">
            <div className="portrait-frame grid place-items-center h-[420px]">
              <img
                src={hero}
                alt="UltraFit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* PROGRAMS */}
      <section id="programs" className="container mx-auto px-4 pb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
          <Dumbbell className="w-5 h-5 text-emerald-300" /> Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <ProgramCard
            title="Lean Cut — 12 Weeks"
            price="€49"
            bullets={[
              "4-day split • progressive overload",
              "Conditioning finishers (10–15 min)",
              "Weekly check-ins and adjustments",
            ]}
            tag="Most Popular"
            image={programCut}
          />
          <ProgramCard
            title="Hypertrophy — 8 Weeks"
            price="€29"
            bullets={[
              "Volume-focused • 5 days",
              "Upper/Lower + Push-Pull-Legs variants",
              "Form feedback via video",
            ]}
            image={programHypertrophy}
          />
          <ProgramCard
            title="Athletic — 6 Weeks"
            price="€19"
            bullets={[
              "Strength + mobility + agility",
              "2 gym + 2 field/track days",
              "Sprint mechanics & ankle/knee prehab",
            ]}
            image={programAthletic}
          />
        </div>
      </section>

      {/* MACROS / NUTRITION */}
      <section className="container mx-auto px-4 pb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
          <Salad className="w-5 h-5 text-lime-300" /> Nutrition — Simple Macro Targets
        </h2>

        <div className="grid md:grid-cols-[1.2fr_.8fr] gap-4">
          <div className="card rounded-2xl p-5 border-emerald-400/20">
            <MacroCalc />
          </div>

          <div className="card rounded-2xl p-5 border-emerald-400/20">
            <div className="font-semibold mb-3">Sample Day (High Protein)</div>
            <ul className="text-sm text-muted space-y-2">
              <li>• Breakfast: Greek yogurt, berries, oats</li>
              <li>• Lunch: Chicken, rice, veggies, olive oil</li>
              <li>• Snack: Protein shake, banana</li>
              <li>• Dinner: Salmon, potatoes, salad</li>
              <li>• Pre-bed: Cottage cheese or casein</li>
            </ul>
            <div className="mt-4 text-xs text-muted">* I’ll personalize macros to your history, culture & budget.</div>
          </div>
        </div>
      </section>
      <FitnessAbout /> 
      {/* TRANSFORMATIONS */}
      <section className="container mx-auto px-4 pb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
          <Flame className="w-5 h-5 text-rose-300" /> Transformations
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[hero, programCut, programHypertrophy, programAthletic].map((src, i)=>(
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10">
              <img
               /* src={src}
                alt="Before/After"
                className="w-full h-64 object-cover"*/
              />
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
          <BadgeCheck className="w-5 h-5 text-emerald-300" /> What You Get
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Benefit title="Personalized Programming" icon={<CheckCircle2 className="w-5 h-5 text-emerald-300" />} text="Built around your equipment, schedule, and injury history." />
          <Benefit title="Form Coaching" icon={<CheckCircle2 className="w-5 h-5 text-emerald-300" />} text="Video feedback so you progress safely and fast." />
          <Benefit title="Accountability" icon={<CheckCircle2 className="w-5 h-5 text-emerald-300" />} text="Weekly check-ins + adjustments to keep momentum." />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container mx-auto px-4 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5 text-lime-300" /> Start Your Plan
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <form
            onSubmit={(e)=>{ e.preventDefault(); window.location.href = `mailto:swaroop.raghu11@gmail.com?subject=UltraFit%20Consult&body=Name%3A%0AGoal%3A%0AExperience%3A%0AInjuries%3A%0A`; }}
            className="card p-5 rounded-2xl space-y-3 border-emerald-400/20"
          >
            <input placeholder="Name" className="w-full rounded-xl bg-[#0b1326] border border-white/10 px-3 py-2 outline-none focus:border-emerald-400" />
            <input placeholder="Email" className="w-full rounded-xl bg-[#0b1326] border border-white/10 px-3 py-2 outline-none focus:border-emerald-400" />
            <textarea rows="5" placeholder="Goal, experience, injuries…"
              className="w-full rounded-xl bg-[#0b1326] border border-white/10 px-3 py-2 outline-none focus:border-emerald-400" />
            <button className="px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-300 text-[#052012] font-semibold shadow-[0_0_24px_rgba(16,185,129,.35)]">
              Get a free consult
            </button>
          </form>

          <div className="card p-5 rounded-2xl border-emerald-400/20">
            <div className="font-semibold mb-2">Prefer quick links?</div>
            <div className="flex flex-wrap gap-3">
              <a className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15" href="mailto:swaroop.raghu11@gmail.com">Email</a>
              <a className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15" href="#programs">Programs</a>
              <a className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15" href="#contact">Consult</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* --- Small components --- */

function ProgramCard({ title, price, bullets=[], tag, image }){
  return (
    <div className="card rounded-2xl overflow-hidden group border-emerald-400/20">
      <div className="h-40 w-full overflow-hidden">
        <img src={image} alt={title}
             className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{title}</div>
          <div className="text-emerald-200 font-bold">{price}</div>
        </div>
        <ul className="text-sm text-muted mt-2 space-y-1">
          {bullets.map((b,i)=><li key={i}>• {b}</li>)}
        </ul>
        <div className="mt-4 flex items-center justify-between">
          <a href="#contact" className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15 text-sm">
            Enquire
          </a>
          {tag && <span className="px-2 py-1 rounded-full text-[11px] bg-emerald-400/15 border border-emerald-300/30 text-emerald-200">{tag}</span>}
        </div>
      </div>
    </div>
  )
}

function Benefit({ title, text, icon }){
  return (
    <div className="card rounded-2xl p-5 border-emerald-400/20">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-400/10 border border-emerald-300/30 grid place-items-center">
          {icon}
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-muted mt-1">{text}</div>
        </div>
      </div>
    </div>
  )
}

function MacroCalc(){
  const [weight, setWeight] = React.useState("")
  const [goal, setGoal] = React.useState("cut")
  const w = parseFloat(weight) || 0

  const kcal = Math.max(1200, Math.round(w * (goal==="cut" ? 22 : goal==="maintain" ? 30 : 36)))
  const protein = Math.round(w * 2)
  const fat = Math.round(kcal * 0.25 / 9)
  const carbs = Math.max(0, Math.round((kcal - (protein*4 + fat*9)) / 4))

  return (
    <div>
      <div className="font-semibold mb-3">Macro Calculator (rough target)</div>
      <div className="grid sm:grid-cols-3 gap-3">
        <input
          value={weight}
          onChange={e=>setWeight(e.target.value)}
          placeholder="Weight (kg)"
          className="rounded-xl bg-[#0b1326] border border-white/10 px-3 py-2 outline-none focus:border-emerald-400"
        />
        <select
          value={goal}
          onChange={e=>setGoal(e.target.value)}
          className="rounded-xl bg-[#0b1326] border border-white/10 px-3 py-2 outline-none focus:border-emerald-400"
        >
          <option value="cut">Cut</option>
          <option value="maintain">Maintain</option>
          <option value="bulk">Bulk</option>
        </select>
        <div className="rounded-xl border border-emerald-300/30 px-3 py-2 bg-emerald-400/10 flex items-center gap-3">
          <Flame className="w-4 h-4 text-emerald-300" /> ~{kcal} kcal/day
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mt-4">
        <MacroCard label="Protein" value={`${protein} g`} />
        <MacroCard label="Carbs" value={`${carbs} g`} />
        <MacroCard label="Fat" value={`${fat} g`} />
      </div>
      <div className="text-xs text-muted mt-2">* Proper plans are personalized to labs/history.</div>
    </div>
  )
}

function MacroCard({ label, value }){
  return (
    <div className="rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-4">
      <div className="text-xs text-emerald-200">{label}</div>
      <div className="text-xl font-bold mt-1 text-emerald-200">{value}</div>
    </div>
  )
}
