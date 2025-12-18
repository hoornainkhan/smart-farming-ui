import { Link } from "react-router-dom"
import { ArrowRight, Layers } from "lucide-react"

function Soil() {
  return (
    <div className="relative min-h-screen overflow-hidden text-gray-900">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-900 via-emerald-800 to-lime-700" />
      <div className="absolute top-24 right-16 w-48 h-48 bg-lime-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 left-16 w-56 h-56 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl w-full">

          {/* Step Indicator */}
          <p className="text-lime-200 text-sm mb-3 animate-fadeUp">
            Step 2 of 4
          </p>

          {/* Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 space-y-10 animate-fadeUp">

            {/* Header */}
            <div className="flex items-center gap-3">
              <Layers className="text-green-700" size={28} />
              <h1 className="text-2xl font-extrabold text-green-900">
                Select Your Soil Type
              </h1>
            </div>

            <p className="text-gray-600 max-w-2xl">
              Soil type affects crop suitability, water retention,
              and nutrient availability. Choose the soil that best
              matches your farmland.
            </p>

            {/* Soil Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  name: "Black Soil",
                  desc: "High moisture retention, rich in minerals",
                  color: "from-gray-700 to-gray-900",
                },
                {
                  name: "Red Soil",
                  desc: "Good drainage, suitable for dry farming",
                  color: "from-red-500 to-red-700",
                },
                {
                  name: "Sandy Soil",
                  desc: "Light soil, quick drainage",
                  color: "from-yellow-300 to-yellow-500",
                },
                {
                  name: "Clay Soil",
                  desc: "Dense soil, high water holding capacity",
                  color: "from-orange-400 to-orange-600",
                },
                {
                  name: "Loamy Soil",
                  desc: "Balanced soil, ideal for most crops",
                  color: "from-green-400 to-green-600",
                },
              ].map((soil) => (
                <div
                  key={soil.name}
                  className="group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className={`h-3 w-full rounded-full bg-gradient-to-r ${soil.color} mb-4`}
                  />
                  <h3 className="font-bold text-green-900 text-lg">
                    {soil.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {soil.desc}
                  </p>
                </div>
              ))}

            </div>

            {/* Action */}
            <div className="flex justify-end pt-6">
              <Link
                to="/season"
                className="group flex items-center gap-3 bg-gradient-to-r from-lime-400 to-green-500 text-green-900 px-7 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-all"
              >
                Continue
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Soil
