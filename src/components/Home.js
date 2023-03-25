import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const backgroundVariant = {
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
const wrapperVariant={
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition:{
            duration:3,
            staggerChildren: 2
        }
      
    },
    exit: {
        opacity: 0
    }
}
const individualVariant = {
    hidden: {
        opacity: 0,
        scale: 1.1
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition:{
            duration:2,
            staggerChildren: 2.5
        }
      
    },
    exit: {
        opacity: 0
    }
}
const Home = ({ viewportWidth }) => {

    let source = "./assets/home/background-home-desktop.jpg";

    if (viewportWidth > 768) {
        source = "./assets/home/background-home-desktop.jpg";
    }
    else if (viewportWidth > 580) {
        source = "./assets/home/background-home-tablet.jpg";
    } else {
        source = "./assets/home/background-home-mobile.jpg";
    }
    return (
        <>
            <div className="background-image">
                <motion.img src={source}
                    variants={backgroundVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                />
            </div>
            <motion.article className="homepage" variants={wrapperVariant}   initial="hidden"
                    animate="visible" exit="exit">

                <div className="home-section space-box">
                    <motion.div className="description-wrapper" variants={wrapperVariant} transition={{staggerChildren: 1}}  initial="hidden"
                    animate="visible">
                        <motion.h3 variants={individualVariant} whileHover={{textShadow: "0px 0px 4px white"}} >SO, YOU WANT TO TRAVEL TO</motion.h3>
                        <motion.h1 variants={individualVariant} whileHover={{textShadow: "0px 0px 4px white"}} >SPACE</motion.h1>
                        <motion.p variants={individualVariant} whileHover={{textShadow: "0px 0px 4px white"}}>
                            Let’s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world experience!
                        </motion.p>
                    </motion.div>

                </div>
                <div className="home-section explore">
                <Link to="/destination">
                    <motion.div whileHover={{boxShadow: "0px 0px 4px white",textShadow: "0px 0px 4px black"}} className="explore-circle">
                        
                            <span>EXPLORE</span>
                       
                    </motion.div>
                    </Link>
                </div>

            </motion.article>
        </>

    )
}

export default Home;