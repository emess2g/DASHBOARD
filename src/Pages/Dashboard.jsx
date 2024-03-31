import { Outlet } from "react-router-dom"


const Dashboard = () => {
  return (
    <div className="flex w-full bg-[#555]">
       <div className="">
       <p className="text-[#e5e5e5]">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, obcaecati magni. Tempora odit maiores eos a ratione et facere possimus.
      </p>
       </div>
      <Outlet/>
    </div>
  )
}

export default Dashboard
