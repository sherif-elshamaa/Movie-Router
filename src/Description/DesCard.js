import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../Movies/MoviesDatabase";
import ReactStars from "react-stars";
import { Breadcrumb, Divider, Item, Button, Icon } from "semantic-ui-react";

function DesCard() {
  const videoPlaceHolder = "https://www.youtube.com/embed/PKtnafFtfEo";
  const { id } = useParams();
  const movie = movies.filter((m) => m.id === id);
  const nextmovies = movies.map((m) => m);
  const [nextId, setNextId] = useState(nextmovies[0].id);
  const [index, setIndex] = useState(1);

  
  function next(e) {
    setNextId(nextmovies[index].id);
    if (index < nextmovies.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <>
      {movie.length > 0 ? (
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <React.Fragment>
            <Breadcrumb size="huge">
              <Breadcrumb.Section>
                <Link to="/">Movies</Link>
              </Breadcrumb.Section>
              <Breadcrumb.Divider icon="right chevron" />
              <Breadcrumb.Section>
                {movie ? movie[0].title : " "}
              </Breadcrumb.Section>
            </Breadcrumb>
            <Divider hidden />
          </React.Fragment>
          <Item.Group>
            <Item
              style={{
                borderStyle: "groove",
                padding: "10px 10px",
                marginBottom: "10px",
              }}
            >
              <Item.Image size="medium" src={movie[0].posterURL} />
              <Item.Content>
                <Item.Header>{movie[0].title}</Item.Header>
                <Item.Meta>Description</Item.Meta>
                <Item.Description>{movie[0].description}</Item.Description>
                <Item.Extra
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ReactStars
                    count={10}
                    edit={false}
                    value={movie[0].rating}
                    size={24}
                    color2={"#ffd700"}
                  />
                  <p>{movie[0].rating}/10</p>
                  <iframe
                    width="560"
                    height="315"
                    src={
                      movie[0].videoURL ? movie[0].videoURL : videoPlaceHolder
                    }
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
          <Button
            icon
            labelPosition="right"
            style={{ float: "right" }}
            onClick={next}
            as={Link}
            to={`/${nextId}`}
          >
            Next
            <Icon name="right arrow" />
          </Button>
        </div>
      ) : (
        <>
          <React.Fragment>
            <Breadcrumb size="huge">
              <Breadcrumb.Section>
                <Link to="/">Movies</Link>
              </Breadcrumb.Section>
              <Breadcrumb.Divider icon="right chevron" />
              <Breadcrumb.Section></Breadcrumb.Section>
            </Breadcrumb>
            <Divider hidden />
          </React.Fragment>
          <h3>Not available</h3>
        </>
      )}
    </>
  );
}

export default DesCard;
