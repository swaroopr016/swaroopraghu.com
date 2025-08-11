// src/App.jsx
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";
import ContactFAB from "./ContactFAB";

const TopLink = ({ to, label }) => (
  <a
    href={to}
    className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-white/15 transition"
    onClick={(e) => {
      if (to.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(to);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }}
  >
    {label}
  </a>
);

export default function App() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // fade/slide reveal on scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // pages where we want a compact anchor set (About + Contact only)
  const compactPages = ["/art", "/fitness", "/business"];
  const isCompact = compactPages.some((p) =>
    pathname.toLowerCase().startsWith(p)
  );

  return (
    <div className="min-h-screen bg-bg">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/90 border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-300" />
            <span className="font-bold">Swaroop | Portfolio</span>
          </Link>

          <nav className="flex items-center gap-2">
            {/* main sections */}
            <Link
              to="/engineering"
              className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-white/15 transition"
            >
              Engineering
            </Link>
            <Link
              to="/art"
              className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-white/15 transition"
            >
              Art
            </Link>
            <Link
              to="/fitness"
              className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-white/15 transition"
            >
              Fitness
            </Link>
            <Link
              to="/business"
              className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-white/15 transition"
            >
              Business
            </Link>

            {/* page anchors */}
            {isCompact ? (
              <>
                <TopLink to="#about" label="About" />
                <TopLink to="#contact" label="Contact" />
              </>
            ) : (
              <>
                <TopLink to="#about" label="About" />
                <TopLink to="#experience" label="Experience" />
                <TopLink to="#education" label="Education" />
                <TopLink to="#contact" label="Contact" />
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Routed pages render here */}
      <Outlet />

      {/* Floating contact button */}
      <ContactFAB />

      <footer className="border-t border-white/10 py-10 text-center text-muted">
        © {new Date().getFullYear()} Swaroop Raghu • Built from scratch
      </footer>
    </div>
  );
}
