import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/appLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
