import './Navbar.css';
import { FaMoon, FaUndo } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = (props) => {
  const [colour,setColour] = useState('#ffffff');
  const handleColour = (e) =>{
    props.toggle(e.target.value);
    console.log(e.target.value);
  }

  const toggleColour = () =>{
    let newColour = '#' + Math.random(16).toString().slice(2,8)  
    setColour(newColour);
    props.toggle(newColour);
    //  console.log(newColour);
  }

  return (
    <div className='navbar'>
        <h3 className='brand'>My Colour Changer</h3>

        <div className='colour'>Colour: <input type="color" value={colour} onChange={(e) => handleColour(e)} /> </div>

    <ul className='action'>
        <li><FaMoon onClick={toggleColour} className='action-icon' title='Toggle colour' /></li>
        <li><FaUndo className='action-icon' title='Reset colour' /> </li>
        </ul>
    </div>
  )
}

export default Navbar