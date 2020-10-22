/* eslint-disable react/self-closing-comp */
import React from 'react';

import './Loader.css';

const Loader = (): JSX.Element => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
