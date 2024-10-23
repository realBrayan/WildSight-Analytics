import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import UploadImage from "./pages/UploadImage";
import SpeciesMap from "./pages/SpeciesMap";
import Database from "./pages/Database";
import Analytics from "./pages/Analytics";
import Leaderboard from "./pages/Leaderboard";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* layout route */}
        <Route element={<AppLayout />}>
          {/* index route */}
          <Route index element={<Navigate replace to="dashboard" />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="uploadImage" element={<UploadImage />}></Route>
          <Route path="speciesMap" element={<SpeciesMap />}></Route>
          <Route path="database" element={<Database />}></Route>
          <Route path="analytics" element={<Analytics />}></Route>
          <Route path="leaderboard" element={<Leaderboard />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>

        <Route path="login" element={<Login />}></Route>

        {/* error route */}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
