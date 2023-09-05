import React from "react";
import Card from "react-bootstrap/Card";

export const Cards = ({ web }) => {
  return (
    <Card style={{ width: "15rem", marginRight: ".5rem" }}>
      <a href={web.link} target="_blank" rel="noopener noreferrer">
        <Card.Img
          style={{ cursor: "pointer" }}
          className="img-fluid"
          variant="top"
          src={web.image}
        />
      </a>
      <Card.Body>
        <Card.Title>{web.title}</Card.Title>
        <Card.Text>{web.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
