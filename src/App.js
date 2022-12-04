import "./assets/styles/general.css";
import "./assets/styles/variables.css";
import Layout from "./assets/components/Layout";
import NotFoundPage from "./assets/components/NotFoundPage";
import WordslistTable from "./assets/components/WordsListTable";
import WordsList from "./assets/components/WordsList";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Languages-Learn-Flashcards-Project" element={<WordslistTable />} />
          <Route path="game" element={<WordsList />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path='*' element={<Navigate replace to='/404'/>} />
        </Route>
      </Routes>
    </>
    );
}

export default App;