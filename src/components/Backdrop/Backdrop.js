import React from 'react';
import './Backdrop.css';
const Backdrop = props => {
  const { sidebarClose, show } = props;
  return (
    <div
      className={show ? 'backdrop show' : 'backdrop'}
      onClick={sidebarClose}
    />
  );
};

export default Backdrop;
