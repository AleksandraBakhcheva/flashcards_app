import "../styles/words_list_add.css";
import WordsListItem from "./WordsListItem";
import React, { useState, useRef } from "react";

function WordsListAdd(props) {

    const initialValues = {
        word: "",
        translation: "",
    };

    const [save, isSaved] = useState(false);
    const [cancel, isCanceled] = useState(false);
    const [values, setValues] = useState(initialValues);
    const wordRef = useRef();
    const translationRef = useRef();

    const saveItem = () => {
        if (values.word !== "" && values.translation !== "") {
            isSaved(true);
        }
        
    }

    const cancelItem = () => {
        isCanceled(!cancel);
    }

    const addNewWord = (event) => {
        event.preventDefault();
        if (values.word === "" || values.translation === "") {
            values.word !== "" 
            ? translationRef.current.focus() 
            : wordRef.current.focus()
            return null;
        }
        else {
            setValues(initialValues);
        }
    };

    const onChangeInput = (evt) => {
        const {name, value} = evt.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const validateWord = (userInput) => {
        //setWord(userInput);
        const engLetters = /^[a-zA-Z]$/;
        if (engLetters.test(values.word) === true) {
            console.log("correct");
        }
        else {
            console.log("please use only latin letters");
        }
        
    }

    const validateTranslation = (userInput) => {
        //setTranslation(userInput);
        
    }

    return (
        <div className="wordslist__item__new">
            <div className="wordslist__item__form">
                <p>In the form below you can add your own words in the list to learn:</p>
                <form onSubmit={addNewWord}>
                    <label htmlFor="word">
                        <input onChange={onChangeInput} type="text" value={values.word} name="word" className="wordslist__add wordslist__add_word" placeholder=" please add a word" ref={wordRef}></input>
                    </label>
                    <label htmlFor="translation">
                        <input onChange={onChangeInput} type="text" value={values.translation} name="translation" className="wordslist__add wordslist__add_translation" placeholder=" please add translation" ref={translationRef}></input>
                    </label>
                        <button type="submit" className="wordslist__save">Save</button>
                        <button className="wordslist__cancel">Cancel</button>
                </form>
            </div>
            {cancel ? <WordsListItem /> : null}
            {save ? <WordsListItem word={values.word} translation={values.translation} /> : null}
            {/* <tr className={"wordslist__item__box_add" + (cancel ? " hidden" : "")}></tr> */}
        </div>
    );
}

export default WordsListAdd;