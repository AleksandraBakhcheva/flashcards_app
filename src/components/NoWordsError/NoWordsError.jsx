import styles from "./NoWordsError.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NoWordsError = () => {
  return (
    <div className={styles.container}>
      <h1>No words added for the game!</h1>
      <h3>Please add words for the game to start.</h3>
      <div>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
          >
            Add words
          </motion.button>
        </Link>
      </div>
    </div>
  );
};
