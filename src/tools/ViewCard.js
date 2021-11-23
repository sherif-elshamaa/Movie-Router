import React from "react";
import { Item } from "semantic-ui-react";
import ReactStars from "react-stars";

function ViewCard({ title, description, posterURL, rating }) {
  const placeholder = "https://via.placeholder.com/290";
  return (
    <>
      <Item.Group>
        <Item>
          <Item.Image size="small" src={posterURL ? posterURL : placeholder} />

          <Item.Content>
            <Item.Header as="a">{title ? title : "Title"}</Item.Header>
            <Item.Description>
              {description ? description : "Description"}
            </Item.Description>
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
    </>
  );
}

export default ViewCard;
