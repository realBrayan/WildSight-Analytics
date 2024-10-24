import HeaderMessage from "../ui/HeaderMessage";

function Settings() {
  return (
    <>
      <HeaderMessage
        header={"Settings"}
        description={"Edit account information"}
      />
      <div className="grid grid-cols-3 gap-x-2 gap-y-2 grid-flow-row-dense">
        <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px]"></div>
        <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px] col-span-3"></div>
        <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px] row-span-2"></div>
        <div className="bg-red-500 rounded-lg shadow-xl min-h-[50px]"></div>
      </div>
    </>
  );
}

export default Settings;
