import "./menu.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -window.innerHeight / 2,
                opacity: 0
             }}
            transition={
                {
                    duration: 1,
                    ease: "backIn"
                }}
            className="animate"
        >
            <div className="menu-middle">
                <div className="blur"></div>
            </div>
            <div id="menu">
                <p>Music</p>
                <p>Visualizer</p>
                <p>thing</p>
            </div>
            <Link to="/Main" className="button">
                <button className="menu-button"
                >
                    Get Started
                </button>
                <span className="menu-span"></span>
            </Link>
        </motion.div>
    );
}

export default Menu;