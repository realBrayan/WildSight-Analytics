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
        {/* <h1>
          <span>🏆</span> Leaderboard
        </h1> */}

        <table className="w-max-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-28 p-3 text-sm font-semibold tracking-wide text-left">
                Place
              </th>
              <th className="w-60 p-3 text-sm font-semibold tracking-wide text-left">
                User
              </th>
              <th className="w-28 p-3 text-sm font-semibold tracking-wide text-left">
                Uploads
              </th>
            </tr>
          </thead>

          <tbody className="border">
            <LeaderboardEntry
              bgColor="yellow-300"
              place={1}
              name={"John Doe"}
              uploads={5000}
            />

            <LeaderboardEntry
              bgColor="slate-700"
              place={2}
              name={"Jane Doe"}
              uploads={58}
            />

            <LeaderboardEntry
              bgColor="yellow-900"
              place={3}
              name={"Jill Doe"}
              uploads={51}
            />

            <LeaderboardEntry
              bgColor="neutral-50"
              place={4}
              name={"Jack Doe"}
              uploads={1}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Leaderboard;
