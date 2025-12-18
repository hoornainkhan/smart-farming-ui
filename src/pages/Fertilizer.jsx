import { Link } from "react-router-dom"
import {
  Leaf,
  Beaker,
  CalendarClock,
  ArrowRight,
  AlertCircle
} from "lucide-react"

function Fertilizer() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#F6F8F4] to-[#ECF2EA]">

      {/* ================= HEADER ================= */}
      <div className="px-10 py-8">
        <h1 className="text-3xl font-extrabold text-green-900">
          Fertilizer Guide
        </h1>
        <p className="text-gray-600 mt-1 max-w-2xl">
          Recommended nutrients and application schedule based on
          crop type, soil condition, and growth stage.
        </p>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="px-10 pb-14 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-2 space-y-8">

          {/* Nutrient Summary */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex items-center gap-3">
              <Leaf className="text-green-700" />
              <h2 className="text-xl font-extrabold text-green-900">
                Essential Nutrients (Rice)
              </h2>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              {[
                { name: "Nitrogen (N)", qty: "120 kg/ha", color: "bg-blue-500" },
                { name: "Phosphorus (P)", qty: "60 kg/ha", color: "bg-purple-500" },
                { name: "Potassium (K)", qty: "40 kg/ha", color: "bg-orange-500" },
              ].map((n) => (
                <div
                  key={n.name}
                  className="border border-green-200 rounded-2xl p-5 text-center"
                >
                  <div
                    className={`h-2 w-full rounded-full ${n.color} mb-3`}
                  />
                  <p className="font-bold text-green-900">
                    {n.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {n.qty}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Timeline */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex items-center gap-3">
              <CalendarClock className="text-green-700" />
              <h2 className="text-xl font-extrabold text-green-900">
                Application Schedule
              </h2>
            </div>

            <div className="mt-6 space-y-6">
              {[
                {
                  stage: "Basal (Before Sowing)",
                  desc: "Apply Phosphorus and 50% Nitrogen",
                },
                {
                  stage: "Tillering Stage",
                  desc: "Apply remaining Nitrogen",
                },
                {
                  stage: "Panicle Initiation",
                  desc: "Apply Potassium for grain quality",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="w-3 h-3 rounded-full bg-green-600 mt-2" />
                  <div>
                    <p className="font-semibold text-green-900">
                      {step.stage}
                    </p>
                    <p className="text-sm text-gray-600">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="space-y-8">

          {/* Advisory */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="flex items-center gap-3">
              <Beaker className="text-blue-600" />
              <h3 className="font-bold text-green-900">
                Advisory Notes
              </h3>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-700 mt-4 space-y-2">
              <li>Avoid overuse of Nitrogen</li>
              <li>Split application improves absorption</li>
              <li>Conduct soil testing every season</li>
            </ul>
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-yellow-600" />
              <h3 className="font-bold text-yellow-800">
                Overuse Warning
              </h3>
            </div>
            <p className="text-sm text-yellow-800 mt-3">
              Excess fertilizer can reduce yield and damage soil health.
              Always follow recommended quantities.
            </p>
          </div>

          {/* Next */}
          <Link
            to="/disease"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-lime-400 to-green-500 text-green-900 px-6 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-all"
          >
            Proceed to Disease Alerts
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Fertilizer
