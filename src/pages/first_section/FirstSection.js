import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../../Assets/asset HERO.png'
import './firstSection.css'
const FirstSection = () => {
    return (
        <>
            <Container>
                <div className='row  first_section'>

                    <div className='col-6 home'>
                        <p className='p1' >Navigating<span className='gradientColor'> Legal Waters</span>, Securing Your Tomorrow</p>

                        <p className='p2'>We advocate for consumers and underrepresented parties, amplifying their voices and safeguarding their rights.</p>
                       <div className='home_btn'>
                            <button className='btn1'>Get Started</button>
                            <button className='btn2'> About Us</button>
                       </div>
                    </div>
                    <div className='col-6 home ' >
                        <img src={Hero}/>
                    </div>

                </div>

                
            </Container>
        </>
    )
}

export default FirstSection
