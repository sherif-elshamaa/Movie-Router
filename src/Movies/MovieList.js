import { React, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import Filter from "./Filter";
import Lightbox from "../tools/Lightbox";

function MovieList() {
  const [filteredBy, setFilteredBy] = useState("All");

  const handleFilterChange = (e) => {
    setFilteredBy(e.target.value);
  };
  const [show, setShow] = useState(false);

  return (
    <div style={{ maxWidth: "1000px", margin: "auto" }}>
      <main className="App-header">
        <Navbar
          bg="dark"
          expand="lg"
          variant="dark"
          style={{ margin: "0px 0px 5px  0px" }}
        >
          <Container style={{ margin: "auto" }}>
            <Navbar.Brand>favorite movies</Navbar.Brand>
            <div>
              <label
                htmlFor="filter"
                style={{ color: "white", marginRight: "10px" }}
              >
                Filter by:
              </label>
              <select id="filter" onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="A-Z">A-Z</option>
                <option value="rate">rate</option>
              </select>
              <Lightbox show={show} setShow={setShow} />
            </div>
          </Container>
        </Navbar>
        <Filter filteredBy={filteredBy} />
      </main>
    </div>
  );
}

export default MovieList;
