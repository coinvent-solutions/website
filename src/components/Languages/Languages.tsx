import { FC } from 'react';
import { logo } from '../../assets'
import { langs } from '../../constants'
import styles from './Languages.module.scss'
import classNames from 'classnames'
import { SectionWrapper } from "../../hoc"
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn, slideIn } from "../../utils/motion";

function Languages() {
    return (
		<motion.div variants={fadeIn("right", "spring", 0, 1)} className={styles.Order}>
			<div className={styles.Main}>
				{langs.map((i) => (
					<img src={i} alt="" className={styles.Logo} />
				))}
				<h1 className={styles.detail}>+10....</h1>
			</div>
			<h1 className={styles.Text}>Recognized experience in <p className={styles.blue}>Front-<br/>End</p>, <p className={styles.blue}>Back-end</p>, <p className={styles.blue}>Blockchain</p> e.t.c</h1>
		</motion.div>
    )
}

export default SectionWrapper(Languages, 'language')

