import Navbar from "./Components/Navbar.jsx"
import Sidebar from "./Components/Sidebar.jsx"
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import { useState } from "react"
import Dashboard from "./Pages/Dashboard.jsx"
import OrderHistory from "./Pages/OrderHistory.jsx"

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  return (
   <div className="">

   <BrowserRouter>
  <Navbar  page='Dashboard' OpenSidebar={OpenSidebar} />
      <div>
      <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Routes>
        <Route path="/" element={<Dashboard  />} exact />
        <Route path="/orderhistory" element={<OrderHistory/>} />
      </Routes>
      </div>
   </BrowserRouter>
  
   </div>
  )
}

export default App
