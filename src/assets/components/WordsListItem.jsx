import "../styles/words_list_item.css";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function WordsListItem(props) {

    const [change, setChange] = useState(false);
    const [word, setWord] = useState(props.word);
    const [translation, setTranslation] = useState(props.translation);
    const [btnName, setBtnName] = useState("Edit");
    const wordRef = useRef(word);
    const translationRef = useRef(translation);
    
    const onEditClick = () => {
        const btnName = change ? "Edit" : "Save";
        setBtnName(btnName);
    }

    const editWordItem = (evt) => {
        evt.preventDefault();
        if (change) {
            setWord(evt.target.word.value);
            setTranslation(evt.target.translation.value);
            wordRef.current = evt.target.word.value;
            translationRef.current = evt.target.translation.value;
        }
        setChange(!change);
        onEditClick();
    } 

    const onChangeWord = (evt) => {
        setWord(evt.target.value);
    }

    const onChangeTranslation = (evt) => {
        setTranslation(evt.target.value);
    }

    const onClickCancel = () => {
        onEditClick();
        setWord(wordRef.current);
        setTranslation(translationRef.current);
        setChange(false);
    }

    return (
        <form onSubmit={editWordItem}>
            <table>
                <tbody>
                    <tr className="wordslist__item__box">
                        <td>
                            {change ? (<input type="text" value={word} name="word" onChange={onChangeWord} />) : (<p className="item_modify">{word}</p>)}
                        </td>
                        <td>
                            {change ? (<input type="text" value={translation} name="translation" onChange={onChangeTranslation} />) : (<p className="item_modify">{translation}</p>)}
                        </td>
                        <td className="item_modify buttons">
                            <button type="submit" className="wordslist__edit">
                                <FontAwesomeIcon icon={faPencil} className="wordslist__edit_icon" />{btnName}
                            </button>
                            <button type="button" hidden={change} className="wordslist__delete">
                                <FontAwesomeIcon icon={faTrash} className="wordslist__delete_icon" />Delete
                            </button>
                            <button type="button" hidden={!change} className="wordslist__delete" onClick={onClickCancel}>
                                <FontAwesomeIcon icon={faTrash} className="wordslist__delete_icon" />Cancel
                            </button>   
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default WordsListItem;