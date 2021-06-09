import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Container } from "../container";
import Arrow from "../../svgs/right-arrow.svg";

import * as styles from "./styles.module.scss";

const BlogPosts = ({num=1000}) => {

  const blogData = useStaticQuery(graphql`
    query BlogPostsQuery {
      allPrismicBlogPost {
        nodes {
          id
          uid
          data {
            title {
              text
            }
            excerpt {
              text
            }
            date(formatString: "DD MMMM YYYY")
            rich_text {
              html
            }
          }
        }
      }
    }
  `)

  const slicedBlogs = blogData.allPrismicBlogPost.nodes.slice(0, num);

  const BlogPosts = () => slicedBlogs.map(item => {
    return (
      <li className={styles.blogPostBlock} key={item.id}>
        <p className={styles.date}>{item.data.date}</p>
        <h3>{item.data.title.text}</h3>
        <p>{item.data.excerpt.text}</p>
        <Link to={`/blog/${item.uid}`}>
          <span>Read more</span>
          <Arrow />
        </Link>
      </li>
    );
  })

  return (
    <Container size="medium">
      <ul className={styles.blogPosts}>
        <BlogPosts />
      </ul>
    </Container>
  )
}

export { BlogPosts };
