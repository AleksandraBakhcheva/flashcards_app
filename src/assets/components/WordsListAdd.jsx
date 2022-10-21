import "../styles/words_list_add.css";
import WordsListItem from "./WordsListItem";
import React, { useState } from "react";

function WordsListAdd(props) {

    const [cancel, isCanceled] = useState(props.cancel === false);

    const cancelChange = () => {
        isCanceled(!cancel);
    };
    
    return (
        <tr className="wordslist__item__box_add">
            <td className={"wordslist__add" + (cancel ? " hidden" : "")}>
                <input type="text" className="wordslist__add"></input>
            </td>
            <td className={"wordslist__add" + (cancel ? " hidden" : "")}>
                    <input type="text" className="wordslist__add"></input>
            </td>
            <td className={"wordslist__add buttons" + (cancel ? " hidden" : "")}>
                <button className="wordslist__save">Save</button>
                <button onClick={cancelChange} className="wordslist__cancel">Cancel</button>
            </td>
            {cancel ? <WordsListItem /> : null}
        </tr>
    );
}

export default WordsListAdd;