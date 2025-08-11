/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {
    colors: {
      ink: "#e6f0ff",
      muted: "#b6c5e1",
      bg: "#050915",
      panel: "#0b1326",
      bluep: "#1e5eff",
      cyanp: "#10b5d8"
    },
    boxShadow: {
      glow: "0 0 24px rgba(30,94,255,.35), 0 0 64px rgba(16,181,216,.25)"
    }
  }},
  plugins: [],
}
