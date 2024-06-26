import styles from "./WordsListAdd.module.css";
import { GeneralContext } from "../../contexts/GeneralContext";
import {
  validateWord,
  validateTranscription,
  validateTranslation,
  validateTags,
} from "../../utils/validationFunctions";
import { useState, useRef, useContext } from "react";

export const WordsListAdd = () => {
  const initialValues = {
    word: "",
    transcription: "",
    translation: "",
    tags: "",
    learned: false,
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
      !values.word
        ? wordRef.current.focus()
        : !values.transcription
        ? transcriptionRef.current.focus()
        : !values.translation
        ? translationRef.current.focus()
        : tagsRef.current.focus();
      setSuccessMsg("");
      setErrorMsg("To add a word please fill in all fields of the form");
    } else if (
      validateWord(values.word, setErrorMsg, wordRef) &&
      validateTranscription(
        values.transcription,
        setErrorMsg,
        transcriptionRef
      ) &&
      validateTranslation(values.translation, setErrorMsg, transcriptionRef) &&
      validateTags(values.tags, setErrorMsg, tagsRef)
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
        learned: values.learned,
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
      validateWord(values.word, setErrorMsg, wordRef);
    }
    if (values.transcription) {
      validateTranscription(
        values.transcription,
        setErrorMsg,
        transcriptionRef
      );
    }
    if (values.translation) {
      validateTranslation(values.translation, setErrorMsg, translationRef);
    }
    if (values.tags) {
      validateTags(values.tags, setErrorMsg, tagsRef);
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
