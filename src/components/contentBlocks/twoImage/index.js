import React from "react";
import Container from "../../container";
import { Controller, Scene } from 'react-scrollmagic';

import * as styles from "./styles.module.scss";

const TwoImage = ({content}) => {
  return (
    <Controller>
      <Scene classToggle={styles.reveal} triggerHook="onEnter" offset="100">
        <div className={styles.twoImage}>
          <Container>
            <div className={styles.twoImageInner}>
              <img src={content.imageOne.image.mediaItemUrl} alt="" />
              <img src={content.imageTwo.image.mediaItemUrl} alt="" />
            </div>
          </Container>
        </div>
      </Scene>
    </Controller>
  )
}

export default TwoImage;
