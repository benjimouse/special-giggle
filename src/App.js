import React, { Component } from 'react';
import Dog from './components/dog';
import Quote from './components/quote';

class App extends Component {
  state = {
    dog: [],
    quote: []
  }
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then((data) => {
      this.setState({ dog: data })
    })
    .catch(console.log)
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
    .then(res => res.json())
    .then((data) => {
      this.setState({ quote: data })
    })
    .catch(console.log)
  }
  render() {
    return (<>
      <Dog dog={this.state.dog} />
      <Quote quote={this.state.quote} />
      </>
    )
  }
}

export default App;