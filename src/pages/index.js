import React from 'react';
import Link from 'gatsby-link';
import './index.scss';
import banner from '../img/banner.png';
import { Github, Instagram, Mail, Facebook, Linkedin, Feather } from 'react-feather';
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
      <a href="https://github.com/twmilli" target="_blank">
        <Github />
      </a>
      <a href="https://www.instagram.com/taytaytrey/" target="_blank">
        <Instagram />
      </a>
      <a href="mailto:twm013@bucknell.edu" target="_blank">
        <Mail />
      </a>
      <a href="https://medium.com/@twm013" target="_blank">
        <Feather />
      </a>
      <a href="https://www.facebook.com/taylor.milliman1" target="_blank">
        <Facebook />
      </a>
      <a href="http://linkedin.com/taylor-milliman" target="_blank">
        <Linkedin />
      </a>
    </div>

    <div id='newsletter-heading'>
      Sign up for my weekly newsletter
    </div>
    <EmailNewsletter />
  </div>
)

export default IndexPage;
