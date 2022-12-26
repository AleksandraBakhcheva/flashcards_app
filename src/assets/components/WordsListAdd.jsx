import "../styles/words_list_add.css";
import WordsListItem from "./WordsListItem";
import React, { useState } from "react";

function WordsListAdd(props) {

    const [save, isSaved] = useState(false);
    const [cancel, isCanceled] = useState(false);
    const [word, setWord] = useState("");
    const [translation, setTranslation] = useState("");

    const saveItem = () => {
        if (word !== "" && translation !== "") {
            isSaved(true);
            console.log(save);
        }
        else {

        }
        
    }

    const cancelItem = () => {
        isCanceled(!cancel);
    }

    const onChangeWord = (evt) => {
        checkValidationWord(evt.target.value);
    }
    
    const onChangeTranslation = (evt) => {
        checkValidationTranslation(evt.target.value);
    }

    const checkValidationWord = (userInput) => {
        setWord(userInput);
    }

    const checkValidationTranslation = (userInput) => {
        setTranslation(userInput);
    }

    return (
        <div className="wordslist__item__new">
            <div className="wordslist__item__form">
                <p>In the form below you can add your own words in the list:</p>
                <form>
                    <label htmlFor="">
                        <input onChange={onChangeWord} type="text" value={word} className="wordslist__add" placeholder=" please add a word"></input>
                    </label>
                    <label htmlFor="">
                        <input onChange={onChangeTranslation} type="text" value={translation} className="wordslist__add" placeholder=" please add translation"></input>
                    </label>
                        <button onClick={saveItem} className="wordslist__save">Save</button>
                        <button onClick={cancelItem} className="wordslist__cancel">Cancel</button>
                </form>
            </div>
            {cancel ? <WordsListItem /> : null}
            {save ? <WordsListItem word={word} translation={translation} /> : null}
            {/* <tr className={"wordslist__item__box_add" + (cancel ? " hidden" : "")}></tr> */}
        </div>
    );
}

export default WordsListAdd;