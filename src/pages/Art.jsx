// src/pages/Art.jsx
import React from "react"
import { motion } from "framer-motion"
import {
  Palette, ShoppingCart, Filter, Search, Sparkles, Share2, Heart, X, ChevronLeft, ChevronRight
} from "lucide-react"

export default function Art(){
  const [query, setQuery] = React.useState("")
  const [cat, setCat] = React.useState("All")
  const [sort, setSort] = React.useState("new")
  const [lbIndex, setLbIndex] = React.useState(-1) // lightbox index; -1 = closed
  const [likes, setLikes] = React.useState({}) // simple local like store

  const cats = ["All","Portrait","Black and white","Abstract","Sketch","Landscape"]

  const filtered = ARTWORKS
    .filter(a => cat==="All" ? true : a.category===cat)
    .filter(a => (a.title + " " + a.tags.join(" ") + " " + a.media)
      .toLowerCase()
      .includes(query.toLowerCase()))
    .sort((a,b)=>{
      if (sort==="price-asc") return a.price - b.price
      if (sort==="price-desc") return b.price - a.price
      if (sort==="new") return (b.year||0)-(a.year||0)
      return 0
    })

  const openLB = idx => setLbIndex(idx)
  const closeLB = () => setLbIndex(-1)
  const prevLB = () => setLbIndex(i => (i-1+filtered.length)%filtered.length)
  const nextLB = () => setLbIndex(i => (i+1)%filtered.length)

  const buy = (a) => {
    const subject = encodeURIComponent(`Artwork enquiry: ${a.title} (#${a.id})`)
    const body = encodeURIComponent(
      `Hi Swaroop,\n\nI'm interested in "${a.title}".\n\nDetails I saw:\n- Price: €${a.price}\n- Year: ${a.year}\n- Media: ${a.media}\n- Size: ${a.size}\n\nMy name:\nMy preferred contact:\n\nThanks!`
    )
    window.location.href = `mailto:swaroop.raghu11@gmail.com?subject=${subject}&body=${body}`
  }

  const toggleLike = (id) => setLikes(s => ({...s, [id]: !s[id]}))

  return (
    <main className="relative min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="container mx-auto px-4 pt-12 pb-6">
        <motion.h1
          initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.5}}
          className="text-4xl md:text-5xl font-black tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-amber-400 to-red-400">
            Swaroop’s Art Studio
          </span>
        </motion.h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          --<b>This page is under construction</b> -- Original artworks & commissions. Bold color, cyber vibes, and portrait studies—crafted to live on your wall or brand.
        </p>

        {/* toolbar */}
        <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_auto]">
          {/* search */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <input
              value={query}
              onChange={e=>setQuery(e.target.value)}
              placeholder="Search titles, tags, media…"
              className="w-full pl-10 pr-3 py-2 rounded-xl bg-white border border-gray-300 outline-none focus:border-gray-500"
            />
          </div>
          {/* category pills */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center text-sm text-gray-600"><Filter className="w-4 h-4 mr-2" /> Filter:</span>
            {cats.map(c=>(
              <button
                key={c}
                onClick={()=>setCat(c)}
                className={`px-3 py-1.5 rounded-full border text-sm transition
                  ${cat===c ? "bg-gray-100 border-gray-400" : "bg-white border-gray-300 hover:bg-gray-50"}`}
              >
                {c}
              </button>
            ))}
          </div>
          {/* sort */}
          <select
            value={sort}
            onChange={e=>setSort(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white border border-gray-300 text-sm outline-none focus:border-gray-500"
          >
            <option value="new">Newest</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container mx-auto px-4 pb-16">
        {filtered.length===0 && (
          <div className="text-gray-600 text-sm">No matches. Try clearing filters.</div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {filtered.map((a, idx) => {
  const bgColors = [
    "bg-red-50",   // 0
    "bg-gray-50",   // 1
    "bg-orange-50",  // 2
    "bg-green-50",  // 3
    "bg-yellow-50", // 4
    "bg-blue-50",   // 5
  ]
  const borderColors = [
    "border-red-200",
    "border-gray-500",
    "border-orange-200",
    "border-green-200",
    "border-yellow-200",
    "border-blue-200",
  ]
  const pillBg = [
    "bg-red-100",
    "bg-gray-100",
    "bg-orange-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-blue-100",
  ]
  const textColors = [
    "text-red-800",
    "text-gray-800",
    "text-orange-800",
    "text-green-800",
    "text-yellow-800",
    "text-blue-800",
  ]

  const hue = idx % bgColors.length

  return (
    <motion.div
      key={a.id}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .4, delay: idx * 0.03 }}
      className={`rounded-2xl overflow-hidden border ${borderColors[hue]} ${bgColors[hue]} shadow-sm group`}
    >
      <button onClick={() => openLB(idx)} className="block w-full relative">
        {/* image */}
        <div className={`w-full aspect-[${a.aspect || "4/5"}] overflow-hidden`}>
          <img
            src={a.image}
            alt={a.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* top-left category */}
        <div className={`absolute left-2 top-2 px-2 py-1 rounded-full text-[11px] border ${borderColors[hue]} ${pillBg[hue]} ${textColors[hue]}`}>
          {a.category}
        </div>

        {/* top-right like */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); toggleLike(a.id) }}
          className={`absolute right-2 top-2 p-1.5 rounded-full border ${borderColors[hue]} ${pillBg[hue]} hover:bg-white`}
          aria-label="like"
        >
          <Heart className={`w-4 h-4 ${likes[a.id] ? "fill-pink-500 text-pink-500" : "text-gray-700"}`} />
        </button>
      </button>

      {/* meta */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{a.title}</div>
          <div className="text-gray-700 text-sm">€{a.price}</div>
        </div>
        <div className="text-xs text-gray-600 mt-1">{a.media} • {a.size} • {a.year}</div>

        <div className="flex flex-wrap gap-2 mt-3">
          {a.tags.map(t => (
            <span
              key={t}
              className={`px-2 py-1 rounded-full text-[11px] border ${borderColors[hue]} ${pillBg[hue]} ${textColors[hue]}`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => buy(a)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-green-300 to-blue-300 text-gray-900 font-semibold"
          >
            <ShoppingCart className="w-4 h-4" /> Buy / Enquire
          </button>
          <button
            onClick={() => navigator.clipboard?.writeText(window.location.origin + a.image)}
            className="px-3 py-2 rounded-lg bg-white border border-gray-300 text-sm hover:bg-gray-50"
          >
            <Share2 className="w-4 h-4 inline mr-2" /> Share
          </button>
        </div>
      </div>
    </motion.div>
  )
})}

        </div>
      </section>

      {/* COMMISSIONS / CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-3xl border border-gray-200 p-6 md:p-8 bg-white shadow-sm relative overflow-hidden">
          <div className="absolute -inset-20 -z-10 opacity-20 blur-2xl bg-[conic-gradient(from_0deg,rgba(255,0,128,.25),rgba(0,200,255,.25),rgba(255,200,0,.25),transparent_70%)]" />
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-pink-500" />
            <div>
              <h3 className="text-xl font-bold">Commissions Open</h3>
              <p className="text-gray-600 mt-1 max-w-2xl">
                Portraits, cyberpunk posters, album art, startup brand visuals—tell me your idea and I’ll craft something original.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-300 to-amber-300 text-gray-900 font-semibold"
                  href="mailto:swaroop.raghu11@gmail.com?subject=Commission%20Request&body=Tell%20me%20your%20idea%2C%20style%20vibes%2C%20deadline%2C%20and%20budget.%20I%27ll%20reply%20with%20a%20quote."
                >
                  Request a Quote
                </a>
                <a
                  className="px-4 py-2 rounded-xl bg-white border border-gray-300 hover:bg-gray-50"
                  href="mailto:swaroop.raghu11@gmail.com?subject=Licensing%20Enquiry"
                >
                  Licensing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* ABOUT — Art Page */}
<section id="about" className="container mx-auto pb-10">
  <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm relative overflow-hidden">
    {/* soft painterly wash */}
    <div className="pointer-events-none absolute -inset-16 -z-10 opacity-60 blur-3xl
                    bg-[radial-gradient(40%_30%_at_15%_20%,rgba(236,72,153,.08),transparent_60%),radial-gradient(35%_25%_at_85%_15%,rgba(56,189,248,.08),transparent_60%),radial-gradient(45%_35%_at_50%_85%,rgba(250,204,21,.08),transparent_60%)]" />

    <div className="grid md:grid-cols-3 gap-6">
      {/* Left — intro */}
      <div className="md:col-span-2">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500">
            About the Artist
          </span>
        </h2>

        <p className="text-gray-700 mt-3 leading-relaxed">
          I’m a natural artist with strong visualization—creating since childhood. My work spans portrait sketches,
          acrylic & canvas paintings, comic strips, 3D art, landscapes, and bold abstracts. I’ve earned multiple awards
          across school and community programs, and I love crafting pieces that feel alive on a wall or brand.
        </p>

        <p className="text-gray-700 mt-3 leading-relaxed">
          Whether it’s a custom portrait, a cyberpunk poster, or a calm landscape, I bring color, structure, and story
          together—so the final piece actually <em>speaks</em> to the viewer.
        </p>

        {/* specialties chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Portrait Sketches",
            "Acrylic & Canvas",
            "Comic Strips",
            "3D Art",
            "Landscapes",
            "Abstracts",
            "Digital Posters"
          ].map(t => (
            <span key={t}
              className="px-3 py-1.5 rounded-full text-sm border border-gray-200 bg-gray-50 text-gray-700">
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:swaroop.raghu11@gmail.com?subject=Commission%20Request&body=Tell%20me%20your%20idea%2C%20style%20vibes%2C%20deadline%2C%20and%20budget."
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-400 to-yellow-300 text-gray-900 font-semibold">
            Commission a Piece
          </a>
          <a
            href="#contact"
            className="px-4 py-2.5 rounded-xl bg-blue border border-black-200 hover:bg-black-50 text-black-800">
            Contact
          </a>
        </div>
      </div>

      {/* Right — quick facts */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="text-sm font-semibold text-gray-900">Highlights</div>
          <ul className="text-sm text-gray-700 mt-2 space-y-1.5">
            <li>• Multiple art awards (portrait & live sketch)</li>
            <li>• Commission-ready (posters, portraits, brand art)</li>
            <li>• Ships digital or physical on request</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="text-sm font-semibold text-gray-900">Preferred Media</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Graphite","Ink","Acrylic","Gouache","Digital"].map(m => (
              <span key={m}
                className="px-2.5 py-1 rounded-full text-xs bg-gray-100 border border-gray-200 text-gray-700">
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="text-sm font-semibold text-gray-900">Turnaround</div>
          <p className="text-sm text-gray-700 mt-1">
            Posters/portraits: 3–10 days depending on complexity & delivery mode.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* LIGHTBOX */}
      {lbIndex>-1 && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm grid place-items-center">
          <button onClick={closeLB} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 border border-white/15">
            <X className="w-5 h-5 text-white" />
          </button>
          <button onClick={prevLB} className="absolute left-4 md:left-8 p-2 rounded-full bg-white/10 border border-white/15">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={nextLB} className="absolute right-4 md:right-8 p-2 rounded-full bg-white/10 border border-white/15">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-5xl w-[92vw]">
            <img
              src={filtered[lbIndex]?.image}
              alt={filtered[lbIndex]?.title}
              className="w-full h-auto rounded-xl border border-white/10"
            />
            <div className="mt-3 text-white/80 text-sm flex items-center justify-between">
              <div>
                <b>{filtered[lbIndex]?.title}</b> — €{filtered[lbIndex]?.price}
              </div>
              <div className="text-white/60">
                {filtered[lbIndex]?.media} • {filtered[lbIndex]?.size} • {filtered[lbIndex]?.year}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

/* ----------------- Data ----------------- */
const ARTWORKS = [
  {
    id: 101,
    title: "Neo",
    price: 99,
    year: 2025,
    media: "Digital painting",
    size: "4096×5120px",
    tags: ["cyberpunk","portrait","neon"],
    category: "Cyberpunk",
    image: "/assets/art/neo-samurai.jpg",
    aspect: "4/5",
  },
  {
    id: 102,
    title: "Portrait",
    price: 99,
    year: 2024,
    media: "Digital sketch",
    size: "3508×4961px",
    tags: ["portrait","blue","study"],
    category: "Portrait",
    image: "/assets/art/blue-portrait.jpg",
    aspect: "3/4",
  },
  {
    id: 103,
    title: "City",
    price: 99,
    year: 2025,
    media: "Digital painting",
    size: "5000×3125px",
    tags: ["city","neon","retro"],
    category: "Cyberpunk",
    image: "/assets/art/synth-city.jpg",
    aspect: "16/10",
  },
  {
    id: 104,
    title: "Aurora",
    price: 99,
    year: 2023,
    media: "Digital watercolor",
    size: "4000×2500px",
    tags: ["landscape","aurora","calm"],
    category: "Landscape",
    image: "/assets/art/aurora-field.jpg",
    aspect: "16/10",
  },
  {
    id: 105,
    title: "Shapes",
    price: 99,
    year: 2022,
    media: "Vector abstract",
    size: "4000×4000px",
    tags: ["abstract","geometric","pop"],
    category: "Abstract",
    image: "/assets/art/shapes-that-sing.jpg",
    aspect: "1/1",
  },
  {
    id: 106,
    title: "Graphite",
    price: 99,
    year: 2021,
    media: "Graphite on paper",
    size: "A4",
    tags: ["sketch","figure","pencil"],
    category: "Sketch",
    image: "/assets/art/graphite-runner.jpg",
    aspect: "3/4",
  },
]
