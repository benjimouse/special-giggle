import React from 'react'

const Dog = ({ dog }) => {
  return (
    <div class="col-md-auto">
      <h1>Random Dog!</h1>
      <img src={dog.message} alt="test" />
      <p>Source is <a href="https://dog.ceo/dog-api/" >https://dog.ceo/dog-api/</a></p>
    </div>
  )
};

export default Dog