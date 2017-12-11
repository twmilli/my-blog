import React from 'react';
import Link from 'gatsby-link';
import './index.scss';
import banner from '../img/banner.png';
import { Github, Instagram, Mail, Facebook, Globe } from 'react-feather';
import EmailNewsletter from './components/email-newsletter.js';

const IndexPage = () => (
  <div className="index-container">
    <div className="banner">
      <img src={banner} alt="banner"/>
      <div className="overlay quote">
      Create something everyday.
      </div>
      <Link to='/blog' className="overlay blog-btn">BLOG</Link>
    </div>
    <div className="icon-container">
      <a href="https://github.com/twmilli">
        <Github />
      </a>
      <a href="https://www.instagram.com/taytaytrey/">
        <Instagram />
      </a>
      <a href="mailto:twm013@bucknell.edu">
        <Mail />
      </a>
      <a href="https://www.facebook.com/taylor.milliman1">
        <Facebook />
      </a>
      <a href="http://linkedin.com/taylor-milliman">
        <Globe />
      </a>
    </div>

    <div id='newsletter-heading'>
      Sign up for my weekly newsletter
    </div>
    <EmailNewsletter />
  </div>
)

export default IndexPage;
