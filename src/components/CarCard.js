import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Card(card, imageUrl, body) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="../assets/car-pictures/Ford-Mustang-1969.jpg"
        />
        <Card.Body>
          <Card.Title>Ford Mustang</Card.Title>
          <Card.Text>nunc purus phasellus in felis donec semper</Card.Text>
          <button className="button onClick">
            <i className="fa fa-chevron-right"></i> View More
          </button>
          <button className="btn-add-to-cart">
            <i class="fa fa-shopping-cart"></i>
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Card;
