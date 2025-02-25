import "./menu.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
    const [buttonText, setButtonText] = useState("Get Started");
    const [hasClicked, setHasClicked] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={
                {
                    duration: 1.5,
                    ease: "backIn"
                }}
            exit={{ opacity: 0 }}
            className="animate"
        >
            <div className="menu-middle">
                <div className="blur"></div>
            </div>
            <div id="menu">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0,
                        duration: 1,
                        ease: "backIn"
                    }}

                    // make it so that on exit, the text moves to the left with no delay
                    exit={{ x: -2000 }}
                >
                    Music
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.25,
                        duration: 1,
                        ease: "backIn"
                    }}
                    exit={{ x: 2000 }}
                >
                    Visualizer
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        ease: "backIn"
                    }}
                    exit={{ x: -1300 }}
                >
                    thing
                </motion.p>
            </div>
            <Link to="/Main" className="button"
                onMouseEnter={() => !hasClicked && setButtonText("Let's Go!")}
                onMouseLeave={() => !hasClicked && setButtonText("Get Started")}
                onClick={() => {
                    setHasClicked(true);
                    setButtonText("uwu uwu uwu");
                }}
            >
                <motion.button className="menu-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.25,
                        duration: 1,
                        ease: "backIn"
                    }}
                    exit={{ y: 2000 }}>
                    {buttonText}
                </motion.button>
                <span className="menu-span"></span>
            </Link>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 0,
                    duration: 1,
                    ease: "backIn"
                }}
                // rotation on exit
                exit={{  rotate: 360, opacity: 0 }}
                className="made-by"
            >
                Made with ❤ by <a className="made-by-link" href="nyalice.com">Nyali_ce</a>
            </motion.p>
        </motion.div>
    );
}

export default Menu;