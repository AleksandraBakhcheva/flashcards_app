import React, { useState, useRef } from "react";
import "../styles/words_list.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import data from "../wordslist.json"
import WordCard from "./WordCard";

function WordsList (props) {

    const [index, isIndexed] = useState(0);
    const [learned, isLearned] = useState(0);
    const [words, clickedWords] = useState(data);
    const ref = useRef();

    const showPrevCard = () => {
        isIndexed(index - 1);
        ref.current.focus();
    }

    const showNextCard = () => {
        isIndexed(index + 1);
        ref.current.focus();
    }

    const calculateLearned = () => {
        isLearned(learned + 1);
        const wordsUpdate = [...words];
        wordsUpdate[index].isClicked = true;
        clickedWords(wordsUpdate);
    }

    return (
        <div className="wordslist">
            <button onClick={showPrevCard} className={index < 1 ? "arrow_left_hidden" : "buttons__arrows arrow_left"}>
                <FontAwesomeIcon icon={faArrowLeft} className="arrow_left_icon" />
            </button>
            {index === undefined ? <WordCard /> :
            <WordCard word={words[index].word} transcription={words[index].transcription} meaning={words[index].meaning} learned={learned} onClick={calculateLearned} isClicked={words[index].isClicked} ref={ref}/>}
            <button onClick={showNextCard} className={index > words.length - 2 ?"arrow_right_hidden" : "buttons__arrows arrow_right"}>
                <FontAwesomeIcon icon={faArrowRight} className="arrow_right_icon" />
            </button>
            <div className="wordslist__index">{words[index].index + "/" + words.length}</div>
        </div>
    );
}

export default WordsList;