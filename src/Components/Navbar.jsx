import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown,  MdOutlineKeyboardArrowUp} from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";




const Navbar = ({page, OpenSidebar}) => {

  const [toggleAcc, setToggleAcc] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const renderAccount = () => {
    setToggleAcc(!toggleAcc)
    setIsActive(!isActive)
  }

  return (
    <header className="fixed z-10 top-0 w-full flex  items-center justify-between bg-[#fcfcfc] p-2 lg: py-4">
     <div className="flex items-center font-semibold gap-2 justify-between "> 
     <h2 className="  text-[14px] font-bold text-nowrap hidden lg:block text-[18px]"> 🧑🏿‍🍳 Mr <span className="text-[#f18056]">Cakes</span></h2>
      <IoMenu className="cursor-pointer  semibold text-[24px] lg:hidden" onClick={OpenSidebar}/>
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
            <IoIosNotificationsOutline />
        <div className="flex gap-1  items-center">
            <div className="cursor-pointer text-nowrap " onClick={() => renderAccount()}>
               <div className="flex gap-1 items-center">
               <CgProfile />    
               <p>Rhonda Rhodes</p>
               {
                isActive ? <MdOutlineKeyboardArrowUp/>
                         :  <MdOutlineKeyboardArrowDown/>
               }          
               </div>
              <div className={toggleAcc? "hidden lg:hidden" : 'list-none absolute p-1 right-2 w-[14%]  text-[14px] bg-[#e5e5e5]'}>
                <div className="flex items-center gap-1">
                  <CgProfile/>
                  <li>Logout</li>
                </div>
              </div>
            </div>

        </div>
     </div>
    </header>
  )
}

export default Navbar
