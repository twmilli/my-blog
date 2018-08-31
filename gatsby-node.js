const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const postTemplate = path.resolve('src/templates/post.js');

  return graphql(`{
        allMarkdownRemark(
            filter: {frontmatter: {published: {eq: true}}},
            sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
              node {
                excerpt(pruneLength: 300)
                id
                frontmatter {
                  title
                  path
                  date(formatString: "YYYY-MM-DD")
                  tag
                  seotitle
                  keywords
                }
              }
            }
          }
    }`)
    .then((res) => {
      if (res.errors) {
        return Promise.reject(res.errors);
      }
      const posts = res.data.allMarkdownRemark.edges;
      createPaginatedPages({
        edges: posts,
        createPage,
        pageTemplate: 'src/templates/blog.js',
        pageLength: 10,
        pathPrefix: 'blog',
      });
      posts.forEach(({ node }, index) => {
        const prev = index === 0 ? false : posts[index - 1].node;
        const next = index === posts.length - 1 ? false : posts[index + 1];
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
          context: {
            prev,
            next,
          },
        });
      });
    });
};
