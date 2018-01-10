import React from 'react';
import BlogPreview from '../components/blog-preview';
import Link from 'gatsby-link';
import './blog.scss';

const NavLink = (props) => <Link to={props.url}>{props.text}</Link>;

const BlogBottomNav = ({
  index, first, last, pageCount, pathPrefix,
}) => {
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  const next = (<NavLink test={last} url={`/${pathPrefix}/${nextUrl}`} text="Next Page" />);
  const prev = (<NavLink test={first} url={`/${pathPrefix}/${previousUrl}`} text="Previous Page" />);
  return (
    <div className="blog-bottom-nav-container">
      <div className="nextLink">
          {!first ? prev : null}
        </div>
      <div className="page">page {index} of {pageCount}</div>
      <div className="previousLink">
          {!last ? next : null}
        </div>
    </div>
  );
};

const IndexPage = ({ data, pathContext }) => {
  const {
    group, index, first, last, pageCount, pathPrefix,
  } = pathContext;
  const previewArray = group.map(({ node }) => (
    <BlogPreview
      title={node.frontmatter.title}
      excerpt={node.excerpt}
      key={node.id}
      tag={node.frontmatter.tag}
      date={node.frontmatter.date}
      path={node.frontmatter.path}
    />
  ));
  return (
    <div className="blog-container">
      {previewArray}

      <BlogBottomNav
          index={index}
          first={first}
          last={last}
          pageCount={pageCount}
          pathPrefix={pathPrefix}
        />

    </div>
  );
};

export const IndexQuery = graphql`
query IndexBlogQuery {
    allMarkdownRemark(
        filter: {frontmatter: {published: {eq: true}}},
        sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            frontmatter {
              title
              path
              date
              tag
            }
          }
        }
      }
}
`;

export default IndexPage;
