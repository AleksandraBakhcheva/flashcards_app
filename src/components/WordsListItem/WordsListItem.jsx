import styles from "./WordsListItem.module.css";
import { GeneralContext } from "../../contexts/GeneralContext";
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
  const translationRef = useRef(translation);

  const onEditClick = () => {
    const btnName = change ? "Edit" : "Save";
    setBtnName(btnName);
  };

  const editWordItem = (evt) => {
    evt.preventDefault();
    if (change) {
      setWord(evt.target.word.value);
      setTranslation(evt.target.translation.value);
      const newWord = {
        word: word,
        transcription: transcription,
        translation: translation,
        tags: tags,
        id: id,
      };
      context.updateWord(newWord, id);
      wordRef.current = evt.target.word.value;
      translationRef.current = evt.target.translation.value;
    }
    setChange(!change);
    onEditClick();
  };

  const onChangeWord = (evt) => {
    setWord(evt.target.value);
  };

  const onChangeTranscription = (evt) => {
    setTranscription(evt.target.value);
  };

  const onChangeTranslation = (evt) => {
    setTranslation(evt.target.value);
  };

  const onChangeTags = (evt) => {
    setTags(evt.target.value);
  };

  const onClickCancel = () => {
    onEditClick();
    setWord(wordRef.current);
    setTranslation(translationRef.current);
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
