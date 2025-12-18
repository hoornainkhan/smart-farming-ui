import { Link } from "react-router-dom"
import {
  Sprout,
  Droplets,
  Bug,
  Leaf,
  TrendingUp,
  AlertTriangle,
  BarChart3
} from "lucide-react"

function Dashboard() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#F6F8F4] to-[#ECF2EA]">

      {/* ================= PAGE HEADER ================= */}
      <div className="px-10 py-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-green-900">
            Farmer Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Personalized insights based on your land & season
          </p>
        </div>

        <div className="flex gap-4">
          <div className="bg-white px-5 py-3 rounded-xl shadow-sm">
            <p className="text-xs text-gray-500">Location</p>
            <p className="font-semibold text-green-900">
              Telangana · Hyderabad
            </p>
          </div>

          <div className="bg-white px-5 py-3 rounded-xl shadow-sm">
            <p className="text-xs text-gray-500">Season</p>
            <p className="font-semibold text-green-900">
              Kharif
            </p>
          </div>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="px-10 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ========== LEFT (Recommendations) ========== */}
        <div className="lg:col-span-2 space-y-8">

          {/* Top Recommendation */}
          <div className="relative bg-gradient-to-br from-green-700 to-lime-600 rounded-3xl p-8 text-white shadow-xl overflow-hidden">
            <div className="absolute top-6 right-6 opacity-20">
              <Sprout size={120} />
            </div>

            <p className="text-sm opacity-90">
              Top Recommended Crop
            </p>

            <h2 className="text-4xl font-extrabold mt-2">
              Rice
            </h2>

            <p className="mt-3 max-w-md text-lime-100">
              Highly suitable for your soil type, rainfall pattern,
              and current Kharif season.
            </p>

            <div className="mt-6 flex gap-6">
              <div>
                <p className="text-xs opacity-80">Suitability</p>
                <p className="text-xl font-bold">92%</p>
              </div>
              <div>
                <p className="text-xs opacity-80">Risk Level</p>
                <p className="text-xl font-bold text-yellow-200">
                  Low
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Cards */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* Water */}
            <Link
              to="/water"
              className="group bg-white p-6 rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <Droplets className="text-blue-600" />
                <h3 className="font-bold text-green-900">
                  Water Planning
                </h3>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Weekly irrigation schedule & water usage insights.
              </p>
            </Link>

            {/* Fertilizer */}
            <Link
              to="/fertilizer"
              className="group bg-white p-6 rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <Leaf className="text-green-600" />
                <h3 className="font-bold text-green-900">
                  Fertilizer Guide
                </h3>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Nutrient recommendations and dosage timing.
              </p>
            </Link>

          </div>
        </div>

        {/* ========== RIGHT (Alerts & Insights) ========== */}
        <div className="space-y-8">

          {/* Risk Meter */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-green-700" />
              <h3 className="font-bold text-green-900">
                Yield Outlook
              </h3>
            </div>

            <div className="mt-4">
              <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[80%] bg-gradient-to-r from-green-500 to-lime-400 rounded-full" />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                High yield potential expected
              </p>
            </div>
          </div>

          {/* Disease Alert */}
          <Link
            to="/disease"
            className="group bg-white  rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 ">
              <Bug className="text-red-600" />
              <h3 className="font-bold text-green-900 ">
                Disease Alerts
              </h3>
            </div>


            <div className="mt-4 flex items-center gap-2 pb-5 text-sm text-yellow-700">
              <AlertTriangle size={16} />
              Medium pest risk detected
            </div>
          </Link>

          {/* Data Insights */}
          <Link
            to="/insights"
            className="group bg-white  rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3">
              <BarChart3 className="text-purple-600" />
              <h3 className="font-bold text-green-900">
                Data Insights
              </h3>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              Visualize trends from historical crop data.
            </p>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Dashboard
