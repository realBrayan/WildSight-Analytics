import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

function AppLayout() {
  // expanded state - needs to be here to adjust the app layout div size. ideally for refactor we do context or reducer.
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={`grid grid-cols-[${expanded ? "18.5rem" : "4.5rem"}_1fr] grid-rows-[auto_1fr] h-screen`}
    >
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <div className="col-start-2 row-start-1 row-span-2 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
