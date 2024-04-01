import styles from "./WordsListItem.module.css";
import { GeneralContext } from "../../contexts/GeneralContext";
import {
  validateWord,
  validateTranscription,
  validateTranslation,
  validateTags,
} from "../../utils/validationFunctions";
import { useState, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const WordsListItem = (props) => {
  const context = useContext(GeneralContext);
  const [deleteForm, setDeleteForm] = useState(false);
  const [change, setChange] = useState(false);
  const [word, setWord] = useState(props.word);
  const [transcription, setTranscription] = useState(props.transcription);
  const [translation, setTranslation] = useState(props.translation);
  const [tags, setTags] = useState(props.tags);
  const [id] = useState(props.id);
  const [btnName, setBtnName] = useState("Edit");
  const wordRef = useRef(word);
  const transcriptionRef = useRef(transcription);
  const translationRef = useRef(translation);
  const tagsRef = useRef(tags);
  const [errorMsg, setErrorMsg] = useState("");

  const onEditClick = () => {
    const btnName = change ? "Edit" : "Save";
    setBtnName(btnName);
  };

  const editWordItem = (evt) => {
    evt.preventDefault();
    if (
      change &&
      validateWord(word, setErrorMsg, wordRef) &&
      validateTranscription(transcription, setErrorMsg, transcriptionRef) &&
      validateTranslation(translation, setErrorMsg, translationRef) &&
      validateTags(tags, setErrorMsg, tagsRef)
    ) {
      setWord(evt.target.word.value);
      setTranscription(evt.target.transcription.value);
      setTranslation(evt.target.translation.value);
      setTags(evt.target.tags.value);
      const newWord = {
        word: word,
        transcription: transcription,
        translation: translation,
        tags: tags,
        id: id,
      };
      context.updateWord(newWord, id);
      wordRef.current = evt.target.word.value;
      transcriptionRef.current = evt.target.transcription.value;
      translationRef.current = evt.target.translation.value;
      tagsRef.current = evt.target.tags.value;
    }
    setChange(!change);
    onEditClick();
  };

  const onChangeWord = (evt) => {
    setWord(evt.target.value);
    validateWord(evt.target.value, setErrorMsg, wordRef);
  };

  const onChangeTranscription = (evt) => {
    setTranscription(evt.target.value);
    validateTranscription(evt.target.value, setErrorMsg, transcriptionRef);
  };

  const onChangeTranslation = (evt) => {
    setTranslation(evt.target.value);
    validateTranslation(evt.target.value, setErrorMsg, translationRef);
  };

  const onChangeTags = (evt) => {
    setTags(evt.target.value);
    validateTags(evt.target.value, setErrorMsg, tagsRef);
  };

  const onClickCancel = () => {
    onEditClick();
    setWord(wordRef.current);
    setTranscription(transcriptionRef.current);
    setTranslation(translationRef.current);
    setTags(tagsRef.current);
    setErrorMsg("");
    setChange(false);
  };

  const onClickDelete = () => {
    context.deleteWord(id);
    setDeleteForm(true);
  };

  return (
    <>
      {deleteForm ? null : (
        <tr>
          <td>
            <form onSubmit={editWordItem}>
              <div className={styles.error}>{errorMsg}</div>
              <div className={styles.container}>
                {change ? (
                  <input
                    className={styles.input}
                    type="text"
                    value={word}
                    name="word"
                    onChange={onChangeWord}
                  />
                ) : (
                  <p>{word}</p>
                )}
                {change ? (
                  <input
                    className={styles.input}
                    type="text"
                    value={transcription}
                    name="transcription"
                    onChange={onChangeTranscription}
                  />
                ) : (
                  <p>{transcription}</p>
                )}
                {change ? (
                  <input
                    className={styles.input}
                    type="text"
                    value={translation}
                    name="translation"
                    onChange={onChangeTranslation}
                  />
                ) : (
                  <p>{translation}</p>
                )}
                {change ? (
                  <input
                    className={styles.input}
                    type="text"
                    value={tags}
                    name="tags"
                    onChange={onChangeTags}
                  />
                ) : (
                  <p>{tags}</p>
                )}
                <div className={styles.buttons}>
                  <button type="submit" className={styles.btn_edit}>
                    <FontAwesomeIcon icon={faPencil} className={styles.icon} />
                    {btnName}
                  </button>
                  <button
                    type="button"
                    hidden={change}
                    className={styles.btn_delete_cancel}
                    onClick={onClickDelete}
                  >
                    <FontAwesomeIcon icon={faTrash} className={styles.icon} />
                    Delete
                  </button>
                  <button
                    type="button"
                    hidden={!change}
                    className={styles.btn_delete_cancel}
                    onClick={onClickCancel}
                  >
                    <FontAwesomeIcon icon={faTrash} className={styles.icon} />
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </td>
        </tr>
      )}
    </>
  );
};
