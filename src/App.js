import React, { useState } from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import LeftBar from './components/navbar/LeftBar'
import RightBar from './components/navbar/RightBar'
import Topbar from './components/navbar/Topbar'
import Counter from './pages/Counter'

function App() {
    const [loggedInUser, setloggedInUser] = useState("Ali")
    return (
        <div>
            {/* Navbar */}
            <Topbar />

            <Row>
                {/* Left Section */}
                <Col className="p-5" md={2} style={{ backgroundColor: "blue", color: "white" }}>
                    <LeftBar />
                </Col>
                {/* Main Section */}
                <Col className="p-5" md={8} style={{ textAlign: "center" }}>
                    <Counter userName={loggedInUser} />
                </Col>
                {/* Right Section */}
                <Col className="p-5" md={2} style={{ backgroundColor: "blue", color: "white" }}>
                    <RightBar />
                </Col>
            </Row>



        </div>


    )
}

export default App