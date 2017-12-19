const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

exports.createPages = ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators;
    const postTemplate = path.resolve('src/templates/post.js');

    return graphql(`{
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
    }`)
    .then(res => {
        if(res.errors) {
            return Promise.reject(res.errors);
        }
        createPaginatedPages({
            edges: res.data.allMarkdownRemark.edges,
            createPage: createPage,
            pageTemplate: "src/templates/index.js",
            pageLength: 10,
            pathPrefix: "blog"
        })

        res.data.allMarkdownRemark.edges.forEach(({node}) => {
           createPage({
               path: node.frontmatter.path,
               component: postTemplate
           }) 
        });
    });
}