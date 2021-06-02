import * as React from "react";
import { Link } from "gatsby";
import { Container } from "../container";

import * as styles from "./styles.module.scss";

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footerInner}>
          <p>Tmwlsh - {year}</p>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export { Footer };
