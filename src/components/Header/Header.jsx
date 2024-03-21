import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.title}>
        <h1>Learn a word </h1>
        <h3>Every language starts with a single word</h3>
      </div>
      <div className={styles.nav}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <a
                href="https://github.com/AleksandraBakhcheva/Languages-Learn-Flashcards-Project"
                target="new__link"
              >
                GitHub Project
              </a>
            </li>
            <li>
              <a href="https://dictionary.cambridge.org/ru/" target="new__link">
                Vocabulary
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
