import "./styles/General.css";
import { Layout } from "./components/Layout/Layout";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import { WordslistTable } from "./components/WordsListTable/WordsListTable";
import { WordsList } from "./components/WordsList/WordsList";
import { GeneralContextProvider } from "./contexts/GeneralContext";
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
            <Route path="*" element={<Navigate replace to="404" />} />
          </Route>
        </Routes>
      </>
    </GeneralContextProvider>
  );
}

export default App;
