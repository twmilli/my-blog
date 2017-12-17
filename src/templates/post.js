import React from 'react';
import Helmet from 'react-helmet';
import dateFormat from 'dateformat';
import EmailNewsletter from '../pages/components/email-newsletter.js';
import './post.scss';

export default function Template({data}) {
    const { markdownRemark: post } = data;
    const dString = dateFormat(new Date(post.frontmatter.date), "mmmm dS, yyyy");
    return (
        <div className='post'>
            <div className="blog-post-tag">{post.frontmatter.tag}</div>
            <h1>{post.frontmatter.title}</h1>
            <time className="date">{dString}</time>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            <div id='newsletter-heading'>
            Sign up for my weekly newsletter
            </div>
            <EmailNewsletter />
        </div>
    )
};

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: {eq: $path} }) {
            html
            frontmatter {
                path
                title
                date
                tag
            }
        }
    }
`
