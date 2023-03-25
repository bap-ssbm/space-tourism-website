import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useState } from "react";

const hideVariant = {
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

const descVariant = {
    hidden: {
        opacity: 0,
        x: -1000
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 3,
            type: 'spring',
            ease: 'easeInOut',
            stiffness: 90,
            mass: 0.8
        } 
    },
    exit: {
        opacity: 0,
        x: -1000, 
        transition: {
            duration: 1.2,
            ease: 'easeInOut'
        } 
    },
    
}

const imageVariant = {
    hidden: {
        opacity: 0,
        y: 1000
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    },
    exit: {
        opacity: 0,
        y: 1000,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Crew = ({ viewportWidth, crew }) => {

    const [active, setActive] = useState(3);

    let source = "./assets/home/background-home-desktop.jpg";

    if (viewportWidth > 768) {
        source = "./assets/crew/background-crew-desktop.jpg";
    }
    else if (viewportWidth > 580) {
        source = "./assets/crew/background-crew-tablet.jpg";
    } else {
        source = "./assets/crew/background-crew-mobile.jpg";
    }

    // setTimeout(() => {
    //     const nextIndex = (active - 1)===-1?(3):(active - 1);
    //     setActive(nextIndex);
    // },10000);
    return (
        <>
            <div className="background-image">
                <motion.img src={source}
                    variants={hideVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                />
            </div>
            <motion.article className="crew"
            variants={hideVariant}
            initial="hidden"
            animate="visible"
            exit="exit">
                <h1 className="main-title">
                    <span>02</span>MEET YOUR CREW
                </h1>
                <div className="crew-wrapper">
                    <div className="crew-section crew-desc-section">
                    < AnimatePresence mode='wait'>
                        {active === 0 && (<motion.div variants={descVariant}
                            key={0}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            >
                            <h2>{crew[0].role.toUpperCase()}</h2>
                            <h1>{crew[0].name.toUpperCase()}</h1>
                            <p>{crew[0].bio}</p>
                        </motion.div>)}
                        {active === 1 && (<motion.div variants={descVariant}
                             key={1}
                             initial="hidden"
                             animate="visible"
                             exit="exit"
                             >
                            <h2>{crew[1].role.toUpperCase()}</h2>
                            <h1>{crew[1].name.toUpperCase()}</h1>
                            <p>{crew[1].bio}</p>
                        </motion.div>)}
                        {active === 2 && (<motion.div variants={descVariant}
                             key={2}
                             initial="hidden"
                             animate="visible"
                             exit="exit"
                             transition= {{delay: 1, duration: 2}}>
                            <h2>{crew[2].role.toUpperCase()}</h2>
                            <h1>{crew[2].name.toUpperCase()}</h1>
                            <p>{crew[2].bio}</p>
                        </motion.div>)}
                        {active === 3 && (<motion.div variants={descVariant}
                             key={3}
                             initial="hidden"
                             animate="visible"
                             exit="exit"
                             >
                            <h2>{crew[3].role.toUpperCase()}</h2>
                            <h1>{crew[3].name.toUpperCase()}</h1>
                            <p>{crew[3].bio}</p>
                        </motion.div>)}
                        </AnimatePresence>

                        <div className="crew-nav">
                            <button onClick={() => { setActive(0) }} style={{ backgroundColor: (active === 0) && "white" }}></button>
                            <button onClick={() => { setActive(1) }} style={{ backgroundColor: (active === 1) && "white" }}></button>
                            <button onClick={() => { setActive(2) }} style={{ backgroundColor: (active === 2) && "white" }}></button>
                            <button onClick={() => { setActive(3) }} style={{ backgroundColor: (active === 3) && "white" }}></button>
                        </div>
                    </div>
                    <div className="crew-section crew-img">
                        < AnimatePresence mode='wait'>
                            {active === 0 && (<motion.img variants={imageVariant} key={0} initial="hidden" animate="visible" exit="exit" src={crew[0].images.png} />)}
                            {active === 1 && (<motion.img variants={imageVariant} key={1} initial="hidden" animate="visible" exit="exit" src={crew[1].images.png} />)}
                            {active === 2 && (<motion.img variants={imageVariant} key={2} initial="hidden" animate="visible" exit="exit" src={crew[2].images.png} />)}
                            {active === 3 && (<motion.img variants={imageVariant} key={3} initial="hidden" animate="visible" exit="exit" src={crew[3].images.png} />)}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.article>
        </>
    )
}

export default Crew;