import * as React from "react";
import { Container } from "../container";

import * as styles from "./styles.module.scss";

const BlogPostContent = ({post}) => {
  return (
    <div className={styles.blogPostWrapper}>
      <Container size="small">
        <p className={styles.blogPostDate}>{post.date}</p>
        <h1 className={styles.blogPostTitle}>{post.title.text}</h1>
        <div className={styles.blogPostContent} dangerouslySetInnerHTML={{__html: post.rich_text.html}} />
      </Container>
    </div>
  )
}

export { BlogPostContent };
