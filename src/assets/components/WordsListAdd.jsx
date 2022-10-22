import "../styles/words_list_add.css";
import React, { useState } from "react";
import WordsListItem from "./WordsListItem";


function WordsListAdd(props) {

    const {word, translation} = props;

    const [cancel, isCanceled] = useState(props.cancel === false);

    const cancelListItem = () => {
        isCanceled(!cancel);
    }
    
    return (
        <>
            {cancel ? <WordsListItem word={"Hello"} translation={"Привет"} /> : null}
            <tr className={"wordslist__item__box_add" + (cancel ? " hidden" : "")}>
                <td>
                    <input type="text" className="wordslist__add"></input>
                </td>
                <td>
                    <input type="text" className="wordslist__add"></input>
                </td>
                <td className="wordslist__add buttons">
                    <button className="wordslist__save">Save</button>
                    <button onClick={cancelListItem} className="wordslist__cancel">Cancel</button>
                </td>
            </tr>
        </>
    );
}

export default WordsListAdd;