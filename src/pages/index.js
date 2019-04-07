import React from 'react';
import './index.scss';
import EmailNewsletter from '../components/email-newsletter.js';

const IndexPage = () => (
  <div className="index-container">
    <div className="intro">
      <h1>
      Hi, I'm Taylor.
      </h1>
      <h2>
      Currently, I'm a software engineer @
        <a href="https://www.thumbtack.com/"> Thumbtack</a>.
      </h2>
      <div className="blurb"><span>Get my newsletter. </span>It features the absolute best of what I read each week, what I'm thinking about, and what I'm working on.
        <EmailNewsletter />
        We go down rabbit holes and tangents in a futile attempt to better understand the world.
      </div>
    </div>
    <blockquote className="quote">
      Taylor's newsletter is so good, I would read it even if I wasn't obligated to.
    </blockquote>
    <blockquote>
      <i>- My mom</i>
    </blockquote>
    <div className="blurb">
      <a href="https://taylor.substack.com/">
      Read the archives here.
      </a>
    </div>
  </div>
);

export default IndexPage;
