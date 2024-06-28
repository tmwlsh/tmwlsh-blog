import React from "react";
import Container from "../../container";
import { Controller, Scene } from 'react-scrollmagic';

import * as styles from "./styles.module.scss";

const FullWidthImage = ({content}) => {
  return (
    <Controller>
      <Scene classToggle={styles.reveal} triggerHook="onEnter" offset="100">
        <div className={styles.fullWidthImage}>
          <Container>
            <img src={content.image.mediaItemUrl} alt="" />
          </Container>
        </div>
      </Scene>
    </Controller>
  )
}

export default FullWidthImage;
