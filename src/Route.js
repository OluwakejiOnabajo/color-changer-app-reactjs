import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/home/Home";

function MyRoutes() {

  // Set default backgound colour
  const [bgColour, setBgColour] = useState("#ffffff");

  return (
    <BrowserRouter>
    <Routes>
      {/* Home page */}
      <Route exact path="/" element={<Home bgColour={bgColour} setBgColour={setBgColour}  />} />
    </Routes>
  </BrowserRouter>
  );
}

export default MyRoutes;
