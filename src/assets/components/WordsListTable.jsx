import "../styles/words_list_table.css";
import data from "../wordslist.json";
import WordsListItem from "./WordsListItem";
import WordsListAdd from "./WordsListAdd";

function WordslistTable() {
    return (
        <div className="wordslist">
            <>
                <WordsListAdd />
            </>
            <div className="wordslist__table_container">
                <table className="wordslist__table">
                    <thead className="wordslist__header">
                        <tr>
                            <th className="wordslist__item">Word</th>
                            <th className="wordslist__item">Translation</th>
                            <th className="wordslist__item item_modification"></th>
                        </tr>
                    </thead>
                </table>
                {
                    data.map((item, index) =>
                    <WordsListItem key={index} word={item.word} translation={item.meaning} />)
                }
            </div>
        </div>
    );
}

export default WordslistTable;