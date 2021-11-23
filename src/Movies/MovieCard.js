import React from "react";
import ReactStars from "react-stars";
import { Item } from "semantic-ui-react";
import PropTypes from "prop-types";

function MovieCard({ title, description, posterURL, rating }) {
  const placeholder = "https://via.placeholder.com/290";

  return (
    <Item.Group>
      <Item
        style={{
          borderStyle: "groove",
          padding: "10px 10px",
          marginBottom: "10px",
        }}
      >
        <Item.Image size="tiny" src={posterURL ? posterURL : placeholder} />
        <Item.Content>
          <Item.Header>{title}</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>{description}</Item.Description>
          <Item.Extra>
            <ReactStars
              count={10}
              edit={false}
              value={rating}
              size={24}
              color2={"#ffd700"}
            />
            <p>{rating ? rating : 0}/10</p>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  posterURL: PropTypes.string,
  rating: PropTypes.number,
};

MovieCard.defaultProps = {};

export default MovieCard;
