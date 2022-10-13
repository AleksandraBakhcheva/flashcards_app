import "../styles/words_list_add.css";

function WordsListAdd(props) {
    return (
        <tr>
            <td>
                <input type="text" className="wordslist__add"></input>
            </td>
            <td>
                <input type="text" className="wordslist__add"></input>
            </td>
            <td className="wordslist__add buttons">
                <button className="wordslist__save">Save</button>
                <button className="wordslist__cancel">Cancel</button>
            </td>
        </tr>
    );
}

export default WordsListAdd;