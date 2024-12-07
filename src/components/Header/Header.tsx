import React from 'react';
import './Header.css';

type HeaderProps = {
  logoSrc: string;
  title: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc, title }) => {
  return (
    <header className="header">
      <img src={logoSrc} alt="Logo" className="logo" />
      <h2 className="header-title">{title}</h2>
      <div className='socials'>
        
      </div>
    </header>
  );
};

export default Header;