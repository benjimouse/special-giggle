import React from 'react'
import Link from '../components/link'


class Dog extends React.Component {
  state = {
    dog: []
  }
  componentDidMount() {
    this.getDog()
  }
  getDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then((data) => {
      this.setState({ dog: data })
    })
    .catch(console.log)
  }
render () {
  return (
    <div class="col">
<div class="card">
  <div class="card-header">
  Random dog!
  </div>
  <div class="card-body">
  <p><img  src={this.state.dog.message}  alt="Random dog!" /></p>
  <button className="btn btn-outline-primary" onClick={() => this.getDog()} >New dog! </button>
        
      <Link text="api used" url="https://github.com/skolakoda/programming-quotes-api" />
    
  </div>
</div>
</div>
  );
}
}

export default Dog