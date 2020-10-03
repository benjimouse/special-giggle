import React from "react";
import Link from "./link";

const Quote = ({ quote }) => {
  return (
    <div class="col">
      <div class="card">
        <div class="card-header">Programming quote</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{quote.en}</p>
            <footer class="blockquote-footer">
              A quote from: <cite title="Source Title">{quote.author}</cite>
            </footer>
            <Link
              text="api used"
              url="https://github.com/skolakoda/programming-quotes-api"
            />
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Quote;
