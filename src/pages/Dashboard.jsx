import { useNavigate } from "react-router-dom";
import MiniMap from "../features/MapFeatures/MiniMap";
import HeaderMessage from "../ui/HeaderMessage";
import Leaderboard from "./Leaderboard";

function Dashboard() {
  let navigate = useNavigate();

  function onLeaderboardClick() {
    navigate("/leaderboard");
  }

  return (
    <>
      {/* <HeaderMessage
        header={"Welcome back, John!"}
        description={"Take a look at your dashboard"}
      /> */}
      <div className="flex items-center justify-center mt-24 mb-[6rem]">
        {/* <HeaderMessage
          header={"Upload Image"}
          description={"Report invasive species"}
          /> */}
        <div>
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">
            Welcome back, John!
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            See the dashboard
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-2 gap-y-2 grid-flow-row-dens">
        <div className="rounded-lg shadow-xl min-h-[32rem] col-span-2 row-span-1 text-center ">
          <MiniMap onClickRedirect={true} />
        </div>
        <div
          className="rounded-lg shadow-xl min-h-[12rem] col-span-1 text-center px-5 bg-slate-300"
          onClick={onLeaderboardClick}
        >
          <Leaderboard />
        </div>
        {/* <div className="rounded-lg shadow-xl min-h-[12rem] col-span-1 text-center w-[30rem]">
          <img src="https://media.istockphoto.com/id/500925165/photo/asian-python-in-river-in-nepal.jpg?s=612x612&w=0&k=20&c=wtx4osa_D07PK5Ue67wik3No7o9x6JOdiRnhLKJRNOo="></img>
        </div> */}
      </div>
    </>
  );
}

export default Dashboard;
