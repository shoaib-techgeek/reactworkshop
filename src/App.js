import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import LeftBar from './components/navbar/LeftBar'
import RightBar from './components/navbar/RightBar'
import Topbar from './components/navbar/Topbar'
import Counter from './pages/Counter'
import products from './data/products.json'
import Products from './pages/Products';

// Commit -> Added Facebook Like Functionality
function App() {
    const [loggedInUser, setloggedInUser] = useState("Ahmed")
    const [productsData, setproductsData] = useState([])

    // useEffect(() => {
    //     console.log(products)
    //     setproductsData(products)
    // }, [])
    // products.filter((p) => p.productBarcode == barcode)
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
                    <h1>Shoaib Ali</h1>
                    <Products />
                </Col>



                {/* Right Section */}
                <Col className="p-5" md={2} style={{ backgroundColor: "blue", color: "white" }}>
                    <RightBar />
                </Col>
            </Row>
            <Container>
                {/* <Row>
                    <ul>
                        {products?.map((product) => (
                            <li key={product.id}>
                                {product.productName}
                            </li>
                        ))}
                    </ul>
                </Row> */}
            </Container>
        </div>
    )
}

export default App