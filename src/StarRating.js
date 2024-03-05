import React, { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState("");

  const handleStarClick = (index) => {
    switch (index) {
      case 0:
        setRating("Bad");
        break;
      case 1:
        setRating("Fair");
        break;
      case 2:
        setRating("Good");
        break;
      case 3:
        setRating("Very Good");
        break;
      case 4:
        setRating("Perfect");
        break;
      default:
        setRating("");
    }
  };

  return (
    <>
    
        <Row className="justify-content-center">
          <Col md={4}>
            <Form.Group>
              <Card className="h-100">
                <Card.Body className="py-2 flex-grow-0">
                  <div className="card-title-group">
                    <h5 className="card-title">
                      Please Rate the Quality of the Call
                    </h5>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div className="d-flex flex-column flex-sm-row-reverse align-items-sm-center justify-content-sm-between">
                    <div className="card-title mb-0 mt-4 mt-sm-0">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          onClick={() => handleStarClick(index)}
                          color={
                            index < ratingToIndex(rating)
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                          size={30}
                          style={{ cursor: "pointer" }}
                        />
                      ))}
                      <p>Please Rate our driver: {rating}</p>
                    </div>
                  </div>
                  {/* <Button variant="outline-primary">Friendly</Button>{" "}
              <Button variant="outline-secondary">Great Navigation</Button>{" "}
              <Button variant="outline-success">Safe driving</Button>{" "}
              <Button variant="outline-warning">Smart</Button>{" "}
              <Button variant="outline-warning">Good Communication</Button>{" "} */}
                </Card.Body>
              </Card>
              <Row md="6">
                <Col md="6">
                  {" "}
                  <Button type="submit" class="btn btn-primary btn-rounded" onClick={() => alert("Thank you")}>
                    Not Now{" "}
                  </Button>{" "}
                  <Button type="submit"  class="btn btn-primary btn-rounded" onClick={() => alert("Submitted")}>
                    Submit{" "}
                  </Button>{" "}
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
    
    </>
  );
};

export default StarRating;

function ratingToIndex(rating) {
  switch (rating) {
    case "Bad":
      return 1;
    case "Fair":
      return 2;
    case "Good":
      return 3;
    case "Very Good":
      return 4;
    case "Perfect":
      return 5;
    default:
      return 0;
  }
}
