import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";

class ListGroup extends Component {
  state = {
    Genres: getGenres()
  };
  render() {
    const { selectedItem } = this.props;
    const { Genres } = this.state;
    return (
      <ul className="list-group">
        {Genres.map(genre => (
          <li
            key={genre._id}
            className={
              genre === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            style={{ cursor: "pointer" }}
            onClick={() => this.props.onGenreClick(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
