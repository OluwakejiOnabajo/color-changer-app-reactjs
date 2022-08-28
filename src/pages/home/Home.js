import './Home.css';
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

function Home(props) {

  // Get states from props
  const {bgColour, setBgColour} = props;
  
  return (
    <div className="page" style={{backgroundColor: bgColour}}> 
    {/* Import navavigation bar */}
    <Navbar bgColour={bgColour} setBgColour={setBgColour} />  

    {/* footer */}
    <p className='comment'>Made with <span>❤</span> by <Link to="/" onClick={() => { window.location.href= 'https://github.com/OnabajoOluwakeji'; }} >Oluwakeji Onabajo</Link></p>
    </div>
  );
}

export default Home;
