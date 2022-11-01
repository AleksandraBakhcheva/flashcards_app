import "../styles/words_list_item.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import WordsListAdd from "./WordsListAdd";

function WordsListItem(props) {

    const [edit, isHidden] = useState(false);
    const [word, isSet] = useState(props.word);
    const [translation, isTranslated] = useState(props.translation);

    const editListItem = () => {
        isHidden(!edit);
    } 

    return (
        <>
            {edit ? <WordsListAdd /> : null}
            <tr className={"wordslist__item__box" + (edit ? " hidden" : "")}>
                <td className="item_modify">{word}</td>
                <td className="item_modify">{translation}</td>
                <td className="item_modify buttons">
                    <button onClick={editListItem} className="wordslist__edit">
                        <FontAwesomeIcon icon={faPencil} className="wordslist__edit_icon" />
                    </button>
                    <button className="wordslist__delete">
                        <FontAwesomeIcon icon={faTrash} className="wordslist__delete_icon" />
                    </button>    
                </td>
            </tr>
        </>
    );
}

export default WordsListItem;