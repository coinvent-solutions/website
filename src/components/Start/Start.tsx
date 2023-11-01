import { email, telegram } from '../../assets'
import styles from './Start.module.scss'
import classNames from 'classnames'
import { SectionWrapper } from "../../hoc"
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";


function Start() {
    return (
        <div className={styles.Main}>
			<div className={styles.Content}>
				<div className={styles.Text}>
					<h1 className={styles.Text_LOGO}>High competence in building <p className={styles.blue}>premium</p> quality web projects</h1>
					<h1 className={styles.Text_Detail}>We are a developer team with a strong passion for open-source development and blockchain technology. Over the past several years, we have primarily been working on blockchain projects. </h1>
					<div className={styles.Buttons}>
						<a href="https://t.me/coinvent_dev" className={classNames(styles.cursor_pointer, styles.Button)}>
							<img src={telegram} alt="" />
							<h1>Contact us via: Telegram</h1>
						</a>
						<a href="mailto:business@coinvent.dev" className={classNames(styles.cursor_pointer, styles.Button, styles.EMAIL)}>
							<img src={email} alt=" " />
							<h1>Send an E-mail</h1>
						</a>
					</div>
				</div>
				<motion.div variants={fadeIn("up", "spring", 0.25, 1)} className={styles.Comment}>
					<h1 className={styles.Comment_Text}>Tons of experience with TWA, DEX, DeFi, NFTs, Smart-contracts & much more on the list</h1>
				</motion.div>
			</div>
		</div>
    )
}

export default SectionWrapper(Start, "start")
