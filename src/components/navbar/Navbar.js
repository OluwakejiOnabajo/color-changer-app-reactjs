import './Navbar.css';
import { FaMoon, FaUndo } from 'react-icons/fa';

const Navbar = (props) => {
const {bgColour, setBgColour } = props;

    // generate random colours for user
  const toggleBgColour = () =>{
    let newColour = '#' + Math.random(16).toString().slice(2,8)  
    setBgColour(newColour);
    //  console.log(newColour);
  }

  const resetBgColour = () =>{
    // Reset colour to default state
    setBgColour('#ffffff');
  }

  return (
    <div className='navbar'>
        <h3 className='brand'>My Colour Changer</h3>
        
        {/* Select colour manually */}
        <div className='colour'>Colour: <input type="color" value={bgColour} onChange={(e) => setBgColour(e.target.value)} /> 
        <small> { bgColour }</small> </div>

    <ul className='action'>
      {/* Select colour automatically */}
        <li><FaMoon onClick={toggleBgColour} className='action-icon' title='Toggle colour' /></li>
        {/* Reset color */}
        <li><FaUndo onClick={resetBgColour} className='action-icon' title='Reset colour' /> </li>
        </ul>
    </div>
  )
}

export default Navbar