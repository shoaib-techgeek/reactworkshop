import React from 'react'
import { Col, Button, Row, Nav, Navbar, Container } from 'react-bootstrap';

function App() {

    return (
        <>
            {/* Navbar */}
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {/* Main Section */}
            <Row className="mt-2" style={{ color: 'white' }}>
                {/* Left Section */}
                <Col className="p-5" xs='2' style={{ backgroundColor: "red" }}>
                    <h5>Left Section</h5>
                </Col>

                {/* Mid Section */}
                <Col className="p-5" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "blue" }}>0</h2>
                    <Button className="m-2">+</Button>
                    <Button>-</Button>
                    <Button className="m-2" variant="danger">Reset</Button>
                </Col>

                {/* Right Section */}
                <Col className="p-5" xs='2' style={{ backgroundColor: "red" }}>
                    <h5>Right Section</h5>
                </Col>
            </Row>
        </>
    )
}
export default App