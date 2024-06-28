import * as React from "react";
import Layout from "../components/layout";
import WorkRow from "../components/workRow";
import TextBlock from "../components/textBlock";
import Interests from "../components/interests";

export const Head = () => {
  return (
    <>
      <title>TMWLSH - UX Consultancy</title>
      <meta name="title" content="TMWLSH - UX Consultancy" />
      <meta name="description" content="TMWLSH is a UX Consultancy focussed on creating usable, enjoyable, and accessible experiences for clients of all shapes and sizes." />
      <meta name="keywords" content="UX, UI, UX Consultancy, UX Consultancy Leeds, UX Consultancy Kendal, UX Consultancy London" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta property="og:title" content="TMWLSH - UX Consultancy" />
      <meta property="og:site_name" content="TMWLSH" />
      <meta property="og:url" content="www.northpeak.digital" />
      <meta property="og:description" content="TMWLSH is a UX Consultancy focussed on creating usable, enjoyable, and accessible experiences for clients of all shapes and sizes." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/share-image.jpg" />
    </>
  )
}

const IndexPage = () => {

  const work = [
    {
      image: '../images/work/02-royal-canin.jpg',
      imageAlt: 'A screen shot of the Royal Canin design language.',
      date: "(2018 - 2021)",
      title: "Royal Canin design language",
      strapline: "A global design language for a global brand.",
      link: {
        title: "Read More",
        url: "/work/royal-canin-design-system"
      }
    },
    {
      image: '../images/work/03-rowse-honey.jpg',
      imageAlt: 'A screenshot of the Rowse Honey Marketing website.',
      date: "(2023)",
      title: "Rowse Honey Marketing website",
      strapline: "A website as sweet as their honey.",
      link: {
        title: "Read More",
        url: "/work/rowse-honey"
      }
    }
  ]

  const text = [
    `I'm a Senior Frontend / Shopify Developer and UX consultant. With 14+ years of digital experience, I enjoy creating usable, enjoyable, and accessible experiences for clients of all shapes and sizes.`
  ]

  const interests = [
    'UI / UX',
    'Responsive Design',
    'Prototyping',
    'Wireframing',
    'Specification Docs',
    'Interviews',
    'Interaction Design',
    'Accessibility',
    'UI Animation',
  ]

  return (
    <main>
      <Layout>
        <WorkRow content={work[1]} layout="standard" linesPos="topLeft" />
        <TextBlock text={text[0]} />
        <WorkRow content={work[0]} layout="reversed" linesPos="left" />
        <Interests interests={interests} />
      </Layout>
    </main>
  )
};

export default IndexPage;
