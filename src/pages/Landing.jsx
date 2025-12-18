import { Link } from "react-router-dom"
import {
  Sprout,
  LayoutDashboard,
  BarChart3,
  ArrowRight,
  Leaf,
  Droplets,
  Bug
} from "lucide-react"
import { useEffect, useState } from "react"

function Landing() {
  const [scrolled, setScrolled] = useState(false)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      setOffsetY(window.scrollY * 0.12)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-900">

      {/* ================= PARALLAX BACKGROUND ================= */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8')",
          transform: `translateY(${offsetY}px)`,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-900/80 via-emerald-800/70 to-lime-700/70" />

      {/* ================= FLOATING DECOR ================= */}
      <div className="absolute top-32 left-10 w-40 h-40 bg-lime-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-16 w-56 h-56 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />

      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-md" : "py-6 bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Sprout className="text-green-800" size={30} />
            <h1 className="text-xl font-extrabold text-green-900">
              Smart Farming Assistant
            </h1>
          </div>

          <nav className="flex gap-8 text-sm font-semibold">
            <Link to="/dashboard" className="hover:text-lime-600 transition">
              Dashboard
            </Link>
            <Link to="/insights" className="hover:text-lime-600 transition">
              Insights
            </Link>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-8 pt-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-6 animate-fadeUp">
            <h2 className="text-5xl xl:text-6xl font-black leading-tight text-white drop-shadow-xl">
              AI-Powered{" "}
              <span className="relative text-lime-300">
                Smart Farming
                <span className="absolute left-0 -bottom-2 w-full h-1 bg-lime-300 animate-underline" />
              </span>
              <br />
              for Better Crop Yield
            </h2>

            <p className="text-lg text-lime-100 max-w-xl">
              Intelligent crop recommendations, soil intelligence,
              irrigation planning, and disease alerts —
              personalized for your land.
            </p>

            <div className="flex gap-5 pt-6">
              <Link
                to="/location"
                className="group relative bg-gradient-to-r from-lime-400 to-green-500 text-green-900 px-8 py-4 rounded-xl font-bold shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  Start Farming Guide
                  <ArrowRight className="group-hover:translate-x-1 transition" />
                </span>
              </Link>

              <Link
                to="/dashboard"
                className="border-2 border-lime-300 text-lime-200 px-8 py-4 rounded-xl font-bold hover:bg-lime-300 hover:text-green-900 transition"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative animate-float">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 text-center space-y-4">
              <Sprout className="mx-auto text-green-700" size={44} />
              <p className="text-xl font-semibold text-green-900">
                Farmer-friendly AI Platform
              </p>
              <p className="text-sm text-gray-600">
                Built for ZENITH 2K25 – AgriTech
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-gradient-to-br from-white via-lime-50 to-green-100 py-24 px-8">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {[
            { icon: <Leaf />, title: "Crop Recommendation", desc: "Best crops based on soil & season" },
            { icon: <Droplets />, title: "Water Planning", desc: "Smart irrigation schedules" },
            { icon: <Sprout />, title: "Soil Analysis", desc: "Understand nutrients & soil type" },
            { icon: <Bug />, title: "Disease Alerts", desc: "Early pest & disease detection" },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-800 mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="font-extrabold text-lg text-green-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-6 text-sm text-lime-100 bg-green-900">
        Dataset: Kaggle • ZENITH 2K25 • AgriTech
      </footer>

    </div>
  )
}

export default Landing
