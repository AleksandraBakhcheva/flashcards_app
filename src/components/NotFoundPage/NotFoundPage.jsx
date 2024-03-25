import styles from "./NotFoundPage.module.css";
import error_404 from "../../assets/images/error_404.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>Ooops!</h1>
      <h3>Error 404 - page not found</h3>
      <p>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
      <img src={error_404} alt="error-404" />
      <div>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
          >
            Go to homepage
          </motion.button>
        </Link>
      </div>
    </div>
  );
};
