import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Header from "../header";
import Footer from "../footer";

import "../../sass/base.scss";

import * as styles from "./styles.module.scss";

const Layout = ({children}) => {

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 200, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const springConfig2 = { damping: 100, stiffness: 700 };
  const cursorXSpring2 = useSpring(cursorX, springConfig2);
  const cursorYSpring2 = useSpring(cursorY, springConfig2);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    };
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, []);

  return (
    <div className={styles.layout}>
      <motion.div className={styles.cursor} style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }} />
      <motion.div className={styles.cursorTwo} style={{
        translateX: cursorXSpring2,
        translateY: cursorYSpring2,
      }} />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
