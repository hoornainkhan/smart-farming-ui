import { ShieldAlert, Bug, Thermometer, Droplets, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

function Disease() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#F6F8F4] to-[#ECF2EA]">

      {/* ================= HEADER ================= */}
      <div className="px-10 py-8">
        <h1 className="text-3xl font-extrabold text-green-900">
          Disease & Pest Alerts
        </h1>
        <p className="text-gray-600 mt-1 max-w-2xl">
          Early warnings and preventive measures based on weather,
          crop type, and historical disease patterns.
        </p>
      </div>

      {/* ================= ALERT SUMMARY ================= */}
      <div className="px-10 pb-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3">
            <ShieldAlert className="text-yellow-600" />
            <h3 className="font-bold text-green-900">
              Overall Risk
            </h3>
          </div>
          <p className="mt-4 text-2xl font-extrabold text-yellow-700">
            Medium
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Increased humidity detected
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3">
            <Thermometer className="text-red-600" />
            <h3 className="font-bold text-green-900">
              Temperature
            </h3>
          </div>
          <p className="mt-4 text-2xl font-extrabold text-green-900">
            28–32°C
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Favorable for pest activity
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3">
            <Droplets className="text-blue-600" />
            <h3 className="font-bold text-green-900">
              Humidity
            </h3>
          </div>
          <p className="mt-4 text-2xl font-extrabold text-green-900">
            High
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Monitor fungal diseases
          </p>
        </div>

      </div>

      {/* ================= DISEASE CARDS ================= */}
      <div className="px-10 pb-14 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {[
          {
            name: "Brown Spot Disease",
            risk: "Medium",
            symptoms: [
              "Brown lesions on leaves",
              "Reduced grain quality",
            ],
            prevention: [
              "Use disease-resistant varieties",
              "Avoid excess nitrogen",
              "Ensure proper drainage",
            ],
          },
          {
            name: "Stem Borer Pest",
            risk: "Medium",
            symptoms: [
              "Dead heart symptoms",
              "Holes in stem",
            ],
            prevention: [
              "Light traps during early stage",
              "Balanced fertilizer use",
              "Regular field inspection",
            ],
          },
        ].map((disease) => (
          <div
            key={disease.name}
            className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bug className="text-red-600" />
                <h2 className="text-xl font-extrabold text-green-900">
                  {disease.name}
                </h2>
              </div>
              <span className="text-sm font-semibold px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">
                {disease.risk} Risk
              </span>
            </div>

            {/* Symptoms */}
            <div className="mt-6">
              <p className="font-semibold text-green-900 mb-2">
                Symptoms
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {disease.symptoms.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            {/* Prevention */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="font-semibold text-green-900 mb-2">
                Preventive Measures
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {disease.prevention.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>

      {/* ================= FOOTER ACTION ================= */}
      <div className="px-10 pb-12 flex justify-end">
        <Link
          to="/insights"
          className="flex items-center gap-3 bg-gradient-to-r from-lime-400 to-green-500 text-green-900 px-7 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-all"
        >
          View Data Insights
          <ArrowRight size={18} />
        </Link>
      </div>

    </div>
  )
}

export default Disease
