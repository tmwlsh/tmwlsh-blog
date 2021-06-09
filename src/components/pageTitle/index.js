import * as React from "react";
import { Container } from "../container";

import * as styles from "./styles.module.scss";

const PageTitle = ({title="testing"}) => {
  return (
    <div className={styles.pageTitle}>
      <Container size="medium">
        <h1 className={styles.title}>{title}</h1>
      </Container>
    </div>
  )
}

export { PageTitle };
