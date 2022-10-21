import "../styles/words_list_item.css";
import EditDeleteButtons from "./EditDeleteButtons";


function WordsListItem(props) {

    const {word, translation} = props;

    return (
        <tr className={"wordslist__item__box"}>
            <td className="item_modify">{word}</td>
            <td className="item_modify">{translation}</td>
            <EditDeleteButtons /> 
        </tr>
    );
}

export default WordsListItem;