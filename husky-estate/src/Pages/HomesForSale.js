import React, { useEffect } from "react";
import { HomesForSale } from "../data";
import Navbar from "./../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const HomesDisplay = () => {
  const columnsPerRow = 4;

  const getColumnsForRow = () => {
    let items = HomesForSale.map((home) => {
      const { id, price, img, beds, baths, sqft, address, city, state, zip } =
        home;
      return (
        <Col>
          <Card key={id}>
            <Card.Body>
              <Card.Img variant="top" src={require("./../assets/" + img)} />
              <Card.Title>{price}/mon</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {beds} bd {baths} bath {sqft} sqft - Apartment for Sale
              </Card.Subtitle>
              <Card.Text>
                {address}, {city}, {state} {zip}
              </Card.Text>
              <Button variant="primary">View Property</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return items;
  };
  return (
    <>
      <Navbar />
      <Container>
        <Row xs={1} md={columnsPerRow}>
          {getColumnsForRow()}
        </Row>
      </Container>
    </>
  );
};

export default HomesDisplay;
