import BoardTopCard from "../data/BoardTopCard";
import BoardData from "../data/BoardData";

const Dashboard = () => {

  return (
    <div id="main" className="m-4 flex flex-col justify-between auto-rows-auto gap-4">
     <BoardTopCard/>
      <BoardData/>
    </div>
  );
};

export default Dashboard;
