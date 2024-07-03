import React from 'react'
import { Container } from 'react-bootstrap'
import Hero from '../../Assets/asset HERO.png'
import './firstSection.css'
const FirstSection = () => {
    return (
        <>
            <Container>
                <div className='row '>

                    <div className='col-6'>
                        <p>Navigating<span className='gradientColor'> Legal Waters</span>, Securing Your Tomorrow</p>
                    </div>
                    <div className='col-6'>
                        <img src={Hero}/>
                    </div>

                </div>

                
            </Container>
        </>
    )
}

export default FirstSection
