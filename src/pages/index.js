import * as React from "react"
import { Layout } from "../components/layout";
import { HomeHeader } from "../components/homeHeader";
import { BlogPosts } from "../components/blogPosts";

const IndexPage = () => {
  return (
    <Layout>
      <HomeHeader />
      <BlogPosts />
    </Layout>
  )
}

export default IndexPage
