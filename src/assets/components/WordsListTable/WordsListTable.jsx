import "./words_list_table.css";
import WordsListItem from "../WordsListItem/WordsListItem";
import WordsListAdd from "../WordsListAdd/WordsListAdd";
import { GeneralContext } from "../../contexts/GeneralContext";
import React, { useContext } from "react";
import { CircularProgress } from "react-loading-indicators";

function WordslistTable() {
  const { context, loading, errorMsg } = useContext(GeneralContext);

  if (!context) {
    return;
  }

  return (
    <div className="loading__indicator">
      {loading ? (
        <div className="loading__indicator_position">
          <CircularProgress
            variant="bubble-dotted"
            size="large"
            text="LOADING"
            color="#b40101"
          />
          <div className="loading__indicator_error">{errorMsg}</div>
        </div>
      ) : (
        <div className="wordslist">
          <>
            <WordsListAdd />
          </>
          <div className="wordslist__table_container">
            <table className="wordslist__table">
              <thead className="wordslist__header">
                <tr>
                  <th className="wordslist__item">Word</th>
                  <th className="wordslist__item">Translation</th>
                  <th className="wordslist__item item_modification"></th>
                </tr>
              </thead>
            </table>
            {context.map((item) => (
              <WordsListItem
                key={item.id}
                word={item.english}
                translation={item.russian}
                id={item.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WordslistTable;
