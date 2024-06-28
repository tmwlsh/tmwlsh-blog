import React from "react";
import { Link } from "gatsby";
import Container from "../container";
import { Controller, Scene } from 'react-scrollmagic';

import * as styles from "./styles.module.scss";

const WorkRow = ({content={}, layout="standard", linesPos="topLeft"}) => {
  return (
    <Controller>
      <Scene classToggle={styles.reveal} triggerHook="onEnter" offset="100">
        <section className={`${styles.workRow} ${styles[linesPos]} trigger`}>
          <Container>
            <div className={`${styles.workRowInner} ${styles[layout]}`}>
              <div className={styles.workRowImage}>
                <img src={content.image} alt={content.imageAlt} />
              </div>
              <div className={styles.workRowContent}>
                <p className={styles.workRowDate}>{content.date}</p>
                <h3>{content.title}</h3>
                <p className={styles.workRowStrapline}>{content.strapline}</p>
                <Link to={content.link.url}>{content.link.title}</Link>
              </div>
            </div>
          </Container>
        </section>
      </Scene>
    </Controller>
  )
}

export default WorkRow;
