
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const navMotion = {
    hover: {
        textShadow: "0px 0px 4px white",
        scale: 1.05,
        transition: {
            ease: "easeInOut"
        }
    },
    lower: {
        y: -3
    }
}

const hamburgVariant = {
    hidden: {
        x: "100vw"
    },
    visible: {
        x: 0,
        transition: {
            type: "tween"
        }
    },
    exit: {
        x: "100vw",
        transition:{
            duration: 0.5
        }
    }
}

const navbarVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition:{
            duration:2
        }
    }
}




const Navbar = ({ location, viewportWidth }) => {


    const [showHamMenu, setShowHamMenu] = useState(false);

    return (

        <motion.navbar className="navbar" variants={navbarVariant} initial="hidden" animate="visible">
            <motion.div className="logo" >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="24" cy="24" r="24" fill="#FFF" />
                        <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
                    </g>
                </svg>
            </motion.div>
            <div className="nav-line">

            </div>

            <div className="hamburger-wrapper">
                <button className="hamburger" onClick={() => { setShowHamMenu(!showHamMenu) }}>
                    {showHamMenu ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                            <g fill="#D0D6F9" fill-rule="evenodd">
                                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                            </g>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
                    )}

                </button>
                <AnimatePresence>
                    {
                        (showHamMenu || viewportWidth > 580) && (

                            <motion.div className="nav-items-wrapper"
                                variants={hamburgVariant}
                                initial= {viewportWidth <= 580 && "hidden"}
                                animate= {viewportWidth <= 580 && "visible"}
                                exit={showHamMenu &&"exit"}
                            >
                                <div className="nav-item-wrapper" style={{ borderBottom: (location === "/" && viewportWidth > 580) && "3px white solid" }}>
                                    <motion.div
                                        variants={navMotion} whileHover="hover">
                                        <Link onClick={() => { setShowHamMenu(false) }} className="nav-item" to="/"><span className="number-title">00</span> HOME</Link>
                                    </motion.div>
                                </div>
                                <div className="nav-item-wrapper" style={{ borderBottom: (location === "/destination" && viewportWidth > 580) && "3px white solid" }}>
                                    <motion.div
                                        variants={navMotion} whileHover="hover">
                                        <Link onClick={() => { setShowHamMenu(false) }} className="nav-item" to="/destination"><span className="number-title">01</span> DESTINATION</Link>
                                    </motion.div>
                                </div>
                                <div className="nav-item-wrapper" style={{ borderBottom: (location === "/crew" && viewportWidth > 580) && "3px white solid" }}>
                                    <motion.div
                                        variants={navMotion} whileHover="hover">
                                        <Link onClick={() => { setShowHamMenu(false) }} className="nav-item" to="/crew"><span className="number-title">02</span> CREW</Link>
                                    </motion.div>
                                </div>
                                <div className="nav-item-wrapper" style={{ borderBottom: (location === "/technology" && viewportWidth > 580) && "3px white solid" }}>
                                    <motion.div
                                        variants={navMotion} whileHover="hover">
                                        <Link onClick={() => { setShowHamMenu(false) }} className="nav-item" to="/technology"><span className="number-title">03</span> TECHNOLOGY</Link>
                                    </motion.div>
                                </div>
                            </motion.div>

                        )
                    }
                </AnimatePresence>

            </div>

        </motion.navbar >

    )
}

export default Navbar;