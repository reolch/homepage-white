import React, { useState } from 'react';
import '../Font.css';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <img src="header_logo.svg" alt="Logo" className="logo" />
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <nav className={`header-bottom ${isMenuOpen ? 'open' : ''} noto-serif-jp-bold`}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Service</a></li>
          <li><a href="#plans">Price</a></li>
          <li><a href="#stores">店舗一覧</a></li>
          <li><a href="#trials">体験レッスン</a></li>
          <li><a href="#contact">お問い合わせ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
