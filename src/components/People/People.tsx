import { DaniilBg, DecorateScroll, SlavaBg } from '../../assets';
import styles from './People.module.scss';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant, zoomIn } from '../../utils/motion';

function People() {
    return (
        <div id="People" className={styles.Content}>
            <div className={styles.Screen}>
                <div className={styles.Main}>
                    <motion.a 
                        href='https://gusarich.com/'
                        target="_blank"
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
                                    Technical Leader
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
                    </motion.a>

                    {/* <motion.a
                        href='https://slava.bio'
                        target="_blank"
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
                                at TON Foundation and a strong <br />
                                passion for building successful projects.
                            </motion.h1>
                        </div>
                    </motion.a> */}
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
