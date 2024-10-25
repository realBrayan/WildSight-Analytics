import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from "react";

// sidebar context test
// const SidebarContext = React.createContext();

function AppLayout() {
  // expanded state - needs to be here to adjust the app layout div size. ideally for refactor we do context or reducer.
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      // ${expanded ? "18.5rem" : "4.5rem"}
      className={`grid grid-cols-[18.5rem_1fr] h-screen`}
    >
      {/* NEED A DIV HERE WRAPPING THE SIDEBAR IN ORDER FOR GRID TO DETECT IT AS AN OBJECT.*/}
      <div>
        <Sidebar expanded={expanded} setExpanded={setExpanded} />
      </div>

      <div className="px-10 py-4 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
