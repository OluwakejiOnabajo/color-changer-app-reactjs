import './Navbar.css';
import { FaMoon, FaUndo } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = (props) => {
const {setBgColour, bgColour } = props;
  
  //Get users preferred colour
  // const handleColour = (e) =>{
  //   bg.toggle(e.target.value);
  //   // console.log(e.target.value);
  // }

    // generate random colours for user
  const toggleBgColour = () =>{
    let newColour = '#' + Math.random(16).toString().slice(2,8)  
    setBgColour(newColour);
    //  console.log(newColour);
  }

  const resetBgColour = () =>{
    // Reset colour to default state
    setBgColour();
  }

  return (
    <div className='navbar'>
        <h3 className='brand'>My Colour Changer</h3>

        <div className='colour'>Colour: <input type="color" value={bgColour} onChange={(e) => setBgColour(e.target.value)} /> <small> { bgColour }</small> </div>

    <ul className='action'>
        <li><FaMoon onClick={toggleBgColour} className='action-icon' title='Toggle colour' /></li>
        <li><FaUndo onClick={resetBgColour} className='action-icon' title='Reset colour' /> </li>
        </ul>
    </div>
  )
}

export default Navbar