import * as React from "react";
import { Container } from "../container";

import * as styles from "./styles.module.scss";

const HomeHeader = () => {
  return (
    <Container size="medium">
      <p className={styles.homeHeaderText}>The <span>incessant</span> ramblings of an ill-informed web developer</p>
    </Container>
  )
}

export { HomeHeader };
