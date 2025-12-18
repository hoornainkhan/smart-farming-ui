import { Link } from "react-router-dom"
import { ArrowRight, Calendar, CloudSun } from "lucide-react"

function Season() {
  return (
    <div className="relative min-h-screen overflow-hidden text-gray-900">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-900 via-emerald-800 to-lime-700" />
      <div className="absolute top-28 left-16 w-44 h-44 bg-lime-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-60 h-60 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl w-full">

          {/* Step Indicator */}
          <p className="text-lime-200 text-sm mb-3 animate-fadeUp">
            Step 3 of 4
          </p>

          {/* Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 space-y-10 animate-fadeUp">

            {/* Header */}
            <div className="flex items-center gap-3">
              <CloudSun className="text-green-700" size={28} />
              <h1 className="text-2xl font-extrabold text-green-900">
                Select Season & Month
              </h1>
            </div>

            <p className="text-gray-600 max-w-2xl">
              Crop suitability depends heavily on seasonal climate,
              rainfall patterns, and temperature. Choose the season
              you are planning to cultivate in.
            </p>

            {/* Seasons */}
            <div className="grid sm:grid-cols-3 gap-8">

              {[
                {
                  name: "Kharif",
                  desc: "Monsoon crops (June – October)",
                  gradient: "from-blue-400 to-blue-600",
                },
                {
                  name: "Rabi",
                  desc: "Winter crops (October – March)",
                  gradient: "from-purple-400 to-purple-600",
                },
                {
                  name: "Zaid",
                  desc: "Summer crops (March – June)",
                  gradient: "from-orange-400 to-orange-600",
                },
              ].map((season) => (
                <div
                  key={season.name}
                  className="group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className={`h-3 w-full rounded-full bg-gradient-to-r ${season.gradient} mb-4`}
                  />
                  <h3 className="font-bold text-green-900 text-lg">
                    {season.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {season.desc}
                  </p>
                </div>
              ))}

            </div>

            {/* Month Selector */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="text-green-700" size={20} />
                <h3 className="font-semibold text-green-900">
                  Select Month
                </h3>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {[
                  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                ].map((month) => (
                  <button
                    key={month}
                    className="py-3 rounded-xl border border-green-200 text-sm font-medium text-green-900 hover:bg-green-100 hover:scale-105 transition-all"
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>

            {/* Climate Hint */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800">
              💡 Seasonal climate data will be used to predict
              rainfall, temperature range, and crop risks.
            </div>

            {/* Action */}
            <div className="flex justify-end pt-6">
              <Link
                to="/dashboard"
                className="group flex items-center gap-3 bg-gradient-to-r from-lime-400 to-green-500 text-green-900 px-7 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-all"
              >
                View Recommendations
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Season
