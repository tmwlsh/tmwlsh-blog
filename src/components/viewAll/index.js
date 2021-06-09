import * as React from "react";
import { Link } from "gatsby";
import { Container } from "../container";
import Arrow from "../../svgs/right-arrow.svg";

import * as styles from "./styles.module.scss";

const ViewAll = () => {
  return (
    <div>
      <Container size="medium">
        <h3 className={styles.title}>Want to read more of my <span>ramblings</span>?</h3>
        <Link className={styles.viewAll} to="/blog">
          <span>View all posts</span>
          <Arrow />
        </Link>
      </Container>
    </div>
  )
}

export { ViewAll };
