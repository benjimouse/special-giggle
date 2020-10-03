import React, { useState, useEffect } from "react";
import Link from "./link";

function Dog(props) {
  const [dog, setDog] = useState({});
  
  const getDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDog(data);
      })
      .catch(console.log);
  };
  useEffect(getDog, []);
  return (
    <div class="col">
      <div class="card">
        <div class="card-header">Random dog!</div>
        <div class="card-body">
          <p>
            <img src={dog.message} alt="Random dog!" />
          </p>
          <button className="btn btn-outline-primary" onClick={() => getDog()}>
            New dog!{" "}
          </button>

          <Link
            text="api used"
            url="https://github.com/skolakoda/programming-quotes-api"
          />
        </div>
      </div>
    </div>
  );
}
export default Dog;
