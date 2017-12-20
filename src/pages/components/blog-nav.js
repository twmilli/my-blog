import React from 'react';
import Link from 'gatsby-link';
import { ArrowLeft, Facebook } from 'react-feather';
import {
    ShareButtons,
    ShareCounts,
    generateShareIcon
  } from 'react-share';
import './blog-nav.scss';

const BlogNav = (props) => {
    console.log(props);
    const { 
        FacebookShareButton,
        LinkedinShareButton,
        TwitterShareButton,
        RedditShareButton
    } = ShareButtons;

    const { 
        FacebookShareCount,
        LinkedinShareCount,
        TwitterShareCount,
        RedditShareCount
    } = ShareCounts;
    const url = window.location.href;
    return(
        <div className='Navigation-blog'>
        <div className='Navigation-blog-body'>
            <nav className="Navigation-blog-left">
                <Link to={window.prev} activeStyle = {{ color: '#415469' }}>
                <ArrowLeft className='arrow-back'/>
                <div id='back'>Back to Blog</div>
                </Link>
            </nav>
            <nav className="Navigation-blog-right">
                <div className="fb-container">
                    <FacebookShareButton url={url}>
                        <span>Share On Facebook</span>
                        <Facebook />
                    </FacebookShareButton>
                </div>
            </nav>
        </div>
        </div>
    );
  };

export default BlogNav;