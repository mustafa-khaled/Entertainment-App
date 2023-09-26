import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { gitApiConfiguration, gitGenres } from "../store/features/homeSlice";
import Sidebar from "./sidebar/Sidebar";
import Container from "./Container";
import Footer from "./Footer";

function AppLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    genresCall();
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

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    endPoints?.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data?.map(({ genres }) => {
      return genres?.map((item) => (allGenres[item.id] = item));
    });
    dispatch(gitGenres(allGenres));
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
      <Footer />
    </div>
  );
}

export default AppLayout;
