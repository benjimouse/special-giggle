import React from 'react'

const Quote = ({ quote }) => {
  return (
    <div class="col">
      <h1>Random Programing quote!</h1>
      <p><q>{quote.en}</q></p>
      <p> - {quote.author}</p>
      <p>Source is <a href="https://github.com/skolakoda/programming-quotes-api" >https://github.com/skolakoda/programming-quotes-api</a></p>
    </div>
  )
};

export default Quote