import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "./pages/Landing"
import Location from "./pages/Location"
import Soil from "./pages/Soil"
import Season from "./pages/Season"
import Dashboard from "./pages/Dashboard"
import Crops from "./pages/Crops"
import Water from "./pages/Water"
import Fertilizer from "./pages/Fertilizer"
import Disease from "./pages/Disease"
import Insights from "./pages/Insights"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/location" element={<Location />} />
        <Route path="/soil" element={<Soil />} />
        <Route path="/season" element={<Season />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/water" element={<Water />} />
        <Route path="/fertilizer" element={<Fertilizer />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
