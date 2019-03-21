import React from 'react';
import './MenubarButton.css';
const MenubarButton = props => {
  const { click } = props;
  return (
    <div onClick={click} className='menubarButton'>
      <div className='menubarButton-line' />
      <div className='menubarButton-line' />
      <div className='menubarButton-line' />
    </div>
  );
};

export default MenubarButton;
