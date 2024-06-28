import React from "react";
import { Link } from "gatsby";
import Container from "../container";
import { Controller, Scene } from 'react-scrollmagic';

import * as styles from "./styles.module.scss";

import House from "../../svgs/house.svg";

const Header = () => {
  return (
    <Controller>
      <Scene classToggle={styles.reveal} triggerHook="onEnter" offset="100">
        <header className={`${styles.header} trigger`}>
          <Container>
            <Link className={styles.siteLink} to="/">
              <House />
              <h2>TMWLSH</h2>
            </Link>
            <h1>TMMWLSH</h1>
            <a target="_blank" href="mailto:hello@tmwlsh.co.uk?subject=Website Enquiry">hello@tmwlsh.co.uk</a>
          </Container>
        </header>
      </Scene>
    </Controller>
  )
}

export default Header;
