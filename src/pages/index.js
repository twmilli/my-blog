import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
    const edges = data.allMarkdownRemark.edges;
    const posts = edges.map(({node}) => {
        const {title, path} = node.frontmatter;
        console.log(node);
        return (
            <li key={node.id}>
                <Link to={path}>{title}</Link>
            </li>
        )
    });
    return(
        <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        {posts}
        </div>
    );
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
        limit: 10
        sort: { fields: [frontmatter___date], order: DESC}
        filter: { frontmatter: {published: {eq: true}}}
      ){
        edges {
          node {
            id
            frontmatter {
              title
              path
              date
              published
            }
          }
        }
      }
  }
`
