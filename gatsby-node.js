const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const workNodes = await graphql(`
    {
      allWpWork {
        nodes {
          title
          slug
          uri
          id
          workItem {
            workItemContent {
              ... on WpWork_Workitem_WorkItemContent_FullWidthImage {
                image {
                  mediaItemUrl
                }
                fieldGroupName
              }
              ... on WpWork_Workitem_WorkItemContent_Content {
                content
                fieldGroupName
              }
              ... on WpWork_Workitem_WorkItemContent_TwoImage {
                imageOne {
                  image {
                    mediaItemUrl
                  }
                }
                imageTwo {
                  image {
                    mediaItemUrl
                  }
                }
                fieldGroupName
              }
              ... on WpWork_Workitem_WorkItemContent_TextPills {
                title
                pills {
                  text
                }
                fieldGroupName
              }
              ... on WpWork_Workitem_WorkItemContent_TitleTextColumns {
                columns {
                  singleColumn {
                    text
                    title
                  }
                }
                fieldGroupName
              }
            }
          }
        }
      }
    }
  `)

  workNodes.data.allWpWork.nodes.forEach(workItem => {
    // Creates work items.
    createPage({
      path: `/work/${workItem.slug}`,
      component: path.resolve(__dirname, 'src/templates/work.js'),
      context: { ...workItem },
    })

  });


}
