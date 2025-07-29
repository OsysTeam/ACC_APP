import React from 'react';
import { FaSearch, FaRegBell, FaUserCircle } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="بحث..." />
        </div>
      </div>
      <div className="header-right">
        <FaRegBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </header>
  );
};

export default Header;