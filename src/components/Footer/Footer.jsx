import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div>Copyright © {new Date().getFullYear()}</div>
        <div>
          <a
            href="https://github.com/AleksandraBakhcheva/Languages-Learn-Flashcards-Project"
            target="new__link"
          >
            Learn Languages with Flashcards
          </a>
        </div>
        <div>
          by{" "}
          <a href="https://github.com/AleksandraBakhcheva" target="new__link">
            Aleksandra Bakhcheva
          </a>
        </div>
        <div>
          <a
            href="https://github.com/AleksandraBakhcheva?tab=repositories"
            target="new__link"
          >
            <span>GitHub </span>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};
