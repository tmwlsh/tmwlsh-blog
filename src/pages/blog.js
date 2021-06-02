import * as React from "react"
import { Helmet } from "react-helmet";
import { Layout } from "../components/layout";
import { BlogPosts } from "../components/blogPosts";
import ShareImage from "../images/share-image.jpg";

const BlogPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Tmwlsh | Blog</title>
        <meta property="og:url" content={`https://www.tmwlsh.co.uk/blog`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tmwlsh Blog" />
        <meta property="og:description" content="The incessant ramblings of an ill-informed web developer" />
        <meta property="og:image" content={ShareImage} />
      </Helmet>
      <BlogPosts />
    </Layout>
  )
}

export default BlogPage
