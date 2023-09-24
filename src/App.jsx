import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/appLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
