import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { BlogPostContent } from '../components/blogPostContent';

const BlogTemplate = ({ data }) => {

  const post = data.allPrismicBlogPost.nodes[0].data;

  return (
    <Layout>
      <BlogPostContent post={post} />
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($uid: String) {
    allPrismicBlogPost(filter: { uid: { eq: $uid } }) {
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
`

export default BlogTemplate;
