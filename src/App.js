import Home from "./pages/home/Home";
import { createContext, useState } from "react";
import Navbar from "./components/navbar/Navbar";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = (props) => {
    setTheme((curr) => (curr === "light" ? props :"light"));
    console.log(props);
  };


  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
    <div className="page" style={{backgroundColor: theme}}> 
    <Navbar toggle={toggleTheme} />  
     <Home />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
