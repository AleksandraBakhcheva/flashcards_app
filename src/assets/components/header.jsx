import "../styles/header.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="logo" />
            <div className="header__title">
                <h1>Learn a word </h1>
                <br />
                <h3>Every language starts with a single word</h3>
            </div>
            <nav className="header__menu">
                <ul>
                    <li>
                        <Link className="header__links" to="/Languages-Learn-Flashcards-Project">Home</Link>
                    </li>
                    <li>
                        <Link className="header__links" to="/game">Game</Link>
                    </li>
                    {/* <li>
                        <a className="header__links" href="https://github.com/AleksandraBakhcheva/Languages-Learn-Flashcards-Project" target="new__link">GitHub Project</a>
                    </li>
                    <li>
                        <Link className="header__links" to="/vocabulary">Vocabulary</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Header;