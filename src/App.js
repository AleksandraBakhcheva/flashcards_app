import "./assets/styles/general.css";
import "./assets/styles/variables.css";
import Header from "./assets/components/Header";
import WordCard from "./assets/components/WordCard";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div className="App__container">
      <Header />
      <WordCard word={"orange"} transcription={"[ɒrɪndʒ]"} />
      <Footer />
    </div>
  );
}

export default App;