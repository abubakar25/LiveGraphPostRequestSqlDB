import React, { useState } from "react";
import axios from "axios";

function InputPoints(props) {
  const [state, setState] = useState({
    x: "",
    y: "",
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { x, y } = state;

    console.log(state);

    const points = {
      x,
      y,
    };

    props.getName(state);

    axios
      .post("http://localhost:3001/create", points)
      .then(() => console.log("Points added"))
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <form action="/create" onSubmit={handleSubmit} method="POST">
        <div>
          <input
            type="number"
            name="x"
            placeholder="X Point"
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <input
            type="number"
            name="y"
            placeholder="Y Point"
            onChange={handleInputChange}
          />
        </div>
        <br />

        <div>
          <button type="submit">Add Points</button>
        </div>
      </form>
    </div>
  );
}

export default InputPoints;
