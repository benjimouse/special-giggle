import React from 'react'

const Ribbon = ({ repo }) => {
  return (
    <>
    
      <a href={repo}><img width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_red_aa0000.png?resize=149%2C149"  style={{position:'absolute'}} alt="Fork me on GitHub" data-recalc-dims="1" /></a>
    </>
  )
};

export default Ribbon