import React from 'react';
import BlogPreview from './components/blog-preview';
import './blog.scss';

const blog = ({data}) => {
    
    const posts = data.allMarkdownRemark.edges;
    const previewArray = posts.map(({node}) => {
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
query IndexQuery {
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

export default blog;