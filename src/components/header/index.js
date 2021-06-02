import * as React from "react";
import { Link } from "gatsby";
import { Container } from "../container";

import * as styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <Link to="/">Tmwlsh</Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="mailto:hello@tmwlsh.co.uk?subject=Tmwlsh Website Enquiry">Contact</a></li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export { Header };
