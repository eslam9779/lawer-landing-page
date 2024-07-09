import React from 'react'
import './home.css'
import Header from './../../sections/header/Header';
import FirstSection from './../../sections/first_section/FirstSection';

const Home = () => {
  return (
    <div className='container_div' >
       <Header/>
       <FirstSection/>
    </div>
  )
}

export default Home
