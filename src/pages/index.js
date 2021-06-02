import * as React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../components/layout";
import { HomeHeader } from "../components/homeHeader";
import { BlogPosts } from "../components/blogPosts";
import ShareImage from "../images/share-image.jpg";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Tmwlsh | Blog</title>
        <meta property="og:url" content={`https://www.tmwlsh.co.uk`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tmwlsh Blog" />
        <meta property="og:description" content="The incessant ramblings of an ill-informed web developer" />
        <meta property="og:image" content={ShareImage} />
      </Helmet>
      <HomeHeader />
      <BlogPosts />
    </Layout>
  )
}

export default IndexPage
