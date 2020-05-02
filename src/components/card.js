import React from 'react'
import Link from '../components/link'


class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       info: []
    };
  }
  
  componentDidMount() {
    this.getInfo()
  }
  getInfo() {
    fetch(this.props.endpoint)
    .then(res => res.json())
    .then((data) => {
      this.setState({ info: data })
    })
    .catch(console.log)
  }
render () {
  return (
    <div class="col">
<div class="card">
  <div class="card-header">
  Random {this.props.title}!
  </div>
  <div class="card-body">
  <p><img  src={this.state.info.message}  alt={this.props.title} /></p>
  <button className="btn btn-outline-primary" onClick={() => this.getInfo()} >New {this.props.title}! </button>
        
      <Link text="api used" url={this.props.api} />
    
  </div>
</div>
</div>
  );
}
}

export default Card