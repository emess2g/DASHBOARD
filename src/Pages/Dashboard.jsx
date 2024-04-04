import { MdOutlineVerified } from "react-icons/md";

const Dashboard = () => {
  const highlightData = [
    {
      id: 1,
      icon: <MdOutlineVerified />,
      name: "Total Orders",
      number: 15000,
      color: "bg-gradient-to-r from-[#63a0fd] to-[#649ffd]",
    },
    {
      id: 2,
      icon: <MdOutlineVerified />,
      name: "Total Orders",
      number: 15000,
      color: "bg-gradient-to-r from-[#56b456] to-[#4bbe95]",
    },
    {
      id: 3,
      icon: <MdOutlineVerified />,
      name: "Total Orders",
      number: 15000,
      color: "bg-gradient-to-r from-[#ff8a2a] to-[#ff8619]",
    },
    {
      id: 4,
      icon: <MdOutlineVerified />,
      name: "Total Orders",
      number: 15000,
      color: "bg-gradient-to-r from-[#c887e5] to-[#a58fe1]",
    },
  ];

  return (
    <div className="p-2 w-[100%] ">
     <div className="grid grid-cols-2 gap-2  bg-red-200  ">
        {highlightData.map((data) => (
          <div
            className={`flex text-[#fff] justify-between  text-[14px]  ${data.color} rounded-lg gap-4 p-2`}
            key={data.id}
          >
            <div className="  items-center gap-2 text-nowrap ">
              <p>{data.name}</p>
              <p>{data.number}</p>
            </div>
            <div className=" text-[#111]  bg-[#f7f7ff] p-4 rounded-[50%]">
              <p className="text-[18px]">{data.icon}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;