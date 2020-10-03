import React, { useState, useEffect } from "react";
import Dog from './components/dog';
import Quote from './components/quote';
import Card from './components/card';
import Ribbon from './components/ribbon';


function App(props) {
  const [quote, setQuote] = useState({});
  const getQuote = () => {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(res => res.json())
    .then((data) => {
      setQuote(data);
    })
    .catch(console.log);
  };
  useEffect(getQuote, []);

  return (<>
    <Ribbon repo="https://github.com/benjimouse/special-giggle" />
    <div class="container">
      <div class="row">
        <div class="col" ><h1>A fun little page.</h1></div>
      </div>
      <div class="row" >
        <Dog />
        <Quote quote={quote} />
        <Card endpoint="https://dog.ceo/api/breeds/image/random" title="dog" api="https://dog.ceo/api/breeds/image/random" />
      </div>
  </div>
</>
  );
}





export default App;