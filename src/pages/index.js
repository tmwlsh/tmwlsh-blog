import * as React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../components/layout";
import { ViewAll } from "../components/viewAll";
import { HomeHeader } from "../components/homeHeader";
import { BlogPosts } from "../components/blogPosts";
import { SEO } from "../components/SEO";
import ShareImage from "../images/share-image.jpg";

const IndexPage = () => {

  console.log('ShareImage', ShareImage);

  return (
    <Layout>
      <SEO
        title="Tmwlsh Blog"
        description="The incessant ramblings of an ill-informed web developer"
        image={ShareImage}
        article={true}
      />
      <Helmet>
        <title>Tmwlsh | Blog</title>
      </Helmet>
      <HomeHeader />
      <BlogPosts num={3} />
      <ViewAll />
    </Layout>
  )
}

export default IndexPage
