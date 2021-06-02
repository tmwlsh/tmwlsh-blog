import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import { Layout } from '../components/layout';
import { BlogPostContent } from '../components/blogPostContent';
import ShareImage from "../images/share-image.jpg";

const BlogTemplate = ({ data }) => {


  const post = data.allPrismicBlogPost.nodes[0].data;

  return (
    <Layout>
      <Helmet>
        <title>{`Tmwlsh | ${post.title.text}`}</title>
        <meta property="og:url" content={`https://www.tmwlsh.co.uk/blog/${post.title.text.replace(/\s+/g, '-').toLowerCase()}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title.text} />
        <meta property="og:description" content={post.excerpt.text} />
        <meta property="og:image" content={`https://www.tmwlsh.co.uk${ShareImage}`} />
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
