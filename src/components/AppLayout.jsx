import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Container from "./Container";

function AppLayout() {
  return (
    <div className="bg-colorDarkBlue pt-[40px]">
      <Container styles="flex md:items-start  items-center gap-[20px] md:flex-row flex-col">
        <div>
          <Sidebar />
        </div>
        <main className="bg-colorSemiDarkBlue min-h-[1000vh] w-full">
          {/* <Outlet /> */}
          <h1>some</h1>
        </main>
      </Container>
    </div>
  );
}

export default AppLayout;
