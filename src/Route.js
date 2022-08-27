import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";

function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Home page */}
      <Route exact path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default MyRoutes;
