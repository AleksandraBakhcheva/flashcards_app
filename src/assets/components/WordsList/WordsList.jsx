import "./words_list.css";
import WordCard from "../WordCard/WordCard";
import { GeneralContext } from "../../contexts/GeneralContext";
import React, { useContext, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CircularProgress } from "react-loading-indicators";

function WordsList() {
    const { context, setContext } = useContext(GeneralContext);
    const { loading } = useContext(GeneralContext);
    const [index, setIndex] = useState(0);
    const [learned, isLearned] = useState(0);
    const [cardNum, setCardNum] = useState(1);
    const ref = useRef();

    if (!context) {
        return;
    }

    const showPrevCard = () => {
        setIndex(index - 1);
        setCardNum(cardNum - 1);
        ref.current.focus();
    };

    const showNextCard = () => {
        setIndex(index + 1);
        setCardNum(cardNum + 1);
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
                </div>
            ) : (
                <div className="wordslist__cards">
                    <button
                        onClick={showPrevCard}
                        className={
                            cardNum === 1
                                ? "arrow_left_hidden"
                                : "buttons__arrows arrow_left"
                        }
                    >
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="arrow_left_icon"
                        />
                    </button>
                    {index === undefined ? (
                        <WordCard />
                    ) : (
                        <WordCard
                            word={context[index].english}
                            transcription={context[index].transcription}
                            meaning={context[index].russian}
                            learned={learned}
                            onClick={calculateLearned}
                            isClicked={context[index].isClicked}
                            ref={ref}
                        />
                    )}
                    <button
                        onClick={showNextCard}
                        className={
                            cardNum === context.length
                                ? "arrow_right_hidden"
                                : "buttons__arrows arrow_right"
                        }
                    >
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="arrow_right_icon"
                        />
                    </button>
                    <div className="wordslist__index">
                        {cardNum + "/" + context.length}
                    </div>
                </div>
            )}
        </div>
    );
}

export default WordsList;
