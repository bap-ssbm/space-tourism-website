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

const imgVariant = {
    hidden: {
        scale: 0,
        opacity: 0,
        x: -300
    },
    visible: {
        scale: 1,
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.8,
            ease: "easeIn",
            type: 'spring' // adjust this value as needed
        }
    },
    exit: {
        scale: 0,
        opacity: 0,
        x: 200,
        transition: {
            duration: 0.9,
            ease: "easeInOut" // adjust this value as needed
        }
    }
}
const descVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeIn",
            delay: 0.5// adjust this value as needed
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "easeIn"
            // adjust this value as needed
        }
    }
}

const bottomVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeIn",
            delay: 1// adjust this value as needed
        }
    },
    exit: {
        opacity: 0
    }
}



const Destination = ({ viewportWidth, destinations }) => {

    let source = "./assets/home/background-home-desktop.jpg";

    if (viewportWidth > 768) {
        source = "./assets/destination/background-destination-desktop.jpg";
    }
    else if (viewportWidth > 580) {
        source = "./assets/destination/background-destination-tablet.jpg";
    } else {
        source = "./assets/destination/background-destination-mobile.jpg";
    }


    const [active, setActive] = useState(1);
    // setTimeout(() => {
    //     const nextIndex = (active - 1)===-1?(3):(active - 1);
    //     setActive(nextIndex);
    // },15000);

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
            <motion.article className="destination" variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit">
                <h1 className="main-title">
                    <span>01</span>PICK YOUR DESTINATION
                </h1>
                <div className="destinations-wrapper">
                    <div className="planet-wrapper dest-section">
                        <AnimatePresence mode='wait'>
                            {active == 0 && (<motion.img drag dragConstraints={{left:0, top:0, right:0, bottom:0 }} key={0} variants={imgVariant} initial="hidden" animate="visible" exit="exit" src={destinations[0].images.png} />)}
                            {active == 1 && (<motion.img drag key={1} dragConstraints={{left:0, top:0, right:0, bottom:0 }} variants={imgVariant} initial="hidden" animate="visible" exit="exit" src={destinations[1].images.png} />)}
                            {active == 2 && (<motion.img drag key={2} dragConstraints={{left:0, top:0, right:0, bottom:0 }} variants={imgVariant} initial="hidden" animate="visible" exit="exit" src={destinations[2].images.png} />)}
                            {active == 3 && (<motion.img drag key={3} dragConstraints={{left:0, top:0, right:0, bottom:0 }} variants={imgVariant} initial="hidden" animate="visible" exit="exit" src={destinations[3].images.png} />)}
                        </AnimatePresence>
                    </div>
                    <div className="dest-desc-wrapper dest-section">
                        <navbar className="dest-nav">
                            <div className="dest-nav-item" onClick={() => { setActive(0) }} style={{ borderBottom: (active === 0 && "3px white solid") }}>
                                MOON
                            </div>
                            <div className="dest-nav-item" onClick={() => { setActive(1) }} style={{ borderBottom: (active === 1 && "3px white solid") }}>
                                MARS
                            </div>
                            <div className="dest-nav-item" onClick={() => { setActive(2) }} style={{ borderBottom: (active === 2 && "3px white solid") }}>
                                EUROPA
                            </div>
                            <div className="dest-nav-item" onClick={() => { setActive(3) }} style={{ borderBottom: (active === 3 && "3px white solid") }}>
                                TITAN
                            </div>
                        </navbar>
                        <AnimatePresence mode='wait'>
                            {active == 0 && (<motion.div className="dest-desc-wrapper-title"
                                variants={descVariant} key={0} initial="hidden" animate="visible" exit="exit"
                            >
                                <motion.h1 variants={fadeVariant}>{destinations[0].name.toUpperCase()} </motion.h1>
                                <motion.p variants={fadeVariant}>{destinations[0].description}</motion.p>
                            </motion.div>)}
                            {active == 1 && (<motion.div className="dest-desc-wrapper-title"
                                variants={descVariant} key={1} initial="hidden" animate="visible" exit="exit"
                            >
                                <motion.h1 variants={fadeVariant}>{destinations[1].name.toUpperCase()} </motion.h1>
                                <motion.p variants={fadeVariant}>{destinations[1].description}</motion.p>
                            </motion.div>)}
                            {active == 2 && (<motion.div className="dest-desc-wrapper-title"
                                variants={descVariant} key={2} initial="hidden" animate="visible" exit="exit"
                            >
                                <motion.h1 variants={fadeVariant}>{destinations[2].name.toUpperCase()} </motion.h1>
                                <motion.p variants={fadeVariant}>{destinations[2].description}</motion.p>
                            </motion.div>)}
                            {active == 3 && (<motion.div className="dest-desc-wrapper-title"
                                variants={descVariant} key={3} initial="hidden" animate="visible" exit="exit"
                            >
                                <motion.h1 variants={fadeVariant}>{destinations[3].name.toUpperCase()} </motion.h1>
                                <motion.p variants={fadeVariant}>{destinations[3].description}</motion.p>
                            </motion.div>)}
                        </AnimatePresence>

                        <hr />
                        <div className="dest-bottom-wrapper">
                            <div className="distance dest-bottom-wrapper-section">
                                <p>
                                    AVG. DISTANCE
                                </p>
                                <AnimatePresence mode='wait'>
                                    {active == 0 && (<motion.h2 key={0} initial="hidden" animate="visible" exit="exit" variants={bottomVariant}>{destinations[0].distance.toUpperCase()}</motion.h2>)}
                                    {active == 1 && (<motion.h2 key={1} initial="hidden" animate="visible" exit="exit" variants={bottomVariant}>{destinations[1].distance.toUpperCase()}</motion.h2>)}
                                    {active == 2 && (<motion.h2 key={2} initial="hidden" animate="visible" exit="exit" variants={bottomVariant}>{destinations[2].distance.toUpperCase()}</motion.h2>)}
                                    {active == 3 && (<motion.h2 key={3} initial="hidden" animate="visible" exit="exit" variants={bottomVariant}>{destinations[3].distance.toUpperCase()}</motion.h2>)}
                                </AnimatePresence>
                            </div>
                            <div className="travel-time dest-bottom-wrapper-section">
                                <p>
                                    AVG. DISTANCE
                                </p>
                                <AnimatePresence mode='wait'>
                                    {active == 0 && (<motion.h2 key={0} initial="hidden" animate="visible" exit="exit" variants={bottomVariant}>{destinations[0].travel.toUpperCase()}</motion.h2>)}
                                    {active == 1 && (<motion.h2 key={1} initial="hidden" animate="visible" exit="exit" variants={bottomVariant}>{destinations[1].travel.toUpperCase()}</motion.h2>)}
                                    {active == 2 && (<motion.h2 key={2} initial="hidden" animate="visible" exit="exit" variants={bottomVariant}>{destinations[2].travel.toUpperCase()}</motion.h2>)}
                                    {active == 3 && (<motion.h2 key={3} initial="hidden" animate="visible" exit="exit" variants={bottomVariant}>{destinations[3].travel.toUpperCase()}</motion.h2>)}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.article>
        </>

    )
}

export default Destination;