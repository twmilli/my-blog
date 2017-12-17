import React from 'react';
import BlogPreview from '../pages/components/blog-preview';
import Link from 'gatsby-link';
import './blog.scss';

const NavLink = props => {
    if (!props.test) {
      return <Link to={props.url}>{props.text}</Link>;
    } else {
      return <span>{props.text}</span>;
    }
};

const IndexPage = ({data, pathContext}) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    const previewArray = group.map(({node}) => {
        return(
            <BlogPreview
                title =  {node.frontmatter.title}
                excerpt = {node.excerpt}
                key = {node.id}
                tag = {node.frontmatter.tag}
                date = {node.frontmatter.date}
                path = {node.frontmatter.path}
            />
        );
    });
    return(
        <div className = 'blog-container'>
            {previewArray}
        </div>
    );
};

export const postQuery = graphql`
query IndexBlogQuery {
    allMarkdownRemark(
        limit: 10,
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
`

export default IndexPage;