import styles from "./WordsList.module.css";
import { WordCard } from "../WordCard/WordCard";
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CircularProgress } from "react-loading-indicators";

export const WordsList = () => {
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
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loading}>
          <CircularProgress
            variant="bubble-dotted"
            size="large"
            text="LOADING"
            color="#b40101"
          />
          <div>{errorMsg}</div>
        </div>
      ) : (
        <>
          <button
            onClick={showPrevCard}
            className={`${styles.button} ${styles.arrow_left}`}
          >
            <FontAwesomeIcon icon={faArrowLeft} className={styles.icon} />
          </button>
          {index === undefined ? (
            <WordCard />
          ) : (
            <>
              <WordCard
                word={context[index].word}
                transcription={context[index].transcription}
                translation={context[index].translation}
                learned={learned}
                onClick={calculateLearned}
                isClicked={context[index].isClicked}
                ref={ref}
                index={index + 1 + "/" + context.length}
              />
            </>
          )}
          <button
            onClick={showNextCard}
            className={`${styles.button} ${styles.arrow_right}`}
          >
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </>
      )}
    </div>
  );
};
