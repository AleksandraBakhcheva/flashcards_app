import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__links">
                <div className="footer__links_copyright">
                    Copyright © {new Date().getFullYear()}
                </div>
                <a
                    href="https://github.com/AleksandraBakhcheva/Languages-Learn-Flashcards-Project"
                    target="new__link"
                    className="footer__links_highlighted"
                >
                    Learn Languages with Flashcards
                </a>{" "}
                by{" "}
                <a
                    href="https://github.com/AleksandraBakhcheva"
                    target="new__link"
                    className="footer__links_highlighted"
                >
                    Aleksandra Bakhcheva
                </a>
                <div className="footer__links_github">
                    <a
                        href="https://github.com/AleksandraBakhcheva?tab=repositories"
                        target="new__link"
                    >
                        <span>GitHub </span>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="github_icon"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
