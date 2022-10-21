import "../styles/words_list_add.css";
import React, { useState } from "react";
import EditDeleteButtons from "./EditDeleteButtons";

function SaveCancelButtons(props) {

    const [cancel, isCanceled] = useState(props.cancel === false);

    const cancelListItem = () => {
        isCanceled(!cancel);
    }

    return (
        <>
            {cancel ? <EditDeleteButtons /> : null}
            <td className={"wordslist__add buttons" + (cancel ? " hidden" : "")}>
                <button className="wordslist__save">Save</button>
                <button onClick={cancelListItem} className="wordslist__cancel">Cancel</button>
            </td>
        </>
    );
}

export default SaveCancelButtons;