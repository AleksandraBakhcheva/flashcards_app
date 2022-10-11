import "../styles/footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__links">
                <a href="https://github.com/AleksandraBakhcheva/Languages-Learn-Flashcards-Project" target="new__link">Languages-Learn-Flashcards-Project</a> by <a href="https://github.com/AleksandraBakhcheva" target="new__link">Aleksandra Bakhcheva</a> © {new Date().getFullYear()}
            </div>
        </footer>
    );
}

export default Footer;