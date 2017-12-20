import React from 'react';
import Helmet from 'react-helmet';
import dateFormat from 'dateformat';
import EmailNewsletter from '../components/email-newsletter.js';
import BlogNav from '../components/blog-nav.js';
import dateToString from '../util/dateToString.js';
import './post.scss';

export default function Template(props) {
    console.log(props);
    const { markdownRemark: post } = props.data;
    const dateString = dateToString(post.frontmatter.date);
    console.log(post);
    return (
        <div>
            <BlogNav />
            <div className='post'>
                <div className="post-container">
                    <div className="blog-post-tag">{post.frontmatter.tag}</div>
                    <h1>{post.frontmatter.title}</h1>
                    <div className="date">
                        <time>{dateString}</time>
                        <span className="length">{post.timeToRead} min read</span>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: post.html}} />
                    <div id='newsletter-heading'>
                    Sign up for my weekly newsletter
                    </div>
                    <EmailNewsletter />
                </div>
            </div>

        </div>
    )
};

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: {eq: $path} }) {
            html
            timeToRead
            frontmatter {
                path
                title
                date
                tag
            }
        }
    }
`