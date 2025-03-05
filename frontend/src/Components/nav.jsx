import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/#home"><strong>Security INC</strong></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="me-auto" href="/#home"><strong>Home</strong></Nav.Link>
                        <Nav.Link href="/login"><strong>Login</strong></Nav.Link>
                        <Nav.Link href="/register"><strong>Register</strong></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar
