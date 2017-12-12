import React from 'react';
import Link from 'gatsby-link';
import './blog-preview.scss';
import { ArrowRight } from 'react-feather';

const BlogPreview = (props) => (
   <div className="blog-preview-container">
    <div className="blog-tag">{props.tag}</div>
    <h2 className="blog-title">{props.title}</h2>
    <div className="blog-date">{props.date}</div>
    <div className="blog-preview">{props.preview}</div>
    <div className="read-more-container">
        <Link to='/' className="read-more-link">
            Read more
            <ArrowRight className='read-arrow'/>
        </Link>
        <span></span>
    </div>
   </div>
);

export default BlogPreview;