import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__links">
                <a href="https://github.com/AleksandraBakhcheva/Languages-Learn-Flashcards-Project" target="new__link" className="footer__links_highlighted">Languages-Learn-Flashcards-Project</a> by <a href="https://github.com/AleksandraBakhcheva" target="new__link" className="footer__links_highlighted">Aleksandra Bakhcheva</a> © {new Date().getFullYear()}
                <div className="footer__links_github">
                    <span>GitHub </span>
                    <a href="https://github.com/AleksandraBakhcheva" target="new__link"><FontAwesomeIcon icon={faGithub} className="github_icon" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
