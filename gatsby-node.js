const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const nodes = await graphql(`
    {
      allPrismicBlogPost {
        nodes {
          id
          uid
          data {
            title {
              text
            }
            excerpt {
              text
            }
            date(formatString: "DD MMMM YYYY")
            rich_text {
              html
            }
          }
        }
      }
    }
  `)

  nodes.data.allPrismicBlogPost.nodes.forEach((post) => {
    // Creates blog posts at /blog/post_url.
    console.log(`Creating blog posts at ${post.uid}.`)
    createPage({
      path: `/blog/${post.uid}`,
      component: path.resolve(__dirname, 'src/templates/post.js'),
      context: { ...post },
    })
  })

}
