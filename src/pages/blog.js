import * as React from "react"
import { Helmet } from "react-helmet";
import { Layout } from "../components/layout";
import { BlogPosts } from "../components/blogPosts";

const BlogPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Tmwlsh | Blog</title>
      </Helmet>
      <BlogPosts />
    </Layout>
  )
}

export default BlogPage
