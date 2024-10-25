import LeaderboardEntry from "../features/leaderboard/LeaderboardEntry";
import HeaderMessage from "../ui/HeaderMessage";

function Leaderboard() {
  return (
    <>
      <HeaderMessage
        header={"Leaderboard"}
        description={"Compete to be the top uploader"}
      />
      <div>
        <table className="w-max-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-28 p-3 text-sm font-semibold tracking-wide text-center">
                Place
              </th>
              <th className="w-60 p-3 text-sm font-semibold tracking-wide text-center">
                User
              </th>
              <th className="w-28 p-3 text-sm font-semibold tracking-wide text-center">
                Uploads
              </th>
            </tr>
          </thead>

          <tbody className="border">
            <LeaderboardEntry
              bgColor="bg-yellow-200"
              place={1}
              name={"John Doe"}
              uploads={5000}
            />

            <LeaderboardEntry
              bgColor="bg-slate-200"
              place={2}
              name={"Umang Vadhar"}
              uploads={58}
            />

            <LeaderboardEntry
              bgColor="bg-orange-200"
              place={3}
              name={"Ben Duong"}
              uploads={51}
            />

            <LeaderboardEntry
              bgColor="bg-neutral-50"
              place={4}
              name={"Derian Godoy Chavez"}
              uploads={1}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Leaderboard;
