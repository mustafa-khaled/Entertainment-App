import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex items-start gap-[20px]">
      <div>
        <Sidebar />
      </div>
      <main className="min-h-[100vh] w-full bg-green-400">
        {/* <Outlet /> */}
        <h1>some</h1>
      </main>
    </div>
  );
}

export default AppLayout;
