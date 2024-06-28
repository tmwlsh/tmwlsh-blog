import React from "react";
import Container from "../container";
import { Controller, Scene } from 'react-scrollmagic';

import * as styles from "./styles.module.scss";

const Interests = ({interests=[]}) => {
  return (
    <Controller>
      <Scene classToggle={styles.reveal} triggerHook="onEnter" offset="100">
        <section className={`${styles.interests} trigger`}>
          <Container size="medium">
            <h3>Areas of interest</h3>
            <ul>
              {interests.map((item, index) => <li key={`interest-${index}`}>{item}</li>)}
            </ul>
          </Container>
        </section>
      </Scene>
    </Controller>
  )
}

export default Interests;
