import React from 'react'

const Dog = ({ dog }) => {
  return (
    <div>
      <center><h1>Random Dog!</h1></center>
      <img src={dog.message} alt="test" />
    </div>
  )
};

export default Dog