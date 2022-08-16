import './Home.css';
import { createContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

export const BgContext = createContext(null);

function Home() {

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
    <p className='comment'>Made with <span>❤</span> by <Link to="/" onClick={() => { window.location.href= 'https://github.com/OnabajoOluwakeji'; }} >Oluwakeji Onabajo</Link></p>
    </div>
    </BgContext.Provider>
  );
}

export default Home;
