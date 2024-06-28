import React from "react";
import Container from "../../container";
import { Controller, Scene } from 'react-scrollmagic';

import * as styles from "./styles.module.scss";

const TwoImage = ({content}) => {
  return (
    <Controller>
      <Scene classToggle={styles.reveal} triggerHook="onEnter" offset="100">
        <div className={styles.content}>
          <Container>
            <p dangerouslySetInnerHTML={{__html: content.content}} />
          </Container>
        </div>
      </Scene>
    </Controller>
  )
}

export default TwoImage;
