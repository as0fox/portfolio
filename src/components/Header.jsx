import React from 'react';

const Header = () => {
  return (
    <header id="home">
      <div className="book">
        <div className="cover">
          <img src="/images/book.jpg" alt="book cover" />
          <img src="/images/2.jpg" alt="book back" />
        </div>
        <div className="content">
          <img src="/images/3.jpg" alt="book content" />
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;