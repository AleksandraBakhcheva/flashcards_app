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
            <>
                <table className="wordslist__table">
                    <thead className="wordslist__header">
                        <tr>
                            <th className="wordslist__item">Word</th>
                            <th className="wordslist__item">Translation</th>
                            <th className="wordslist__item item_modification"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) =>
                                <WordsListItem key={item} word={item.word} translation={item.meaning} />
                            )
                        }
                    </tbody>
                </table>
            </>
        </div>
    );
}

export default WordslistTable;