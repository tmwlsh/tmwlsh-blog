import * as React from "react"
import { Layout } from "../components/layout";
import { HomeHeader } from "../components/homeHeader";
import { BlogPosts } from "../components/blogPosts";

const BlogPage = () => {
  return (
    <Layout>
      <BlogPosts />
    </Layout>
  )
}

export default BlogPage
