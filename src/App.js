import Home from "./pages/home/Home";
import { createContext, useState } from "react";
import Navbar from "./components/navbar/Navbar";

export const BgContext = createContext(null);

function App() {

  const [bg, setBg] = useState("#ffffff");

  // Toggle background
  const toggleBg = (newColour) => {
    setBg(newColour);
    // console.log(colour);
  };


  
  return (
    <BgContext.Provider value={{bg, toggleBg}} >
    <div className="page" style={{backgroundColor: bg}}> 
    <Navbar toggle={toggleBg} />  
     <Home />
    </div>
    </BgContext.Provider>
  );
}

export default App;
