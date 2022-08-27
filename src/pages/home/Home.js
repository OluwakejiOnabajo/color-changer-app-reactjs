import './Home.css';
import { createContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

// export const BgContext = createContext(null);

function Home() {

  // Set default backgound colour
  const [bgColour, setBgColour] = useState("#ffffff");

  // // Toggle background colour
  // const toggleBgColour = (newColour) => {
  //   setBgColour(newColour);
  //   // console.log(colour);
  // };

  
  return (
    // <BgContext.Provider value={{bgColour, setBgColour}} >
    <div className="page" style={{backgroundColor: bgColour}}> 

    {/* Import navavigation bar */}
    <Navbar setBgColour={setBgColour} bgColour={bgColour} />  

    {/* footer */}
    <p className='comment'>Made with <span>❤</span> by <Link to="/" onClick={() => { window.location.href= 'https://github.com/OnabajoOluwakeji'; }} >Oluwakeji Onabajo</Link></p>
    </div>
    // </BgContext.Provider>
  );
}

export default Home;
