import styles from "./WordsListAdd.module.css";
import { GeneralContext } from "../../contexts/GeneralContext";
import { useState, useRef, useContext } from "react";

export const WordsListAdd = () => {
  const initialValues = {
    word: "",
    transcription: "",
    translation: "",
    tags: "",
  };

  const context = useContext(GeneralContext);
  const [values, setValues] = useState(initialValues);
  const [msg] = useState("Add a new word:");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const wordRef = useRef();
  const transcriptionRef = useRef();
  const translationRef = useRef();
  const tagsRef = useRef();

  const addNewWord = (event) => {
    event.preventDefault();
    if (
      !values.word ||
      !values.transcription ||
      !values.translation ||
      !values.tags
    ) {
      values.translation
        ? tagsRef.current.focus()
        : values.transcription
        ? translationRef.current.focus() &&
          validateTranslation(values.translation)
        : values.word && validateWord(values.word)
        ? transcriptionRef.current.focus()
        : wordRef.current.focus();
      setSuccessMsg("");
      setErrorMsg("To add a word please fill in all fields of the form");
    } else if (
      validateWord(values.word) &&
      validateTranslation(values.translation) &&
      values.transcription &&
      values.tags
    ) {
      setValues(initialValues);
      setErrorMsg("");
      setSuccessMsg("Your word has been successfully added");
      setTimeout(() => {
        setSuccessMsg("");
      }, 3000);
      const newWord = {
        word: values.word,
        transcription: values.transcription,
        translation: values.translation,
        tags: values.tags,
      };
      context.addWord(newWord);
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
    const engLetters = /^[A-Za-z]+$/gm;
    if (!engLetters.test(userInput)) {
      setErrorMsg("For the word field please use only latin characters");
      wordRef.current.focus();
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
      translationRef.current.focus();
    } else {
      setErrorMsg("");
      return true;
    }
  };

  const eraseAllInputs = () => {
    setErrorMsg("");
    setValues(initialValues);
  };

  return (
    <div className={styles.container}>
      <div>
        <p
          className={
            successMsg ? styles.success : errorMsg ? styles.error : styles.msg
          }
        >
          {successMsg ? successMsg : errorMsg ? errorMsg : msg}
        </p>
      </div>
      <form onSubmit={addNewWord}>
        <div className={styles.inputs}>
          <label htmlFor="word">
            <input
              onChange={onChangeInput}
              type="text"
              value={values.word}
              name="word"
              placeholder="word"
              ref={wordRef}
            />
          </label>
          <label htmlFor="transcription">
            <input
              onChange={onChangeInput}
              type="text"
              value={values.transcription}
              name="transcription"
              placeholder="transcription"
              ref={transcriptionRef}
            />
          </label>
          <label htmlFor="translation">
            <input
              onChange={onChangeInput}
              type="text"
              value={values.translation}
              name="translation"
              placeholder="translation"
              ref={translationRef}
            />
          </label>
          <label htmlFor="tags">
            <input
              onChange={onChangeInput}
              type="text"
              value={values.tags}
              name="tags"
              placeholder="tags"
              ref={tagsRef}
            />
          </label>
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.add}>
            Add
          </button>
          <button
            className={styles.cancel}
            type="button"
            onClick={eraseAllInputs}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
