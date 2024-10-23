import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// display: grid;
//   // saying the first column should be 26rem and then the next one should be the rest of the page - 1 fractional unit (this is used to define the columns so this 26rem will be for the sidebar)
//   grid-template-columns: 26rem 1fr;
//   /* same thing as above with the columns but the first row is going to be auto so fit the content and the rest is just the rest so 1 fractional unit. This is for the header */
//   grid-template-rows: auto 1fr;
//   height: 100vh;
function AppLayout() {
  return (
    // <div className="grid-cols-2 grid-rows-2 auto h-max"> </div>
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default AppLayout;
