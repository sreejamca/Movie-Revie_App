import React,{useRef, useState}from 'react'
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";
import {Stack, Rating} from "@mui/material"

function Review() {
    // State variables for form inputs and reviews

    const [name, setName] = useState("");
    const [stars, setStars] = useState(null);
    const[movieName,setMovieName]=useState("");
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);
    // Create ref 
  const valueRef = useRef();
  // Initialize ref
  valueRef.current = stars;
    // Function to reset the form inputs

      const resetForm = (e) => {
        e.preventDefault();
    
        setReview("");
        setName("");
        setStars(null);
        setMovieName("");
      };
      // Function to submit a new review

      const submitReview = (e) => {
        e.preventDefault();
        const newReview = {
          name: name,
          movieName: movieName,
          rating: stars,
          description: review,
        };
    
        setReviews([...reviews, newReview]);
        resetForm(e);
      };
    
      const deleteReview = (e, index) => {
        e.preventDefault();
    
        const clone = [...reviews];
        const newState = clone.filter((x, i) => i !== index);
        setReviews(newState);
      };
    
      return (
        <Container fluid className="App text-light text-center">
          <Col md={{ span: 6, offset: 3 }}>
             <h1>Add Review</h1>
             <Row className="mt-5">
              <Col>
              <Form.Group>  
                  <Form.Control
                    as="input"
                    placeholder='Type your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
              <Form.Group>  
                  <Form.Control
                    as="input"
                    placeholder='Type the movie name'
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row> 
            <Row className="mt-5">
              <Col>
              <Rating value={stars} onChange={(event, newValue)=>{
                setStars(newValue);
                // Get the latest state
          console.log(valueRef.current);
                console.log("stars:"+stars);
            }}></Rating>
              </Col>
            </Row> 
            <Row className="mt-5">
              <Col>
                <Form.Group>  
                  <Form.Control
                    as="textarea"
                    rows={3}
                    cols={150}
                    placeholder='leave your comment here'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <Button variant="info" onClick={(e) => resetForm(e)}>
                  Cancel
                </Button>
                <Button
                  variant="success"
                  onClick={(e) => submitReview(e)}
                  disabled={review === ""}
                >
                  submit
                </Button>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                {reviews.map((r, rIndex) => {
                  return (
                    <Card className="mt-3 mb-3 text-dark">
                    <p>Movie Name--{r.movieName}</p>
                     <p>Reviewer Name--{r.name}</p>
                      <Card.Body>
                        {
                        <Rating value={r.rating}></Rating>
                        }
                        <p>Review--{r.description}</p>
                      </Card.Body>
                      <Card.Footer>
                        <Button
                          variant="danger"
                          onClick={(e) => deleteReview(e, rIndex)}
                        >
                          Delete
                        </Button>
                      </Card.Footer>
                    </Card>
                  );
                })}
              </Col>
            </Row>
          </Col>
        </Container>
      );
    }
    
    export default Review;