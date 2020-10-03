import React from 'react';

const Ribbon = ({ repo }) => {
  return (
    <>
    <a class="github-fork-ribbon" href={repo} data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
    </>
  )
};

export default Ribbon