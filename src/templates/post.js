import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import { Layout } from '../components/layout';
import { BlogPostContent } from '../components/blogPostContent';
import { SEO } from "../components/SEO";
import ShareImage from "../images/share-image.jpg";

const BlogTemplate = ({ data }) => {

  const post = data.allPrismicBlogPost.nodes[0].data;

  return (
    <Layout>
      <SEO
        title={post.title.text}
        description={post.excerpt.text}
        image={ShareImage}
        article={true}
      />
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
