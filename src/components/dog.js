import React from 'react'
import Link from '../components/link'

const Dog = ({ dog }) => {
  return (
    <div class="col">
<div class="card">
  <div class="card-header">
  Random dog!
  </div>
  <div class="card-body">
  <img  src={dog.message}  alt="Random dog!" />
      <Link text="api used" url="https://github.com/skolakoda/programming-quotes-api" />
    
  </div>
</div>
</div>



  )
};

export default Dog