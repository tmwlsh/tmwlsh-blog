import React from "react";
import Container from "../container";
import { Controller, Scene } from 'react-scrollmagic';

import * as styles from "./styles.module.scss";

const Footer = () => {

  return (
    <Controller>
      <Scene classToggle={styles.reveal} triggerHook="onEnter" offset="100">
        <footer className={`${styles.footer} trigger`}>
          <Container>
            <p>Thank you</p>
          </Container>
        </footer>
      </Scene>
    </Controller>
  )
}

export default Footer;
