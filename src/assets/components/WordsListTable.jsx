import "../styles/words_list_table.css";
import WordsListItem from "./WordsListItem";
import WordsListAdd from "./WordsListAdd";

function WordslistTable() {
    return (
        <div className="wordslist">
            <table className="wordslist__table">
                <thead className="wordslist__header">
                    <tr>
                        <th className="wordslist__item">Word</th>
                        <th className="wordslist__item">Translation</th>
                        <th className="wordslist__item item_modification"></th>
                    </tr>
                </thead>
                <tbody>
                    <WordsListItem word={"Hello"} translation={"Привет"} />
                    {/* <WordsListAdd /> */}
                </tbody>
                
            </table>
        </div>
    );
}

export default WordslistTable;