import { Link } from "react-router-dom"
import {
  Sprout,
  Droplets,
  AlertTriangle,
  TrendingUp,
  Info
} from "lucide-react"

function Crops() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#F6F8F4] to-[#ECF2EA]">

      {/* ================= HEADER ================= */}
      <div className="px-10 py-8">
        <h1 className="text-3xl font-extrabold text-green-900">
          Crop Recommendations
        </h1>
        <p className="text-gray-600 mt-1 max-w-2xl">
          Based on your location, soil type, and seasonal conditions,
          these crops are most suitable for cultivation.
        </p>
      </div>

      {/* ================= CROP GRID ================= */}
      <div className="px-10 pb-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* ================= CROP CARD ================= */}
        {[
          {
            name: "Rice",
            suitability: "92%",
            water: "High",
            risk: "Low",
            reason: [
              "Clay / loamy soil compatibility",
              "High rainfall in Kharif season",
              "Strong historical yield trends",
            ],
          },
          {
            name: "Maize",
            suitability: "85%",
            water: "Medium",
            risk: "Medium",
            reason: [
              "Good drainage soil required",
              "Moderate rainfall tolerance",
              "Lower pest resistance than rice",
            ],
          },
          {
            name: "Cotton",
            suitability: "78%",
            water: "Medium",
            risk: "Medium",
            reason: [
              "Warm climate preference",
              "Longer growth duration",
              "Higher pest monitoring needed",
            ],
          },
        ].map((crop) => (
          <div
            key={crop.name}
            className="group bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            {/* Crop Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sprout className="text-green-700" />
                <h2 className="text-xl font-extrabold text-green-900">
                  {crop.name}
                </h2>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500">Suitability</p>
                <p className="text-lg font-bold text-green-700">
                  {crop.suitability}
                </p>
              </div>
            </div>

            {/* Score Bar */}
            <div className="mt-4">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-lime-400 rounded-full"
                  style={{ width: crop.suitability }}
                />
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-blue-600">
                <Droplets size={16} />
                Water: {crop.water}
              </div>
              <div className="flex items-center gap-2 text-yellow-700">
                <AlertTriangle size={16} />
                Risk: {crop.risk}
              </div>
            </div>

            {/* WHY THIS CROP */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Info size={16} className="text-green-700" />
                <p className="text-sm font-semibold text-green-900">
                  Why this crop?
                </p>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {crop.reason.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-4">
              <button className="flex-1 bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition">
                Select Crop
              </button>
              <button className="flex-1 border border-green-700 text-green-700 py-3 rounded-xl font-semibold hover:bg-green-700 hover:text-white transition">
                Compare
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* ================= FOOTER ACTION ================= */}
      <div className="px-10 pb-12 flex justify-end">
        <Link
          to="/water"
          className="flex items-center gap-3 bg-gradient-to-r from-lime-400 to-green-500 text-green-900 px-7 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-all"
        >
          Proceed to Water Planning
          <TrendingUp size={18} />
        </Link>
      </div>

    </div>
  )
}

export default Crops
