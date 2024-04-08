import BoardTopCard from "../data/BoardTopCard";
import BoardData from "../data/BoardData";

const Dashboard = () => {

  return (
    <div id="main" className="grid auto-rows-auto gap-2">
     <BoardTopCard/>
      <BoardData/>
    </div>
  );
};

export default Dashboard;
