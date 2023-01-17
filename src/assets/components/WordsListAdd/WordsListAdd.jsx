import "./words_list_add.css";
import { GeneralContext } from "../../contexts/GeneralContext";
import React, { useState, useRef, useContext } from "react";

function WordsListAdd(props) {
    const initialValues = {
        word: "",
        translation: "",
    };

    const { context, setContext } = useContext(GeneralContext);
    const [values, setValues] = useState(initialValues);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const wordRef = useRef();
    const translationRef = useRef();

    const addNewWord = (event) => {
        event.preventDefault();
        if (!values.word || !values.translation) {
            values.word !== ""
                ? translationRef.current.focus()
                : wordRef.current.focus();
            setSuccessMsg("");
            setErrorMsg("To add a word please fill in all fields");
            return null;
        } else if (
            validateWord(values.word) &&
            validateTranslation(values.translation)
        ) {
            setValues(initialValues);
            setErrorMsg("");
            setSuccessMsg("Your word has been successfully added");
            const copyWords = [...context];
            const id = copyWords.length + 1;
            copyWords.push({
                id: "132" + id,
                english: values.word,
                russian: values.translation,
            });
            setContext(copyWords);
            console.log(copyWords);
        }
    };

    const onChangeInput = (evt) => {
        const { name, value } = evt.target;
        setValues({
            ...values,
            [name]: value,
        });
        if (values.word) {
            validateWord(values.word);
        }
        if (values.translation) {
            validateTranslation(values.translation);
        }
    };

    const validateWord = (userInput) => {
        setSuccessMsg("");
        const engLetters = /^[A-Za-z]+$/gm;
        if (!engLetters.test(userInput)) {
            setErrorMsg("For the word field please use only latin characters");
        } else {
            setErrorMsg("");
            return true;
        }
    };

    const validateTranslation = (userInput) => {
        setSuccessMsg("");
        const rusLetters = /^[А-Яа-я]+$/gm;
        if (!rusLetters.test(userInput)) {
            setErrorMsg(
                "For the translation field please use only cyrillic characters"
            );
        } else {
            setErrorMsg("");
            return true;
        }
    };

    return (
        <div className="wordslist__item__new">
            <div className="wordslist__item__form">
                <p>
                    In the form below you can add your own words in the list to
                    learn:
                </p>
                <form onSubmit={addNewWord}>
                    <label htmlFor="word">
                        <input
                            onChange={onChangeInput}
                            type="text"
                            value={values.word}
                            name="word"
                            className="wordslist__add wordslist__add_word"
                            placeholder=" please add a word"
                            ref={wordRef}
                        />
                    </label>
                    <label htmlFor="translation">
                        <input
                            onChange={onChangeInput}
                            type="text"
                            value={values.translation}
                            name="translation"
                            className="wordslist__add wordslist__add_translation"
                            placeholder=" please add translation"
                            ref={translationRef}
                        />
                    </label>
                    <button type="submit" className="wordslist__save">
                        Save
                    </button>
                    <button className="wordslist__cancel">Cancel</button>
                </form>
            </div>
            <div>
                {successMsg && (
                    <p className="wordslist__msg__success">{successMsg}</p>
                )}
                {errorMsg && (
                    <p className="wordslist__msg__error">{errorMsg}</p>
                )}
            </div>
        </div>
    );
}

export default WordsListAdd;
