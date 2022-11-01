import "./assets/styles/general.css";
import "./assets/styles/variables.css";
import Header from "./assets/components/Header";
import WordslistTable from "./assets/components/WordsListTable";
import Footer from "./assets/components/Footer";
import WordsList from "./assets/components/WordsList";

function App() {
  return (
    <div className="App__container">
        <Header />
        <main className="container__main">
          <WordsList />
          <WordslistTable />
        </main>
        <Footer />
    </div>
  );
}

export default App;