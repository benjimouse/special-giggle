import React, { Component } from 'react';
import Dog from './components/dog';
import Quote from './components/quote';
import Card from './components/card';
import Ribbon from './components/ribbon';

class App extends Component {
  state = {
    quote: []
  }
  componentDidMount() {
    this.getQuote()
  }
  getQuote() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(res => res.json())
    .then((data) => {
      this.setState({ quote: data })
    })
    .catch(console.log)
  }
  render() {
    return (<>
      <Ribbon repo="https://github.com/benjimouse/special-giggle" />
      <div class="container">
        <div class="row">
          <div class="col" ><h1>A fun little page.</h1></div>
        </div>
        <div class="row" >
          <Dog />
          <Quote quote={this.state.quote} />
          <Card endpoint="https://dog.ceo/api/breeds/image/random" title="dog" api="https://github.com/skolakoda/programming-quotes-api" />
        </div>
    </div>
  </>
    )
  }
}

export default App;