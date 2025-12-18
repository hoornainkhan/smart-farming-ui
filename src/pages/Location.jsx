import { MapPin, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

function Location() {
  return (
    <div className="relative min-h-screen overflow-hidden text-gray-900">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-900 via-emerald-800 to-lime-700" />
      <div className="absolute top-32 left-10 w-40 h-40 bg-lime-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-56 h-56 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl w-full">

          {/* Step Indicator */}
          <p className="text-lime-200 text-sm mb-3 animate-fadeUp">
            Step 1 of 4
          </p>

          {/* Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 space-y-8 animate-fadeUp">

            {/* Header */}
            <div className="flex items-center gap-3">
              <MapPin className="text-green-700" size={28} />
              <h1 className="text-2xl font-extrabold text-green-900">
                Select Your Location
              </h1>
            </div>

            <p className="text-gray-600 max-w-xl">
              Your location helps us understand climate patterns, soil
              behavior, and seasonal suitability for crops.
            </p>

            {/* Inputs */}
            <div className="grid md:grid-cols-3 gap-6">

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-green-900">
                  State
                </label>
                <select className="p-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
                  <option>Select State</option>
                  <option>Telangana</option>
                  <option>Andhra Pradesh</option>
                  <option>Maharashtra</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-green-900">
                  District
                </label>
                <select className="p-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-lime-400">
                  <option>Select District</option>
                  <option>Hyderabad</option>
                  <option>Warangal</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-green-900">
                  Village (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Enter village name"
                  className="p-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>

            </div>

            {/* Action */}
            <div className="flex justify-end pt-6">
              <Link
                to="/soil"
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

export default Location
