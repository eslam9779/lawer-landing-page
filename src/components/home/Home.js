import React from 'react'
import './home.css'
import Header from './../../pages/header/Header';
import FirstSection from './../../pages/first_section/FirstSection';

const Home = () => {
  return (
    <div className='container_div' >
       <Header/>
       <FirstSection/>
    </div>
  )
}

export default Home
