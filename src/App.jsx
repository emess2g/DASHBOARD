import Navbar from "./Components/Navbar.jsx"
import Sidebar from "./Components/Sidebar.jsx"
import { BrowserRouter, Routes, Route  } from "react-router-dom"

import Dashboard from "./Pages/Dashboard.jsx"
import OrderHistory from "./Pages/OrderHistory.jsx"

function App() {
  return (
   <div className="bg-[#000]">

   <BrowserRouter>
    <Navbar />
      <div className="flex gap-[20rem]">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
        <Route path="/orderhistory" element={<OrderHistory/>} />
      </Routes>
      </div>
   </BrowserRouter>
  
   </div>
  )
}

export default App
