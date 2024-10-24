import {
  LayoutDashboard,
  ImageUp,
  Map,
  Database,
  ChartNoAxesCombined,
  Medal,
  Settings,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

function MainNav({ expanded }) {
  return (
    <nav className="flex-1 px-3">
      <SidebarItem
        icon={<LayoutDashboard />}
        size={20}
        text="Dashboard"
        expanded={expanded}
        to="/dashboard"
      />
      {/* upload image */}
      <SidebarItem
        icon={<ImageUp />}
        size={20}
        text="Upload"
        expanded={expanded}
        to="/uploadImage"
      />
      {/* map */}
      <SidebarItem
        icon={<Map />}
        size={20}
        text="Map"
        expanded={expanded}
        to="speciesMap"
      />
      {/* Database */}
      <SidebarItem
        icon={<Database />}
        size={20}
        text="Database"
        expanded={expanded}
        to="/database"
      />
      {/* analytics */}
      <SidebarItem
        icon={<ChartNoAxesCombined />}
        size={20}
        text="Analytics"
        expanded={expanded}
        to="/analytics"
      />
      {/* medal */}
      <SidebarItem
        icon={<Medal />}
        size={20}
        text="Leaderboard"
        expanded={expanded}
        to="/leaderboard"
      />
      {/* settings */}
      <SidebarItem
        icon={<Settings />}
        size={20}
        text="Settings"
        expanded={expanded}
        to="/settings"
      />
    </nav>
  );
}

export default MainNav;
