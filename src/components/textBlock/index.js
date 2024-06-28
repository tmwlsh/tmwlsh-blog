import React from "react";
import Container from "../container";
import { Controller, Scene } from 'react-scrollmagic';

import * as styles from "./styles.module.scss";

const TextBlock = ({text}) => {
  return (
    <Controller>
      <Scene classToggle={styles.reveal} triggerHook="onEnter" offset="100">
        <section className={`${styles.textBlock} trigger`}>
          <Container size="medium">
            <p>{text}</p>
          </Container>
        </section>
      </Scene>
    </Controller>
  )
}

export default TextBlock;
