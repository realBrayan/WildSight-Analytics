import HeaderMessage from "../ui/HeaderMessage";
import MiniMap from "../features/MapFeatures/MiniMap";
import SpeciesMap from "./SpeciesMap";

function Dashboard() {
  return (
    <>
      <HeaderMessage
        textColor={"text-wsgreen"}
        header={"Welcome back, John!"}
        description={"Take a look at your dashboard"}
        
      />
      <div className="grid grid-cols-3 gap-x-2 gap-y-2 grid-flow-row-dens">
        <div className="bg-Amber rounded-lg shadow-xl min-h-[24rem] col-span-2 row-span-1 text-center ">
          <MiniMap/>
        </div>
        <div className="bg-Amber rounded-lg shadow-xl min-h-[12rem] col-span-1 text-center">
          leaderboard
        </div>
        <div className="bg-Amber rounded-lg shadow-xl min-h-[12rem] col-span-2 text-center">

        </div>
        <div className="bg-Amber rounded-lg shadow-xl min-h-[12rem] col-span-1 text-center">
          recent python sightings
        </div>
      </div>
    </>
  );
}

export default Dashboard;
