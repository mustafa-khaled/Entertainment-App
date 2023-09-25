import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Container from "./Container";

function AppLayout() {
  return (
    <div className="bg-colorDarkBlue pt-[40px]">
      <Container styles="flex flex-col  items-center gap-[20px] md:flex-row md:items-start">
        <div>
          <Sidebar />
        </div>
        <main className="min-h-[calc(100vh-40px)] w-full p-[20px] text-colorWhite">
          <Outlet />
        </main>
      </Container>
    </div>
  );
}

export default AppLayout;
