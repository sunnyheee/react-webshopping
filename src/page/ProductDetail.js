import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("사이즈 선택");

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/sunnyheee/react-webshopping/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };
  return (
    <Container className="product-detail">
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt={product?.title} />
        </Col>
        <Col>
          <h3 className="title">{product?.title}</h3>
          <h4 className="choice">
            {product?.choice === true ? "Conscious choice" : ""}
          </h4>
          <p className="price">
            <span>₩</span>
            {product?.price}
          </p>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="custom-dropdown-toggle"
            >
              {selectedSize}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {["S", "M", "L"].map((size) => (
                <Dropdown.Item
                  key={size}
                  className={
                    selectedSize === size ? "selected-dropdown-item" : ""
                  }
                  onClick={() => handleSelectSize(size)}
                >
                  {size}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button className="add-btn" variant="danger">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
