import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';
import Header from '../pages/components/header.js';
import BlogNav from '../pages/components/blog-nav.js';

import './index.scss'

const TemplateWrapper = ({ children, location }) => {
  const header = ['/', '/blog', '/about', '/work', '/resume', '/reading'].includes(location.pathname) ? <Header /> : <BlogNav />
  return (
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      {header}
      <div>
        {children()}
      </div>
    </div>
);
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
