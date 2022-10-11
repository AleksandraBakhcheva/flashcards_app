import "../styles/header.css";
import logo from "../images/logo.png";

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="logo" />
            <div className="header__title">
                <h1>Learn a word </h1>
                <br />
                <h3>Every language starts with a single word</h3>
            </div>
        </div>
    );
}

export default Header;