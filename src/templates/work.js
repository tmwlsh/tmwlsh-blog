import * as React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import ContentPicker from "../components/contentPicker";

import * as styles from "../sass/workTemplate.module.scss";

const WorkTemplate = ({data}) => {

  const work = data.allWpWork.nodes[0];

  const Head = () => {
    return (
      <>
        <title>{`${work.title} | TMWLSH`}</title>
        <meta name="title" content={`${work.title} | TMWLSH`} />
        <meta name="description" content="TMWLSH is a UX Consultancy focussed on creating usable, enjoyable, and accessible experiences for clients of all shapes and sizes." />
        <meta name="keywords" content="UX, UI, UX Consultancy, UX Consultancy Leeds, UX Consultancy Kendal, UX Consultancy London" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:title" content={`${work.title} | TMWLSH`} />
        <meta property="og:site_name" content="TMWLSH" />
        <meta property="og:url" content="www.northpeak.digital" />
        <meta property="og:description" content="TMWLSH is a UX Consultancy focussed on creating usable, enjoyable, and accessible experiences for clients of all shapes and sizes." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/share-image.jpg" />
      </>
    )
  }

  return (
    <main className={styles.workTemplate}>
      <Head />
      <Layout>
        {/* <h1>{work.title}</h1> */}
        <ContentPicker content={work.workItem.workItemContent} />
      </Layout>
    </main>
  )
};

export default WorkTemplate;

export const query = graphql`
  query WorkQuery($id: String) {
    allWpWork(filter: { id: { eq: $id } }) {
      nodes {
        title
        slug
        uri
        id
        workItem {
          workItemContent {
            ... on WpWork_Workitem_WorkItemContent_FullWidthImage {
              image {
                mediaItemUrl
              }
              fieldGroupName
            }
            ... on WpWork_Workitem_WorkItemContent_Content {
              content
              fieldGroupName
            }
            ... on WpWork_Workitem_WorkItemContent_TwoImage {
              imageOne {
                image {
                  mediaItemUrl
                }
              }
              imageTwo {
                image {
                  mediaItemUrl
                }
              }
              fieldGroupName
            }
            ... on WpWork_Workitem_WorkItemContent_TextPills {
              title
              pills {
                text
              }
              fieldGroupName
            }
            ... on WpWork_Workitem_WorkItemContent_TitleTextColumns {
              columns {
                singleColumn {
                  text
                  title
                }
              }
              fieldGroupName
            }
          }
        }
      }
    }
  }
`
