import React from "react";
import Container from "../../container";
import { Controller, Scene } from 'react-scrollmagic';

import * as styles from "./styles.module.scss";

const TitleTextColumns = ({content}) => {
  return (
    <Controller>
      <Scene classToggle={styles.reveal} triggerHook="onEnter" offset="100">
        <div className={styles.titleTextColumns}>
          <Container>
            <div className={styles.titleTextColumnsInner}>
              {content.columns.map((item, index) => {
                return (
                  <div className={styles.textTitleColumn}>
                    <p>{item.singleColumn.title}</p>
                    <p>{item.singleColumn.text}</p>
                  </div>
                )
              })}
            </div>
          </Container>
        </div>
      </Scene>
    </Controller>
  )
}

export default TitleTextColumns;
