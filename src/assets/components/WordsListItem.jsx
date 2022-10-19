import "../styles/words_list_item.css";
import pen from "../images/pen.svg";
import trash from "../images/trash.svg";
import WordsListAdd from "./WordsListAdd";
import React, { useState } from "react";

function WordsListItem(props) {

    const {word, translation} = props;
    const [hidden, isHidden] = useState(props.hidden === false);

    const editListItem = () => {
        isHidden(!hidden);
    }

    return (
        <thead className="wordslist__item__box">
            <tr className={(hidden ? " hidden" : "")}>
                <td className="item_modification">{word}</td>
                <td className="item_modification">{translation}</td>
                <td className="item_modification buttons">
                <button onClick={editListItem} className="wordslist__edit">
                    <img src={pen} alt="pen" />
                </button>
                <button className="wordslist__delete">
                    <img src={trash} alt="trash" />
                </button>
                </td>    
            </tr>
            {hidden ? <WordsListAdd /> : null}
        </thead>
    );
}

export default WordsListItem;