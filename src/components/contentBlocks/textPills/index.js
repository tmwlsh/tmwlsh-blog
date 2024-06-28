import React from "react";
import Container from "../../container";
import { Controller, Scene } from 'react-scrollmagic';

import * as styles from "./styles.module.scss";

const TextPills = ({content}) => {
  return (
    <Controller>
      <Scene classToggle={styles.reveal} triggerHook="onEnter" offset="100">
        <div className={styles.textPills}>
          <Container>
            <h3>{content.title}</h3>
            <ul>
              {content.pills.map((item, index) => <li>{item.text}</li>)}
            </ul>
          </Container>
        </div>
      </Scene>
    </Controller>
  )
}

export default TextPills;
