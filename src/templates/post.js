import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import { Layout } from '../components/layout';
import { BlogPostContent } from '../components/blogPostContent';

const BlogTemplate = ({ data }) => {

  const post = data.allPrismicBlogPost.nodes[0].data;

  console.log('post', post);

  return (
    <Layout>
      <Helmet>
        <title>{`Tmwlsh | ${post.title.text}`}</title>
      </Helmet>
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
