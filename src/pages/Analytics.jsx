import { LineGraph } from "../graphComponents/Line";
import HeaderMessage from "../ui/HeaderMessage";

function Analytics() {
  return (
    <>
      <HeaderMessage
        header={"Analytics"}
        description={"Analyze and predict movements"}
      />
      <div className="">
        <LineGraph />
      </div>
    </>
  );
}

export default Analytics;
