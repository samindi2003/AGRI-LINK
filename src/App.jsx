import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import FarmerDashboard from './pages/FarmerDashboard.jsx'
import CreateAd from './pages/CreateAd.jsx'
import OrderTracking from './pages/OrderTracking.jsx'
import Admin from './pages/Admin.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/farmer/new" element={<CreateAd />} />
        <Route path="/orders" element={<OrderTracking />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  )
}
