import React from 'react';
import Link from 'gatsby-link';
import './blog-preview.scss';
import { ArrowRight } from 'react-feather';
import dateToString from '../util/dateToString.js';

const setPrev = () => {
    if (typeof window !== 'undefined' && typeof location !== 'undefined'){
        window.prev = location.pathname;
    }
    console.log(window.prev);
}

const BlogPreview = (props) => (
    <div className="blog-preview-container">
        <div className="blog-tag">{props.tag}</div>
        <h2 className="blog-title">{props.title}</h2>
        <div className="blog-date">{dateToString(props.date)}</div>
        <div className="blog-preview">{props.excerpt}</div>
        <div className="read-more-container">
            <Link to={props.path} className="read-more-link" onClick = {(() => setPrev())}>
                Read more
                <ArrowRight className='read-arrow'/>
            </Link>
            <span></span>
        </div>
    </div>
);

export default BlogPreview;