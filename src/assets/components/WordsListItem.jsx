import "../styles/words_list_item.css";
import pen from "../images/pen.svg";
import trash from "../images/trash.svg";

function WordsListItem(props) {
    return (
        <tr>
            <td className="wordslist__item item_modification">{props.word}</td>
            <td className="wordslist__item item_modification">{props.translation}</td>
            <td className="wordslist__item item_modification buttons">
                <button className="wordslist__edit">
                    <img src={pen} alt="pen" />
                </button>
                <button className="wordslist__delete">
                    <img src={trash} alt="trash" />
                </button>
            </td>
        </tr>
    );
}

export default WordsListItem;