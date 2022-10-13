import "./assets/styles/general.css";
import "./assets/styles/variables.css";
import Header from "./assets/components/Header";
import WordCard from "./assets/components/WordCard";
import WordslistTable from "./assets/components/WordsListTable";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div className="App__container">
        <Header />
        <main className="container__main">
          <WordCard word={"orange"} transcription={"[ɒrɪndʒ]"} />
          <WordslistTable />
        </main>
        <Footer />
    </div>
  );
}

export default App;