import Navbar from "./Components/Header.jsx"
import Sidebar from "./Components/Sidebar.jsx"
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import { useState } from "react"
import Dashboard from "./Pages/Dashboard.jsx"
import OrderHistory from "./Pages/Alldonations.jsx"
import Allusers from "./Pages/Allusers.jsx"

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  return (
  
   <BrowserRouter>
     <Navbar  page='Dashboard' OpenSidebar={OpenSidebar} />
      <div className="flex w-full  ">
        <div className="h-screen  ">
        <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        </div>
      <div className="flex-1">
      <Routes>
        <Route path="/" element={<Dashboard/>} exact />
        <Route path="/alldonations" element={<OrderHistory/>} />
        <Route path="/allusers" element={<Allusers/>} />
      </Routes>
      </div>
      </div>
   </BrowserRouter>
  )
}

export default App
