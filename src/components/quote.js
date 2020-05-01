import React from 'react'

const Quote = ({ quote }) => {
  return (
    <div>
      <center><h1>Random Programing quote!</h1>
      <p>{quote.en}</p>
      <p>{quote.author}</p>
      <p>Source is <a href="https://github.com/skolakoda/programming-quotes-api" >https://github.com/skolakoda/programming-quotes-api</a></p></center>
    </div>
  )
};

export default Quote