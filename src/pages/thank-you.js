import * as React from "react";
import Layout from "../components/layout";
import WorkRow from "../components/workRow";
import TextBlock from "../components/textBlock";
import Interests from "../components/interests";

export const Head = () => {
  return (
    <>
      <title>Thank You - TMWLSH</title>
      <meta name="title" content="Thank You - TMWLSH" />
      <meta name="description" content="TMWLSH is a UX Consultancy focussed on creating usable, enjoyable, and accessible experiences for clients of all shapes and sizes." />
      <meta name="keywords" content="UX, UI, UX Consultancy, UX Consultancy Leeds, UX Consultancy Kendal, UX Consultancy London" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta property="og:title" content="Thank You - TMWLSH" />
      <meta property="og:site_name" content="TMWLSH" />
      <meta property="og:url" content="www.northpeak.digital" />
      <meta property="og:description" content="TMWLSH is a UX Consultancy focussed on creating usable, enjoyable, and accessible experiences for clients of all shapes and sizes." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/share-image.jpg" />
    </>
  )
}

const IndexPage = () => {

  const textContent = 'Thank you for your enquiry. A member of the team will be in touch shortly to assist with your request.'

  return (
    <main>
      <Layout>
        <TextBlock text={textContent} />
      </Layout>
    </main>
  )
};

export default IndexPage;
