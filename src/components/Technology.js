import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useState } from "react";

const fadeVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

const contentVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0
    }
}


const techDescVariant = {

    visible: {

        transition: {
            duration: 3,
            ease: "easeInOut",
            staggerChildren: 0.4
        }
    },
    exit: {
        opacity: 0,
        transtition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

const techTxtVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: "easeInOut"
        }
    }
}

const desktopImgVariant = {
    hidden: {
        opacity: 0,
        x:"30vw"
    },
    visible: {
        opacity: 1,
        x:0,
        transition: {
            type: "tween",
            duration: 0.8,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: "easeInOut"
        }
    }
}
const tabletImgVariant = {
    hidden: {
        opacity: 0,
        y:"30vh"
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            type: "tween",
            duration: 0.8,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        y:"30vh",
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
}



const Technology = ({ viewportWidth, technology }) => {
    const [active, setActive] = useState(0);
    let source = "./assets/home/background-home-desktop.jpg";

    if (viewportWidth > 768) {
        source = "./assets/technology/background-technology-desktop.jpg";
    }
    else if (viewportWidth > 580) {
        source = "./assets/technology/background-technology-tablet.jpg";
    } else {
        source = "./assets/technology/background-technology-mobile.jpg";
    }
    return (
        <>
            <div className="background-image">
                <motion.img src={source}
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                />
            </div>
            <motion.article className="technology"
                variants={contentVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                
                <h1 className="main-title">
                    <span>03</span>SPACE LAUNCH 101
                </h1>
                <div className="tech-wrapper">
                    <div className="tech-btn-desc-wrapper">
                        <div className="tech-btns">
                            <button onClick={() => { setActive(0) }} style={{ background: active === 0 && "white", color: active === 0 && "black" }}>1</button>
                            <button onClick={() => { setActive(1) }} style={{ background: active === 1 && "white", color: active === 1 && "black" }}>2</button>
                            <button onClick={() => { setActive(2) }} style={{ background: active === 2 && "white", color: active === 2 && "black" }}>3</button>
                        </div>
                        <div className="tech-desc-wrapper">
                            <h2>THIS TECHNOLOGY...</h2>

                            < AnimatePresence mode='wait'>
                                {active === 0 && (<motion.div className="desc-wrapper-tech"

                                    variants={techDescVariant}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <motion.h1 variants={techTxtVariant}>{technology[0].name.toUpperCase()}</motion.h1>
                                    <motion.p variants={techTxtVariant}>{technology[0].description}</motion.p>
                                </motion.div>)}
                                {active === 1 && (<motion.div className="desc-wrapper-tech"
                                    key={1}
                                    variants={techDescVariant}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <motion.h1 variants={techTxtVariant}>{technology[0].name.toUpperCase()}</motion.h1>
                                    <motion.p variants={techTxtVariant}>{technology[0].description}</motion.p>
                                </motion.div>)}
                                {active === 2 && (<motion.div className="desc-wrapper-tech"
                                    key={2}
                                    variants={techDescVariant}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <motion.h1 variants={techTxtVariant}>{technology[2].name.toUpperCase()}</motion.h1>
                                    <motion.p variants={techTxtVariant}>{technology[2].description}</motion.p>
                                </motion.div>)}

                            </AnimatePresence>

                        </div>
                    </div>

                    <div className="tech-img">
                        < AnimatePresence mode='wait'>
                            {active === 0 && (<motion.img
                                variants={(viewportWidth > 768) ? desktopImgVariant : tabletImgVariant }
                                key={0}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                src={(viewportWidth > 768) ? technology[0].images.portrait : technology[0].images.landscape} />)}
                            {active === 1 && (<motion.img
                                variants={(viewportWidth > 768) ? desktopImgVariant : tabletImgVariant }
                                key={1}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                src={(viewportWidth > 768) ? technology[1].images.portrait : technology[1].images.landscape} />)}
                            {active === 2 && (<motion.img
                                variants={(viewportWidth > 768) ? desktopImgVariant : tabletImgVariant }
                                key={2}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                src={(viewportWidth > 768) ? technology[2].images.portrait : technology[2].images.landscape} />)}
                        </AnimatePresence>
                    </div>
                </div>

            </motion.article>
        </>
    )
}

export default Technology;