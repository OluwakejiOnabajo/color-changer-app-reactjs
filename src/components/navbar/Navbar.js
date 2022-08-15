import './Navbar.css';
import { FaMoon, FaUndo } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = (bg) => {
  const [colour,setColour] = useState('#ffffff');
  
  //Get users preferred colour
  const handleColour = (e) =>{
    bg.toggle(e.target.value);
    // console.log(e.target.value);
  }

    // generate random colours for user
  const toggleColour = () =>{
    let newColour = '#' + Math.random(16).toString().slice(2,8)  
    setColour(newColour);
    bg.toggle(newColour);
    //  console.log(newColour);
  }

  const resetColour = () =>{
    // Reset colour to default state
    bg.toggle();
  }

  return (
    <div className='navbar'>
        <h3 className='brand'>My Colour Changer</h3>

        <div className='colour'>Colour: <input type="color" value={colour} onChange={(e) => handleColour(e)} /> <small> { colour }</small> </div>

    <ul className='action'>
        <li><FaMoon onClick={toggleColour} className='action-icon' title='Toggle colour' /></li>
        <li><FaUndo onClick={resetColour} className='action-icon' title='Reset colour' /> </li>
        </ul>
    </div>
  )
}

export default Navbar