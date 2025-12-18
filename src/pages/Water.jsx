import { Droplets, AlertTriangle, TrendingUp, Calendar } from "lucide-react"
import { Link } from "react-router-dom"

function Water() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#F6F8F4] to-[#ECF2EA]">

      {/* ================= HEADER ================= */}
      <div className="px-10 py-8">
        <h1 className="text-3xl font-extrabold text-green-900">
          Water Planning
        </h1>
        <p className="text-gray-600 mt-1 max-w-2xl">
          Optimized irrigation schedule based on crop type, soil condition,
          and seasonal climate patterns.
        </p>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="px-10 pb-14 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-2 space-y-8">

          {/* Water Requirement Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex items-center gap-3">
              <Droplets className="text-blue-600" />
              <h2 className="text-xl font-extrabold text-green-900">
                Weekly Water Requirement
              </h2>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Estimated water usage for the selected crop (Rice)
            </p>

            {/* Fake Chart */}
            <div className="mt-6 space-y-4">
              {[
                { week: "Week 1", value: "80%" },
                { week: "Week 2", value: "65%" },
                { week: "Week 3", value: "90%" },
                { week: "Week 4", value: "70%" },
              ].map((w) => (
                <div key={w.week}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-green-900">
                      {w.week}
                    </span>
                    <span className="text-gray-600">
                      {w.value}
                    </span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      style={{ width: w.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-green-700" />
              <h2 className="text-xl font-extrabold text-green-900">
                Irrigation Schedule
              </h2>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {[
                "Early Morning (5–7 AM)",
                "Late Evening (6–8 PM)",
              ].map((slot) => (
                <div
                  key={slot}
                  className="border border-green-200 rounded-xl p-4 bg-green-50"
                >
                  <p className="font-semibold text-green-900">
                    {slot}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Optimal time to minimize evaporation loss
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="space-y-8">

          {/* Alert Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-yellow-600" />
              <h3 className="font-bold text-green-900">
                Water Risk Alert
              </h3>
            </div>

            <p className="text-sm text-gray-700 mt-3">
              Over-irrigation risk detected due to high rainfall forecast.
              Reduce water supply during Week 3.
            </p>
          </div>

          {/* Efficiency */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-green-700" />
              <h3 className="font-bold text-green-900">
                Water Efficiency Score
              </h3>
            </div>

            <div className="mt-4">
              <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-green-500 to-lime-400 rounded-full" />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Efficient usage expected
              </p>
            </div>
          </div>

          {/* Next */}
          <Link
            to="/fertilizer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-lime-400 to-green-500 text-green-900 px-6 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-all"
          >
            Proceed to Fertilizer Guide
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Water
