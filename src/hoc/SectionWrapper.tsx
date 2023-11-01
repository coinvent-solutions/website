import { FC } from 'react'
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import styles from '../styles/global.module.scss'

const StarWrapper = (Component:FC , idName:string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
