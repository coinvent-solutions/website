import styles from './Footer.module.scss'
import { DecorateEllipse, DecorateFooter, footerBg, footerBgSm, logo } from '../../assets'
import classNames from 'classnames'
import { FC } from 'react'
import { FooterButtons } from '../../constants'
import { SectionWrapper } from "../../hoc"
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "../../utils/motion";

interface IFooterButton {
    logo: string,
	title: string,
	bg: string,
	color: string,
}

const FooterBtn: FC<IFooterButton> = ({ logo, title, bg, color }) => {
    return (
		<div className={classNames(bg, color, styles.FooterButton, styles.cursor_pointer)}>
			<img src={logo} alt="" className={styles.Logo} />
        	<h1 className={classNames(styles.BtnTitle, styles.cursor_pointer)}>{title}</h1>
		</div>
    );
};

function Footer() {
    return (
		<div className={styles.Content}>
			<div className={styles.Screen}>
				<motion.h1 variants={textVariant()} className={styles.Text}>You should trust professionals<br/>to turn your <p className={styles.TextGradient}>ideas into reality</p></motion.h1>		
			</div>
			<div className={styles.Footer}>
				<picture>
					<source media="(max-width: 600px)" srcSet={`${footerBgSm} 600w`} sizes="600px" />
					<source srcSet={`${footerBg} 1251w`} sizes="1251px" />
					<img src={footerBg} className={styles.FooterImg} />
				</picture>
				<div className={styles.FooterContent}>
					<motion.h1 variants={zoomIn(0.5, 0.5)} className={styles.FooterText}>Contact us via Telegram or<br/>leave us an e-mail, so we’ll<br/>respond!</motion.h1>
					<motion.div variants={zoomIn(0.5, 0.5)} className={styles.FooterPlaceButtons}>
						{FooterButtons.map((i) => (
							<FooterBtn {...i}></FooterBtn>
						))}
					</motion.div>
				</div>
				<div className={styles.FooterNav}>
					<div className={styles.FooterNavBtns}>
						<div className={classNames(styles.LogoBtn, styles.FooterNavBtn)}>
							<img src={logo} alt="" />
						</div>
						<h1 className={classNames(styles.FooterNavBtn, styles.cursor_pointer)}>Main</h1>
						<h1 className={classNames(styles.FooterNavBtn, styles.cursor_pointer)}>Our advantages</h1>
						<h1 className={classNames(styles.FooterNavBtn, styles.cursor_pointer)}>Our project</h1>
						<h1 className={classNames(styles.FooterNavBtn, styles.cursor_pointer)}>Direct contacting</h1>
					</div>
					<h1 className={styles.FooterUnder}>We reply as fast as we can.</h1>
				</div>
			</div>
			<div className={styles.MobileNav}>
				<div className={classNames(styles.LogoBtn, styles.FooterNavBtn)}>
					<img src={logo} alt="" />
				</div>
				<h1 className={styles.FooterUnder}>We reply as fast as we can.</h1>
				<div className={styles.MobileNavBtns}>
					<div className={styles.MobileNavBt}>
						<h1 className={classNames(styles.FooterNavBtn, styles.cursor_pointer)}>Main</h1>
						<h1 className={classNames(styles.FooterNavBtn, styles.cursor_pointer)}>Our advantages</h1>
					</div>
					<div className={styles.MobileNavBt}>
						<h1 className={classNames(styles.FooterNavBtn, styles.cursor_pointer)}>Our project</h1>
						<h1 className={classNames(styles.FooterNavBtn, styles.cursor_pointer)}>Direct contacting</h1>
					</div>
				</div>
			</div>
			<img src={DecorateEllipse} alt="" className={styles.Decoration} />
			<img src={DecorateFooter} alt="" className={styles.Decoration2} />
		</div>
    )
}

export default SectionWrapper(Footer, "footer")
