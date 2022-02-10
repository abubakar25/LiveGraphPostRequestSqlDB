import React, { useState } from "react";
import axios from "axios";

function PostDataForm(props) {
  const [state, setState] = useState({
    bookID: "",
    bookTitle: "",
    bookAuthor: "",
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { bookID, bookTitle, bookAuthor } = state;

    const book = {
      bookID,
      bookTitle,
      bookAuthor,
    };

    axios
      .post("http://localhost:3001/create", book)
      .then(() => console.log("Book Created"))
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div>
        <br />
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="bookID"
                placeholder="Book ID"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="bookTitle"
                placeholder="Book Title"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: "30%" }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="bookAuthor"
                placeholder="Book Author"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: "30%" }}>
              <button className="btn btn-success" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostDataForm;
