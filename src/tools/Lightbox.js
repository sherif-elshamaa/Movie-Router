import { React, useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import ReactStars from "react-stars";
import movies from "../Movies/MoviesDatabase";
import ViewCard from "./ViewCard";

function Lightbox({ show, setShow }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClear = () => {
    setTitle("");
    setDescription("");
    setRating(0);
    setPosterURL("");
  };

  const len = movies.length + 1;
  const [id] = useState(String(len));
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [rating, setRating] = useState(0);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const onTitle = ({ target: { value } }) => setTitle(value);
  const onDescription = ({ target: { value } }) => setDescription(value);
  const onPosterURL = ({ target: { value } }) => setPosterURL(value);
  const onVideoURL = ({ target: { value } }) => setVideoURL(value);

  const handleAddMovie = () => {
    const newMovie = {
      id: id,
      title: title,
      description: description,
      posterURL: posterURL,
      videoURL: videoURL,
      rating: rating,
    };
    movies.push(newMovie);
    setShow(false);
    setTitle("");
    setDescription("");
    setRating(0);
    setPosterURL("");
  };

  return (
    <>
      <Button
        variant="light"
        size="sm"
        style={{ marginLeft: "10px", marginTop: "-5px" }}
        onClick={handleShow}
      >
        Add your favorite movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your favorite movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ViewCard
            title={title}
            description={description}
            posterURL={posterURL}
            rating={rating}
          />
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Insert title:
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  placeholder="Movie Title...."
                  value={title}
                  onChange={onTitle}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">
                Insert description:
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description..."
                  value={description}
                  onChange={onDescription}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">
                Insert posterURL:
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="text"
                  placeholder="Ex: https://via.placeholder.com/150"
                  value={posterURL}
                  onChange={onPosterURL}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">
                Insert videoURL:
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="text"
                  placeholder="Ex: https://www.youtube.com/embed/*******"
                  value={videoURL}
                  onChange={onVideoURL}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4">
                Insert rate:
              </Form.Label>
              <Col sm="8">
                <ReactStars
                  count={10}
                  onChange={ratingChanged}
                  size={24}
                  color={"#ffd700"}
                  value={rating}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Lightbox;
