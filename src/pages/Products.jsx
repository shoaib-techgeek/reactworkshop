import React, { useState, useEffect } from "react";
import { Button, Table, Col, Row, Card, Badge } from "react-bootstrap";
import products from "../data/products.json";

function Products() {
  const [productsData, setproductsData] = useState([]);

  useEffect(() => {
    console.log("Called");

    // var products = called
    // productsData = products

    // ADDDDDD
    setproductsData(products);
  }, []);

  const deleteProducts = (productId) => {
    console.log(productId);

    var prods = productsData.filter(
      (product) => product.productId != productId
    );
    console.log(prods);
    setproductsData(prods);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* map */}
          {/* for(int i = 0; i <products.length;i++) */}
          {/* products[i].productSalesPrice */}
          {productsData.map((product) => (
            <tr>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.productSalePrice}</td>
              <td>{product.productQty}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  style={{ marginRight: "5px" }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => deleteProducts(product.productId)}
                  variant="danger"
                  size="sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row>
        {productsData.map((product) => (
          <Col lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Badge
                  className="mb-2"
                  bg={product.productQty > 0 ? "primary" : "danger"}
                >
                  {/* Conditional Rendering */}
                  {/* if(productQty>0){
                    <p>In Stock</p>
                  }else{
                    <p>Out of Stock</p>
                  } */}

                  {product.productQty > 0 ? "In Stock" : "Out of Stock"}
                </Badge>
                <br></br>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
