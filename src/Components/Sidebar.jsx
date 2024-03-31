/* eslint-disable react/jsx-key */
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { GiBackwardTime } from "react-icons/gi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const data = [
    {
      id: 1,
      icon: <LuLayoutDashboard />,
      name: "Dashboard",
      icon2: <MdKeyboardArrowRight />,
      link: "/",
    },
    {
      id: 2,
      icon: <GiBackwardTime />,
      name: "Order History",
      icon2: <MdKeyboardArrowRight />,
      link: "/orderhistory",
    },
    {
        id:4,
        icon: <MdOutlineLocalOffer/>,
        name: "Offers",
        icon2: <MdKeyboardArrowRight/>,
        link: "/offers"
    }, 
    {
        id:3,
        icon: <MdStorefront/>,
        name: "Manage Store",
        icon2: <MdKeyboardArrowRight/>,
        link: "/products"
    }, 
    {
        id:3,
        icon: <HiUserGroup/>,
        name: "Employees",
        icon2: <MdKeyboardArrowRight/>,
        link: "/employees"
    }, 
    {
        id:3,
        icon: '',
        name: "Employees",
        icon2: <MdKeyboardArrowRight/>,
        link: "/manamgeusers"
    }, 
    {
        id:3,
        icon: '',
        name: "Employees",
        icon2: <MdKeyboardArrowRight/>,
        link: "/manamgeusers"
    }, 
  ];

  return (
    <>
      <div className="fixed z-1  left-0 bg-[#fcfcfc] w-[16%] h-[100%] ">
       <div className="flex items-center  justify-between mt-10 p-3 bg-[orangered]">
       <h1>Manage Bakery</h1>
         <MdOutlineKeyboardArrowDown/>
       </div>
        {data.map((val) => (
          <NavLink to={val.link}>
            <ul className="flex flex-col text-[15px] font-semibold text-nowrap" key={val.id}>
              <div className="flex items-center justify-between  py-4  px-2" key={val.id}>
                 <div className="flex items-center gap-1">
                 <p className="font-bold text-[20px] ">{val.icon}</p>
                <h1>{val.name}</h1>
                 </div>
                <p  className="font-bold text-[20px]">{val.icon2}</p>
              </div>
            </ul>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
