import React, { useState, useEffect } from "react";
import Link from "./link";

function Card(props) {
  const [info, setInfo] = useState({});
  const getCard = () => {
    fetch(props.endpoint)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      })
      .catch(console.log);
  };


  useEffect(getCard, []);


  return (
    <div class="col">
      <div class="card">
        <div class="card-header">Random {props.title}!</div>
        <div class="card-body">
          <p>
            <img src={info.message} alt={props.title} />
          </p>
          <button
            className="btn btn-outline-primary"
            onClick={() => getCard()}
          >
            New {props.title}!{" "}
          </button>

          <Link text="api used" url={props.api} />
        </div>
      </div>
    </div>
  );
}

export default Card;
