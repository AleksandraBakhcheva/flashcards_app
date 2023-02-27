import "./WordsList.css";
import WordCard from "../WordCard/WordCard";
import { GeneralContext } from "../../contexts/GeneralContext";
import React, { useContext, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CircularProgress } from "react-loading-indicators";

function WordsList() {
  const { context, setContext, loading, errorMsg } = useContext(GeneralContext);
  const [index, setIndex] = useState(0);
  const [learned, isLearned] = useState(0);
  const ref = useRef();

  if (!context) {
    return;
  }

  const showPrevCard = () => {
    if (index === 0) {
      setIndex(context.length - 1);
    } else {
      setIndex(index - 1);
    }
    ref.current.focus();
  };

  const showNextCard = () => {
    if (index === context.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    ref.current.focus();
  };

  const calculateLearned = () => {
    isLearned(learned + 1);
    const wordsUpdate = [...context];
    wordsUpdate[index].isClicked = true;
    setContext(wordsUpdate);
  };

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
        <div className="wordslist__cards">
          <button onClick={showPrevCard} className="buttons__arrows arrow_left">
            <FontAwesomeIcon icon={faArrowLeft} className="arrow__icon" />
          </button>
          {index === undefined ? (
            <WordCard />
          ) : (
            <WordCard
              word={context[index].word}
              transcription={context[index].transcription}
              translation={context[index].translation}
              learned={learned}
              onClick={calculateLearned}
              isClicked={context[index].isClicked}
              ref={ref}
            />
          )}
          <button
            onClick={showNextCard}
            className="buttons__arrows arrow_right"
          >
            <FontAwesomeIcon icon={faArrowRight} className="arrow__icon" />
          </button>
          <div className="wordslist__index">
            {index + 1 + "/" + context.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default WordsList;
