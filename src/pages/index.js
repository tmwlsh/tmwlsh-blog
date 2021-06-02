import * as React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../components/layout";
import { HomeHeader } from "../components/homeHeader";
import { BlogPosts } from "../components/blogPosts";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Tmwlsh | Blog</title>
      </Helmet>
      <HomeHeader />
      <BlogPosts />
    </Layout>
  )
}

export default IndexPage
