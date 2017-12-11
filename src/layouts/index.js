import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

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
        <Link to='/resume' id='resume' activeStyle = {{ color: '#415469' }}>Resume</Link>
        <Link to='/reading' activeStyle = {{ color: '#415469' }}>Reading</Link>
      </nav>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
