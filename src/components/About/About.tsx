import { FC } from 'react';
import {
    ArrowPeople,
    CirclePeople,
    HelpingConstruct,
    Block5,
    Block2,
    Block4,
    Block3,
    line,
    DecorateEllipse,
    BlackBlock,
    Block2Sm,
    Block4Sm,
    Block3Sm,
    Block5Sm,
} from '../../assets';
import { langs } from '../../constants';
import styles from './About.module.scss';
import classNames from 'classnames';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant, zoomIn } from '../../utils/motion';


function About() {
    function ScrollTo(id: string) {
        (document.getElementById(id) as HTMLBodyElement).scrollIntoView({
            block: 'center',
            behavior: 'smooth',
        });
    }

    return (
        <div id="Advantages" className={styles.Content}>
            <div className={styles.LastText}>
                <div className={styles.ExtraText}></div>
                <motion.h1
                    variants={textVariant(0.2)}
                    className={styles.Learn}
                >
                    Learn more about our{' '}
                    <p className={styles.blue}>stack</p>,{' '}
                    <p className={styles.blue}>faces</p>,{' '}
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
            <div className={styles.Screen}>
                <div className={styles.Block1}>
                    <div className={styles.Block1_Text}>
                        <h1 className={styles.Block1_Title}>
                            Helping to construct
                        </h1>
                        <p className={styles.Block1_Info}>
                            If you don’t have a clear idea, but a<br />
                            certain task, we’ll help to verify all the
                            <br />
                            details & get to work asap!
                        </p>
                    </div>
                    <img
                        src={HelpingConstruct}
                        alt=""
                        className={styles.Block1_Img}
                    />
                </div>
                <div className={styles.Block2}>
                    <div className={styles.Block2_Text}>
                        <p className={styles.Block2_Info}>
                            We provide clients with great quality of:
                        </p>
                        <h1 className={styles.Block2_Title}>
                            Front-end, Back-end,
                            <br />
                            Telegram bots, Web3,
                            <br />
                            Design etc.
                        </h1>
                    </div>
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcSet={`${Block2} 768w`}
                            sizes="768px"
                        />
                        <source srcSet={`${Block2Sm} 1251w`} sizes="1251px" />
                        <img src={Block2Sm} className={styles.Block2_Img} />
                    </picture>
                </div>
                <div className={styles.Block3}>
                    <div className={styles.Block3_Text}>
                        <h1 className={styles.Block3_Title}>
                            Our clients reach out <br />
                            to us multiple times.
                        </h1>
                        <img
                            src={line}
                            alt=""
                            className={styles.Block3_Underline}
                        />
                        <p className={styles.Block3_Info}>
                            We take our clients' tasks
                            <br />
                            responsibly. We bring projects to
                            <br />
                            the end, offer our ideas and
                            <br />
                            strictly meet any deadlines
                        </p>
                        <div
                            onClick={() => ScrollTo('Projects')}
                            className={classNames(
                                styles.Button,
                                styles.cursor_pointer
                            )}
                        >
                            Look through our projects
                        </div>
                    </div>
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcSet={`${Block3} 768w`}
                            sizes="768px"
                        />
                        <source srcSet={`${Block3Sm} 1251w`} sizes="1251px" />
                        <img src={Block3Sm} className={styles.Block3_Img} />
                    </picture>
                </div>
                <div className={styles.Block4}>
                    <div className={styles.Block4_Text}>
                        <h1 className={styles.Block4_Title}>Supportive</h1>
                        <p className={styles.Block4_Info}>
                            We try to give you as
                            <br />
                            much help, informaton &<br />
                            guideline as possible!
                        </p>
                    </div>
                    <picture className={styles.Pict}>
                        <source
                            media="(max-width: 1250px)"
                            srcSet={`${Block4Sm} 1250w`}
                            sizes="1250px"
                        />
                        <source srcSet={`${Block4} 1251w`} sizes="1251px" />
                        <img src={Block4} className={styles.Block4_Img} />
                    </picture>
                </div>
                <div className={styles.Block5}>
                    <div className={styles.Block5_Text}>
                        <h1 className={styles.Block5_Title}>
                            We bring projects to
                            <br />
                            the end &rarr;
                        </h1>
                        <p className={styles.Block5_Info}>
                            If you don’t have a clear idea, but
                            <br />a certain task, we’ll help to verify
                            <br />
                            all the details & get to work asap!
                        </p>
                    </div>
                    <picture>
                        <source
                            media="(max-width: 1250px)"
                            srcSet={`${Block5Sm} 1250w`}
                            sizes="1250px"
                        />
                        <source srcSet={`${Block5} 1251w`} sizes="1251px" />
                        <img src={Block5} className={styles.Block5_Img} />
                    </picture>
                </div>
                <img
                    src={BlackBlock}
                    alt=""
                    className={classNames(styles.BlackBlock, styles.Bounce)}
                />
            </div>
            <img src={DecorateEllipse} alt="" className={styles.Decoration} />
        </div>
    );
}

export default About;
