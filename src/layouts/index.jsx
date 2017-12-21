import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';

import './index.scss';

const TemplateWrapper = ({ children, location }) => {
  let header = null;
  const paths = ['/', '/blog', '/portfolio', '/reading'];
  if (typeof location !== 'undefined') {
    if (paths.includes(location.pathname) || location.pathname.startsWith('/blog')) {
      header = <Header />;
    }
  }
  return (
    <div>
      <Helmet
        title="Taylor Milliman"
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
};

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.String.isRequired,
};

export default TemplateWrapper;
