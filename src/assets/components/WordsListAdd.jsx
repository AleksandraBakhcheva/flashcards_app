import "../styles/words_list_add.css";
import React, { useState } from "react";
import EditDeleteButtons from "./EditDeleteButtons";


function WordsListAdd(props) {

    const [cancel, isCanceled] = useState(props.cancel === false);

    const cancelChange = () => {
        isCanceled(!cancel);
    };
    
    return (
        <tr className="wordslist__item__box_add">
            <td className="wordslist__add">
                <input type="text" className="wordslist__add"></input>
            </td>
            <td className="wordslist__add">
                    <input type="text" className="wordslist__add"></input>
            </td>
            <td className="wordslist__add buttons">{cancel ? <EditDeleteButtons /> : null}
                <button className={"wordslist__save" + (cancel ? " hidden" : "")}>Save</button>
                <button onClick={cancelChange} className={"wordslist__cancel" + (cancel ? " hidden" : "")}>Cancel</button>
            </td>
        </tr>
    );
}

export default WordsListAdd;