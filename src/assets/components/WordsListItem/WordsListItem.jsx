import "./WordsListItem.css";
import { GeneralContext } from "../../contexts/GeneralContext";
import React, { useState, useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function WordsListItem(props) {
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
        english: word,
        russian: translation,
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
        <form onSubmit={editWordItem}>
          <table className="wordslist__item__box">
            <tbody>
              <tr>
                <td className="item_modify">
                  {change ? (
                    <input
                      type="text"
                      value={word}
                      name="word"
                      onChange={onChangeWord}
                    />
                  ) : (
                    <p>{word}</p>
                  )}
                </td>
                <td className="item_modify">
                  {change ? (
                    <input
                      type="text"
                      value={transcription}
                      name="transcription"
                      onChange={onChangeTranscription}
                    />
                  ) : (
                    <p>{transcription}</p>
                  )}
                </td>
                <td className="item_modify">
                  {change ? (
                    <input
                      type="text"
                      value={translation}
                      name="translation"
                      onChange={onChangeTranslation}
                    />
                  ) : (
                    <p>{translation}</p>
                  )}
                </td>
                <td className="item_modify">
                  {change ? (
                    <input
                      type="text"
                      value={tags}
                      name="tags"
                      onChange={onChangeTags}
                    />
                  ) : (
                    <p>{tags}</p>
                  )}
                </td>
                <td className="item_modify buttons">
                  <button type="submit" className="wordslist__edit">
                    <FontAwesomeIcon
                      icon={faPencil}
                      className="wordslist__edit_icon"
                    />
                    {btnName}
                  </button>
                  <button
                    type="button"
                    hidden={change}
                    className="wordslist__delete"
                    onClick={onClickDelete}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="wordslist__delete_icon"
                    />
                    Delete
                  </button>
                  <button
                    type="button"
                    hidden={!change}
                    className="wordslist__delete"
                    onClick={onClickCancel}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="wordslist__delete_icon"
                    />
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      )}
    </>
  );
}

export default WordsListItem;
