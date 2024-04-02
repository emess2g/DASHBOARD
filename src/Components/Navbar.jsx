import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";





const Navbar = ({page}) => {
  return (
    <header className=" top-0 w-full flex  items-center justify-between py-4 px-6 bg-[#fcfcfc] shadow-md ">
     <div className="flex items-center font-semibold gap-4 justify-between w-[25%]"> 
     <h2 className="text-[20px] font-bold text-nowrap"> 🧑🏿‍🍳 Mr <span className="text-[#f18056]">Cakes</span></h2>
     <h1 className="text-[18px] opensans">{page}</h1>
     </div>
     <label className="flex gap-1 items-center border-[#8e8da1] border-2 rounded-xl py-1 px-2">
       <CiSearch className='text-[14px]'/>
       <input type="text" 
       aria-label="search"
       placeholder="search"
       className="bg-[transparent] placeholder:text-[#797e93] focus:outline-none"
       />
     </label>
     <div className="flex gap-3 text-[16px] items-center">
            <CiMail />
            <IoIosNotificationsOutline />
        <div className="flex gap-2 items-center">
             <CgProfile/>
            <p className="">Rhonda Rhodes</p>
            <MdOutlineKeyboardArrowDown/>
        </div>
     </div>
    </header>
  )
}

export default Navbar
