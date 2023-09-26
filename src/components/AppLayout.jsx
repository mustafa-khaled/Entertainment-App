import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Container from "./Container";
import { useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";
import { useDispatch } from "react-redux";
import { gitApiConfiguration } from "../store/features/homeSlice";

function AppLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(gitApiConfiguration(url));
    });
  };

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
