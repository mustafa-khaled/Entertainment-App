import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/appLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import Search from "./pages/Search";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="/:mediaType/:id" element={<Details />} />
            <Route path="search/:query" element={<Search />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
