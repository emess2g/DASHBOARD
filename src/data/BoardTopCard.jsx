import React from 'react'
import { MdOutlineVerified } from "react-icons/md";

const BoardTopCard = () => {

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
    <div>
         <div  className="flex gap-2 justify-between text-[16px] text-[#fff]">
        {highlightData.map((data) => (
          <div
            id='topCard'
            className={`flex justify-between shadow-md ${data.color} rounded-lg gap-4 p-2
            w-[30%] h-full lx: 
            `}
            key={data.id} 
          >
            <div className=" flex flex-col  justify-center  gap-2 text-nowrap  ">
              <p className='text-[14px] xl:text-[18px]'>{data.name}</p>
              <p className='xl: text-[18px]'>{data.number}</p>
            </div>
            <div className=" text-[#111]  bg-[#f7f7ff] p-4 rounded-[50%]">
              <p className="card-icon text-[1.5rem] xl:text-[2.8rem]">{data.icon}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoardTopCard
