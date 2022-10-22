import "../styles/words_list_add.css";
import React, { useState } from "react";
import WordsListItem from "./WordsListItem";

function WordsListAdd(props) {

    const [save, isSaved] = useState(props.save === false);
    const [cancel, isCanceled] = useState(props.cancel === false);
    const [word, isWordChanged] = useState("");
    const [translation, isTranslationChanged] = useState("");

    const savelListItem = () => {
        isSaved(!save);
    }

    const cancelListItem = () => {
        isCanceled(!cancel);
    }

    const handleWordChange = (event) => {
        isWordChanged(event.target.value);
    }
    
    const handleTranslationChange = (event) => {
        isTranslationChanged(event.target.value);
    }

    return (
        <>
            {cancel ? <WordsListItem /> : null}
            {save ? <WordsListItem word={word} translation={translation} /> : null}
            
            <tr className={"wordslist__item__box_add" + (cancel ? " hidden" : "")}>
                <td>
                    <input onChange={handleWordChange} type="text" className="wordslist__add"></input>
                </td>
                <td>
                    <input onChange={handleTranslationChange} type="text" className="wordslist__add"></input>
                </td>
                <td className="wordslist__add buttons">
                    <button onClick={savelListItem} className="wordslist__save">Save</button>
                    <button onClick={cancelListItem} className="wordslist__cancel">Cancel</button>
                </td>
            </tr>
        </>
    );
}

export default WordsListAdd;