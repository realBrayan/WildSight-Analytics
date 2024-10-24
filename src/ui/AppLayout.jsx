import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

function AppLayout() {
  // expanded state - needs to be here to adjust the app layout div size. ideally for refactor we do context or reducer.
  const [expanded, setExpanded] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div
      className={`grid grid-cols-[${expanded ? "18.5rem" : "4.5rem"}_1fr] w-full h-screen grid-rows-[auto_1fr]`}
    >
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <div className="col-start-2 row-start-1 row-span-2 px-10 py-4">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
