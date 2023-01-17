import "./assets/styles/general.css";
import "./assets/styles/variables.css";
import Layout from "./assets/components/Layout/Layout";
import NotFoundPage from "./assets/components/NotFoundPage/NotFoundPage";
import WordslistTable from "./assets/components/WordsListTable/WordsListTable";
import WordsList from "./assets/components/WordsList/WordsList";
import { GeneralContextProvider } from "./assets/contexts/GeneralContext";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <GeneralContextProvider>
            <>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<WordslistTable />} />
                        <Route path="game" element={<WordsList />} />
                        <Route path="404" element={<NotFoundPage />} />
                        <Route
                            path="*"
                            element={<Navigate replace to="404" />}
                        />
                    </Route>
                </Routes>
            </>
        </GeneralContextProvider>
    );
}

export default App;
