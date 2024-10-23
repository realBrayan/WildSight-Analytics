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
        active
        expanded={expanded}
      />
      {/* upload image */}
      <SidebarItem
        icon={<ImageUp />}
        size={20}
        text="Upload Image"
        expanded={expanded}
      />
      {/* map */}
      <SidebarItem icon={<Map />} size={20} text="Map" expanded={expanded} />
      <SidebarItem
        icon={<Database />}
        size={20}
        text="Database"
        expanded={expanded}
      />
      {/* analytics */}
      <SidebarItem
        icon={<ChartNoAxesCombined />}
        size={20}
        text="Analytics"
        expanded={expanded}
      />
      {/* medal */}
      <SidebarItem
        icon={<Medal />}
        size={20}
        text="Leaderboard"
        expanded={expanded}
      />
      {/* settings */}
      <SidebarItem
        icon={<Settings />}
        size={20}
        text="Settings"
        expanded={expanded}
      />
    </nav>
  );
}

export default MainNav;
