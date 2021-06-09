import * as React from "react"
import { Helmet } from "react-helmet";
import { Layout } from "../components/layout";
import { PageTitle } from "../components/pageTitle";
import { BlogPosts } from "../components/blogPosts";
import { SEO } from "../components/SEO";
import ShareImage from "../images/share-image.jpg";

const BlogPage = () => {
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
      <PageTitle title="Blog" />
      <BlogPosts />
    </Layout>
  )
}

export default BlogPage
