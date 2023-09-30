import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiConfig } from "../store/features/homeSlice";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./Footer";
import Loader from "./Loader";

function AppLayout() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.home.loading);

  useEffect(() => {
    dispatch(fetchApiConfig());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="bg-colorDarkBlue pt-[40px]">
      <div className="container mx-auto flex flex-col  items-center gap-[20px] md:flex-row md:items-start">
        <div>
          <Sidebar />
        </div>
        <main className="min-h-[calc(100vh-40px)] w-full p-[10px] text-colorWhite">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
