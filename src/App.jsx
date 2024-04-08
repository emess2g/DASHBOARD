import Navbar from "./Components/Navbar.jsx"
import Sidebar from "./Components/Sidebar.jsx"
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import { useState } from "react"
import Dashboard from "./Pages/Dashboard.jsx"
import OrderHistory from "./Pages/Alldonations.jsx"

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  return (
  
   <BrowserRouter>
     <Navbar  page='Dashboard' OpenSidebar={OpenSidebar} />
      <div className="flex w-full bg-blue-200  ">
        <div className="h-screen  top-0 bg-green-500">
        <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        </div>
      <div className="flex-1">
      <Routes>
        <Route path="/" element={<Dashboard/>} exact />
        <Route path="/alldonations" element={<OrderHistory/>} />
      </Routes>
      </div>
      </div>
   </BrowserRouter>
  )
}

export default App
