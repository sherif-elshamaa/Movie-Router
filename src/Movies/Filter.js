import { React } from "react";
import { Container, Item } from "semantic-ui-react";
import MovieCard from "./MovieCard";
import movies from "./MoviesDatabase";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Filter({ filteredBy }) {
  return (
    <Container className="d-flex flex-wrap" style={{ margin: "auto" }}>
      <Item.Group>
        {filteredBy === "rate"
          ? movies
              .sort((a, b) => b.rating - a.rating)
              .map((item, index) => (
                <Link
                  to={`/${item.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  key={index}
                >
                  <MovieCard
                    title={item.title}
                    description={item.description}
                    posterURL={item.posterURL}
                    rating={item.rating}
                  />
                </Link>
              ))
          : filteredBy === "A-Z"
          ? movies
              .sort((a, b) => {
                var titleA = a.title.toLowerCase();
                var titleB = b.title.toLowerCase();
                if (titleA < titleB) {
                  return -1;
                } else if (titleA > titleB) {
                  return 1;
                }
                return 0;
              })
              .map((item, index) => (
                <Link
                  to={`/${item.id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  key={index}
                >
                  <MovieCard
                    title={item.title}
                    description={item.description}
                    posterURL={item.posterURL}
                    rating={item.rating}
                  />
                </Link>
              ))
          : movies
              .slice(0)
              .reverse()
              .map((item, index) => (
                <Link to={`/${item.id}`} className="link" key={index}>
                  <MovieCard
                    title={item.title}
                    description={item.description}
                    posterURL={item.posterURL}
                    rating={item.rating}
                  />
                </Link>
              ))}
      </Item.Group>
    </Container>
  );
}

Filter.propTypes = {
  filteredBy: PropTypes.string,
};

export default Filter;
