import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="App__container">
            <Header />
            <main className="container__main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
