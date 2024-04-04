import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";


const Navbar = ({page, OpenSidebar}) => {



  return (
    <header className=" z-10 top-0 w-full flex  items-center justify-between bg-[#fcfcfc] shadow-md p-2 lg: py-4">
     <div className="flex items-center font-semibold gap-2 justify-between "> 
     <h2 className="  text-[14px] font-bold text-nowrap hidden lg:block text-[18px]"> 🧑🏿‍🍳 Mr <span className="text-[#f18056]">Cakes</span></h2>
      <CiMenuBurger className="cursor-pointer lg:hidden" onClick={OpenSidebar}/>
     <h1 className="text-[14px] opensans hidden lg:block text-[18px]  ">{page}</h1>
     </div>
     <label className="flex  gap-1 items-center justify-center hidden  border-[#8e8da1] border-2 rounded-xl px-2 lg:block w-[30%]" >
       <CiSearch className='text-[12px] lg:text-[16px]'/>
       <input type="text" 
       aria-label="search"
       placeholder="search"
       className="bg-[transparent] placeholder:text-[#797e93] focus:outline-none hidden text-[12px] lg:text-[16px]"
       />
     </label>
     <div className="flex gap-1 text-blue-500 text-[16px] items-center">
           <CiSearch className=' lg:hidden'/>
            <CiMail />
            <IoIosNotificationsOutline />
        <div className="flex gap-1  items-center">
             <CgProfile/>
            <p className="text-nowrap ">Rhonda Rhodes</p>
            <MdOutlineKeyboardArrowDown/>
        </div>
     </div>
    </header>
  )
}

export default Navbar
