import React from 'react';
import BlogPreview from '../pages/components/blog-preview';
import Link from 'gatsby-link';
import './blog.scss';

const NavLink = props => {
    return <Link to={props.url}>{props.text}</Link>;
};

const BlogBottomNav = ({index, first, last, pageCount, pathPrefix}) => {
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();
    const next = (<div className="nextLink">
                <NavLink test={last} url={pathPrefix + "/" + nextUrl} text="Go to Next Page" />
                </div>);
    const prev = (<div className="previousLink">
                    <NavLink test={first} url={pathPrefix + "/" + previousUrl} text="Go to Previous Page" />
            </div>);
    return(
    <div className="blog-bottom-nav-container">
        Page {index} of {pageCount}
        {!first ? prev : null}
        {!last ? next : null}
    </div>
    )
}

const IndexPage = ({data, pathContext}) => {
    console.log(pathContext);
    const { group, index, first, last, pageCount, pathPrefix } = pathContext;

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
`

export default IndexPage;