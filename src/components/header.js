import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
    <div className='Navigation'>
     <div className='Navigation-body'>
     <nav className="Navigation-left">
        <h1 className='title-name'>
          <Link to="/">
            Taylor Milliman
          </Link>
        </h1>
      </nav>
        <nav className='Navigation-right'>
          <Link to='/' activeStyle = {{ color: '#415469' }} exact>Home</Link>
          <Link to='/blog' activeStyle = {{ color: '#415469' }}>Blog</Link>
          <Link to='/portfolio' activeStyle = {{ color: '#415469' }}>Portfolio</Link>
          <Link to='/about' activeStyle = {{ color: '#415469' }}>About</Link>
          <Link to='/reading' activeStyle = {{ color: '#415469' }}>Reading</Link>
        </nav>
      </div>
    </div>
  );

export default Header;
  