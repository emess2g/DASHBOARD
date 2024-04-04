/* eslint-disable react/jsx-key */
import { LuLayoutDashboard } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { GiLovers } from "react-icons/gi";
import { BsCalendar3Event} from "react-icons/bs";
import { MdOutlineCampaign } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdVolunteerActivism } from "react-icons/md";




import { NavLink } from "react-router-dom";

const Sidebar = ({openSidebarToggle,  OpenSidebar }) => {
  const data = [
    {
      id: 1,
      icon: <LuLayoutDashboard />,
      name: "Dashboard",
      icon2: <MdKeyboardArrowRight />,
      link: "/dashboard",
    },
    {
      id: 2,
      icon: <GiLovers />,
      name: "All Donations",
      icon2: <MdKeyboardArrowRight />,
      link: "/alldonations",
    },
    {
        id:3,
        icon: <MdOutlineCampaign/>,
        name: "Campaigns",
        icon2: <MdKeyboardArrowRight/>,
        link: "/campaigns"
    }, 
    {
        id:4,
        icon: <BsCalendar3Event/>,
        name: "Events",
        icon2: <MdKeyboardArrowRight/>,
        link: "/events"
    }, 
    {
        id:5,
        icon: <IoNewspaperOutline/>,
        name: "Blog",
        icon2: <MdKeyboardArrowRight/>,
        link: "/blog"
    }, 
    {
        id:6,
        icon: <MdVolunteerActivism/>,
        name: "Volunteers",
        icon2: <MdKeyboardArrowRight/>,
        link: "/volunteers"
    }, 
    {
        id:7,
        icon: <HiUserGroup/>,
        name: "All Users",
        icon2: <MdKeyboardArrowRight/>,
        link: "/allusers"
    }, 

  ];

 
  const handleHidden = () => {
    // hides sidebar when link is clicked
    OpenSidebar()
  }

  return (
    <aside id='sidebar' >
      <div className={openSidebarToggle ? "hidden  lg:block fixed  z-10 mt-10 bg-[#fcfcfc] h-[100%]" : ' fixed  z-10  bg-[#fcfcfc] h-[100%] lg: block' }>

        {data.map((val) => (
          <NavLink to={val.link} onClick={() => handleHidden()}>
            <ul className="flex flex-col text-[14px] font-semibold text-nowrap" key={val.id}>
              <div className="flex items-center justify-between  py-4  px-2">
                 <div className="flex items-center gap-1">
                 <p className="font-bold text-[14px]">{val.icon}</p>
                <h1 className="text-[14px]">{val.name}</h1>
                 </div>
                <p  className="font-bold text-[16px]">{val.icon2}</p>
              </div>
            </ul>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
