import "../styles/words_list_item.css";
import pen from "../images/pen.svg";
import trash from "../images/trash.svg";
import React, { useState } from "react";
import SaveCancelButtons from "./SaveCancelButtons"

function EditDeleteButtons(props) {

    const [edit, isHidden] = useState(props.edit === false);

    const editListItem = () => {
        isHidden(!edit);    
    }

    return (
        <>
            {edit ? <SaveCancelButtons /> : null}
            <td className={"item_modify buttons" + (edit ? " hidden" : "")}>
                <button onClick={editListItem} className="wordslist__edit">
                    <img src={pen} alt="pen" />
                </button>
                <button className="wordslist__delete">
                    <img src={trash} alt="trash" />
                </button>    
            </td>
        </>
    );
}

export default EditDeleteButtons;