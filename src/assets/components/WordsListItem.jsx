import "../styles/words_list_item.css";
import pen from "../images/pen.svg";
import trash from "../images/trash.svg";
import React, { useState } from "react";
import WordsListAdd from "./WordsListAdd";

function WordsListItem(props) {

    //const {word, translation} = props;

    const [edit, isHidden] = useState(props.edit === false);
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
                        <img src={pen} alt="pen" />
                    </button>
                    <button className="wordslist__delete">
                        <img src={trash} alt="trash" />
                    </button>    
                </td>
            </tr>
        </>
    );
}

export default WordsListItem;