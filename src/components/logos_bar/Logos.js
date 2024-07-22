import React from 'react';
import './logos.css' ;
import logo1 from '../../Assets/logo 1.png'
import logo2 from '../../Assets/logo 2.png'
import logo3 from '../../Assets/logo 3.png'
import logo4 from '../../Assets/logo 3.png'
import logo5 from '../../Assets/logo 5.png'

const Logos = () => {
  return (
    <div className='logo mt-5 container'>
      <div className='logo_header'>
        <p>Already won against big players</p>
      </div>
      <div  className='logo_images mt-5'>

        <img src={logo1}/>
        <img src={logo2}/>
        <img src={logo3}/>
        <img src={logo4}/>
        <img src={logo5}/>
        </div>
    </div>
  )
}

export default Logos
