import React from 'react';
import Helmet from 'react-helmet';
import EmailNewsletter from '../components/email-newsletter';
import BlogNav from '../components/blog-nav';
import dateToString from '../util/dateToString';
import './post.scss';

export default function Template(props) {
  const { markdownRemark: post } = props.data;
  const dateString = dateToString(post.frontmatter.date);
  console.log(post.frontmatter);
  return (
    <div>
      <BlogNav />
      <Helmet>
        <title>{post.frontmatter.seotitle !== null ? post.frontmatter.seotitle : post.frontmatter.title}</title>
        <meta property="description" content={post.frontmatter.seodesc !== null ? post.frontmatter.seodesc : post.excerpt} />
        <meta property="keywords" content={post.frontmatter.keywords !== null ? post.frontmatter.keywords : post.frontmatter.tag} />
        <meta property="og:title" content={post.frontmatter.seotitle !== null ? post.frontmatter.seotitle : post.frontmatter.title} />
      </Helmet>
      <div className="post">
        <div className="post-container">
          <div className="blog-post-tag">{post.frontmatter.tag}</div>
          <h1>{post.frontmatter.title}</h1>
          <div className="date">
            <time>{dateString}</time>
            <span className="length">{post.timeToRead} min read</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <div id="newsletter-heading">
                    Sign up for my weekly newsletter
          </div>
          <EmailNewsletter />
        </div>
      </div>
    </div>
  );
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: {eq: $path} }) {
            html
            timeToRead
            excerpt(pruneLength: 200)
            frontmatter {
                path
                title
                date
                tag
                seotitle
                keywords
            }
        }
    }
`;
