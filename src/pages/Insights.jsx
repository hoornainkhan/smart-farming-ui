import {
  BarChart3,
  Database,
  Brain,
  TrendingUp,
  Layers
} from "lucide-react"

function Insights() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#F6F8F4] to-[#ECF2EA]">

      {/* ================= HEADER ================= */}
      <div className="px-10 py-8">
        <h1 className="text-3xl font-extrabold text-green-900">
          Data Insights & AI Transparency
        </h1>
        <p className="text-gray-600 mt-1 max-w-3xl">
          Understanding how historical agricultural data is analyzed
          to generate intelligent and explainable crop recommendations.
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="px-10 pb-8 grid grid-cols-1 md:grid-cols-4 gap-6">

        {[
          { label: "Crop Records", value: "2,000+", icon: <Database /> },
          { label: "Soil Types", value: "5+", icon: <Layers /> },
          { label: "Seasons Covered", value: "3", icon: <TrendingUp /> },
          { label: "AI Rules Applied", value: "25+", icon: <Brain /> },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <div className="flex items-center gap-3 text-green-700">
              {stat.icon}
              <p className="text-sm font-semibold text-gray-600">
                {stat.label}
              </p>
            </div>
            <p className="mt-4 text-3xl font-extrabold text-green-900">
              {stat.value}
            </p>
          </div>
        ))}

      </div>

      {/* ================= ANALYTICS ================= */}
      <div className="px-10 pb-14 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Crop Distribution */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="flex items-center gap-3">
            <BarChart3 className="text-purple-600" />
            <h2 className="text-xl font-extrabold text-green-900">
              Crop Distribution (Sample)
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {[
              { crop: "Rice", percent: "70%" },
              { crop: "Maize", percent: "55%" },
              { crop: "Cotton", percent: "45%" },
              { crop: "Wheat", percent: "60%" },
            ].map((c) => (
              <div key={c.crop}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-green-900">
                    {c.crop}
                  </span>
                  <span className="text-gray-600">
                    {c.percent}
                  </span>
                </div>
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-lime-400 rounded-full"
                    style={{ width: c.percent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Season Trend */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-green-700" />
            <h2 className="text-xl font-extrabold text-green-900">
              Seasonal Yield Trends
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {[
              { season: "Kharif", note: "High rainfall, high yield potential" },
              { season: "Rabi", note: "Stable climate, moderate yield" },
              { season: "Zaid", note: "Heat stress, selective crops" },
            ].map((s) => (
              <div
                key={s.season}
                className="border border-green-200 rounded-xl p-4 bg-green-50"
              >
                <p className="font-semibold text-green-900">
                  {s.season}
                </p>
                <p className="text-sm text-gray-600">
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= AI EXPLANATION ================= */}
      <div className="px-10 pb-14">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="text-green-700" />
            <h2 className="text-2xl font-extrabold text-green-900">
              How the AI Generates Recommendations
            </h2>
          </div>

          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              Farmer inputs location, soil type, and season.
            </li>
            <li>
              System filters historical crop data from the dataset.
            </li>
            <li>
              Soil-crop and season-crop compatibility rules are applied.
            </li>
            <li>
              Risk factors (water, disease, climate) are evaluated.
            </li>
            <li>
              Crops are ranked based on suitability score.
            </li>
          </ol>

          <p className="mt-6 text-sm text-gray-600">
            ⚠️ This system provides advisory insights and does not
            replace expert agricultural consultation.
          </p>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-6 text-sm text-gray-500">
        Dataset Source: Kaggle • ZENITH 2K25 • AgriTech
      </footer>

    </div>
  )
}

export default Insights
