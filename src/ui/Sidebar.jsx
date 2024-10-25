import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Sidebar({ expanded, setExpanded }) {
  // expand sidebar state
  // const [expanded, setExpanded] = useState(true);
  // 3 dot menu state
  const [menuVisible, setMenuVisible] = useState(false);

  // const { expanded, changeExpanded } = useContext(SidebarContext);

  return (
    <aside className="h-screen min-w-[4.5rem] max-w-[18.5rem] fixed ">
      <nav className="h-full inline-flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* logo */}
          <Logo w={expanded ? 32 : 0} />

          {/* expand button */}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* main navigation - sidebar items */}
        <MainNav expanded={expanded} />

        {/* user profile */}
        <div className="border-t flex py-3 px-4">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            {/* <MoreVertical size={20} /> */}
            <button onClick={() => setMenuVisible((prev) => !prev)}>
              <MoreVertical size={20} />
            </button>

            {/* Pop-up menu -> refactor to fix it and maybe remove the dots and add a log out button in the icons part. Also change to appear on hover or click somewhere else will get rid of the popup.*/}
            {menuVisible && (
              <div
                className="absolute bottom-6 bg-white shadow-lg rounded-md p-2 w-20"
                style={{ left: "16.75rem" }}
              >
                <ul>
                  <button className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                    Log out
                  </button>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
}
