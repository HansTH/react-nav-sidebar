import React from 'react';
import './Navbar.css';
import MenubarButton from '../MenubarButton/MenubarButton';

const Navbar = props => {
  const { toogleSidebarOpen } = props;
  return (
    <header className='navbar'>
      <nav className='navbar-nav'>
        <div className='' />
        <div className='navbar-logo'>
          <a href='/'>HansTH</a>
        </div>
        <div className='spacer-between-logo-links' />
        <div className='navbar-nav-links'>
          <ul>
            <li>
              <a href='/about-me'>Over Mij</a>
            </li>
            <li>
              <a href='/portfolio'>Portfolio</a>
            </li>
            <li>
              <a href='/skills'>Skills</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>
        <MenubarButton click={toogleSidebarOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
