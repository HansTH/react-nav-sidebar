import React from 'react';
import './Sidebar.css';

const Sidebar = props => {
  const { sidebarClose, show } = props;

  return (
    <div className={show ? 'sidebar show' : 'sidebar'}>
      <div className='sidebar-nav'>
        <div className='sidebar-logo'>
          <a href='/'>HansTH</a>
        </div>
        <nav className='sidebar-nav-links'>
          <ul>
            <li>
              <a onClick={sidebarClose} href='#about'>
                Over mij
              </a>
            </li>
            <li>
              <a onClick={sidebarClose} href='#portfolio'>
                Portfolio
              </a>
            </li>
            <li>
              <a onClick={sidebarClose} href='#skills'>
                Skills
              </a>
            </li>
            <li>
              <a onClick={sidebarClose} href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
