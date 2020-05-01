import React, { Component } from 'react';
import Dog from './components/dog';

class App extends Component {
  state = {
    dog: []
  }
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then((data) => {
      this.setState({ dog: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <Dog dog={this.state.dog} />
    )
  }
}

export default App;