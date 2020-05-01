import React from 'react'

const Link = ({ url, text }) => {
  return (
  <p><a href={url} class="badge badge-pill badge-info" >{text}</a></p>
  )
};

export default Link