import {
    ArrowPeople,
    CirclePeople,
    DaniilBg,
    DecorateScroll,
    SlavaBg,
} from '../../assets';
import styles from './People.module.scss';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant, zoomIn } from '../../utils/motion';

function People() {
    return (
        <div id="People" className={styles.Content}>
            <div className={styles.Screen}>
                <div className={styles.Main}>
                    <motion.div
                        variants={fadeIn('right', 'spring', 0, 1)}
                        className={styles.Daniil}
                    >
                        <img
                            src={DaniilBg}
                            alt=""
                            className={styles.Daniil_Img}
                        />
                        <div className={styles.Daniil_Content}>
                            <h1 className={styles.Detail}>
                                Founder,{' '}
                                <p className={styles.MoreDetail}>
                                    Technical leader
                                </p>
                            </h1>
                            <div className={styles.NameAndPhoto}>
                                <motion.h1
                                    variants={textVariant()}
                                    className={styles.Title}
                                >
                                    Daniil Sedov
                                </motion.h1>
                            </div>
                            <motion.h1
                                variants={textVariant()}
                                className={styles.Info}
                            >
                                A well-known developer and auditor
                                <br />
                                with extensive knowledge and experience <br />
                                in the blockchain industry, particularly in TON.
                            </motion.h1>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('right', 'spring', 0.5, 0.75)}
                        className={styles.Slava}
                    >
                        <img
                            src={SlavaBg}
                            alt=""
                            className={styles.Slava_Img}
                        />
                        <div className={styles.Slava_Content}>
                            <h1 className={styles.Detail}>
                                Сo-Founder,{' '}
                                <p className={styles.MoreDetail}>
                                    Project Manager
                                </p>
                            </h1>
                            <div className={styles.NameAndPhoto}>
                                <motion.h1
                                    variants={textVariant(0.5)}
                                    className={styles.Title}
                                >
                                    Slava Yakimenko
                                </motion.h1>
                            </div>
                            <motion.h1
                                variants={textVariant(0.5)}
                                className={styles.Info}
                            >
                                A skilled manager with work experience <br />
                                at the TON Foundation and a strong <br />
                                passion for building successful projects.
                            </motion.h1>
                        </div>
                    </motion.div>
                </div>
                <div className={styles.LastText}>
                    <div className={styles.ExtraText}></div>
                    <motion.h1
                        variants={textVariant(0.2)}
                        className={styles.Learn}
                    >
                        Learn more about our{' '}
                        <p className={styles.blue}>stack</p>,{' '}
                        <p className={styles.purple}>faces</p>,{' '}
                        <p className={styles.blue}>advantages</p> & much more
                    </motion.h1>
                    <div className={styles.LineAbout}>
                        <img
                            src={CirclePeople}
                            alt=""
                            className={styles.Rotate}
                        />
                        <img
                            src={ArrowPeople}
                            alt=""
                            className={styles.ArrowAbout}
                        />
                    </div>
                </div>
            </div>
            <img
                src={DecorateScroll}
                id="Decoration1"
                alt=""
                className={styles.Decoration}
            />
        </div>
    );
}

export default SectionWrapper(People, 'people');
