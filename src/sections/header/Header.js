import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../Assets/Logo DEMO.png'
import circle from '../../Assets/Circle CTA.png'
import './header.css'
const Header = () => {
    return (
        <>

            <Navbar expand="lg" >
                <Container >
                    <Navbar.Brand href="#" className='mx-5'>
                        <img src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        >
                            <Nav.Link href="#home">Our Services</Nav.Link>
                            <Nav.Link href="#link">About Us</Nav.Link>
                            <Nav.Link href="#link" >Contacy Us</Nav.Link>
                            <Nav.Link href="#link">More</Nav.Link>

                        </Nav>
                        <Nav.Link href="#link" className='mt-2'>
                            <span >Sign Up</span> <img src={circle} width={"40px"}></img>
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <button>Call Us</button>
                        </Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
