// Navbar.js
import React, { useState, useEffect } from 'react';
import header from './header.module.scss';
import logo from '../images/logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/home');
  const [headerStyle, setHeaderStyle] = useState({
    width: '1900px',
    height: '70px',
  });

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderStyle({
          width: '1900px',
          height: '70px',
        });
      } else {
        setHeaderStyle({
          width: '1900px',
          height: '120px',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={header.main} style={headerStyle}>
      <div className={header.logoo}>
        <img src={logo} alt='' className={header.logoimg} />
      </div>
      <div className={header.link}>
        <a
          href='/home'
          className={`${header.name} ${activeLink === '/home' ? header.activeLink : ''}`}
          onClick={() => handleLinkClick('/home')}
        >
          Home
        </a>
        <a
          href='/profile'
          className={`${header.name} ${activeLink === '/profile' ? header.activeLink : ''}`}
          onClick={() => handleLinkClick('/profile')}
        >
          Profile
        </a>
        <a
          href='/contact'
          className={`${header.name} ${activeLink === '/contact' ? header.activeLink : ''}`}
          onClick={() => handleLinkClick('/contact')}
        >
          Contact
        </a>
        <a
          href='/about'
          className={`${header.name} ${activeLink === '/about' ? header.activeLink : ''}`}
          onClick={() => handleLinkClick('/about')}
        >
          About
        </a>
      </div>
    </div>
  );
};

export default Navbar;
