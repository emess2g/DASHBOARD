/* eslint-disable react/jsx-key */
import { LuLayoutDashboard } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { GiLovers } from "react-icons/gi";
import { BsCalendar3Event} from "react-icons/bs";
import { MdOutlineCampaign } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdVolunteerActivism } from "react-icons/md";




import { Link } from "react-router-dom";

const Sidebar = ({  OpenSidebar }) => {
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
    <aside className='bg-[#fcfcfc] shadow-md fixed h-full z-10 flex-row mt-12 '  >
      <div className="" >
        {data.map((val) => (
          <Link to={val.link} onClick={() => handleHidden()}>
            <ul className="flex flex-col text-[12px]  text-nowrap hover:bg-[#555] hover:text-white" key={val.id}>
              <div className="flex items-center justify-between gap-2 py-4  px-2">
                 <div className="flex items-center gap-2">
                 <p className="font-bold text-[16px]">{val.icon}</p>
                <h1 className="text-[18px]">{val.name}</h1>
                 </div>
                <p  className="font-bold text-[16px]">{val.icon2}</p>
              </div>
            </ul>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
