import styles from './Projects.module.scss'
import { arrow, ArrowPeople, ArrowProjects, CirclePeople, DecorateEllipse, DecorateEllipse2,DecorateScroll, Monaki, OOIA, TonrafflesLock, TonrafflesNFT } from '../../assets'
import classNames from 'classnames'
import { SectionWrapper } from "../../hoc"
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "../../utils/motion";

function Projects() {

	function MakeClear(id: string){
		const t = document.getElementById(id);
		t?.classList.add(styles.Clear);
		t?.classList.add(styles.Scale);
		const T = document.getElementById(id + 'Title');
		T?.classList.add(styles.hidden);
	}

	function MakeBlur(id: string){
		const t = document.getElementById(id);
		t?.classList.remove(styles.Clear);
		t?.classList.remove(styles.Scale);
		const T = document.getElementById(id + 'Title');
		T?.classList.remove(styles.hidden);
	}

    return (
		<div className={styles.Content}>
			<div className={styles.Screen}>
				<div className={styles.Upper}>
					<motion.div variants={fadeIn("right", "spring", 0, 1)} className={styles.LineProjects}>
						<img src={CirclePeople} alt="" className={styles.Rotate}  />
						<img src={ArrowProjects} alt="" className={styles.ArrowAbout} />
					</motion.div>
					<motion.h1 variants={textVariant()} className={styles.Title}><p className={styles.blue}>Upcoming</p> & <p className={styles.purple}>recent projects</p> to give a solid look through in order to see our capabilities</motion.h1>
				</div>
				<div className={styles.Projects}>
					<motion.div onMouseEnter={() => MakeClear('Block1')} onMouseLeave={() => MakeBlur('Block1')} variants={fadeIn("right", "spring", 0, 1)} className={classNames(styles.Block, styles.Block1, styles.cursor_pointer)}>
						<h1 id="Block1Title" className={styles.BlockTitle}>Tonraffles Lock module</h1>
						<img id="Block1" src={TonrafflesLock} alt="" className={styles.Block1Img} />
					</motion.div>
					<motion.div onMouseEnter={() => MakeClear('Block2')} onMouseLeave={() => MakeBlur('Block2')} variants={fadeIn("left", "spring", 0.5, 1)} className={classNames(styles.Block, styles.Block2, styles.cursor_pointer)}>
						<h1 id="Block2Title" className={styles.BlockTitle}>Tonraffles NFT Launchpad</h1>
						<img id="Block2" src={TonrafflesNFT} alt="" className={styles.Block2Img} />
					</motion.div>
					<motion.div onMouseEnter={() => MakeClear('Block3')} onMouseLeave={() => MakeBlur('Block3')} variants={fadeIn("down", "spring", 0.25, 1)}  className={classNames(styles.Block, styles.Block3, styles.cursor_pointer)}>
						<h1 id="Block3Title" className={styles.BlockTitle}>OOIA shopping cart feature</h1>
						<img id="Block3" src={OOIA} alt="" className={styles.Block3Img} />
					</motion.div>
					<motion.div onMouseEnter={() => MakeClear('Block4')} onMouseLeave={() => MakeBlur('Block4')} variants={fadeIn("down", "spring", 0.25, 1)}  className={classNames(styles.Block, styles.Block4, styles.cursor_pointer)}>
						<h1 id="Block4Title" className={styles.BlockTitle}>Monaki NFT staking</h1>
						<img id="Block4" src={Monaki} alt="" className={styles.Block4Img} />
					</motion.div>
					<motion.div variants={fadeIn("left", "spring", 0.5, 1)}  className={classNames(styles.Block, styles.Block5)}>
						<h1 className={styles.BlockTitle}>Coming soon.....</h1>
						<div className={classNames(styles.cursor_pointer, styles.BlockButton)}><img src={arrow} alt="" /></div>
					</motion.div>
				</div>
			</div>
			<img src={DecorateEllipse} alt="" className={styles.Decoration} />
			<img src={DecorateScroll} alt="" id="Decoration2" className={styles.Decoration2} />
			<img src={DecorateEllipse2} alt="" className={styles.Decoration3} />
		</div>
    )
}

export default SectionWrapper(Projects, "projects")

