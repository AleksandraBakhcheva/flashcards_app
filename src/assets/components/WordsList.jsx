import React, { useState } from "react";
import "../styles/words_list.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import data from "../wordslist.json"
import WordCard from "./WordCard";

function WordsList (props) {

    const [index, isIndexed] = useState(0);

    const showPrevCard = () => {
        isIndexed(index - 1);
    }

    const showNextCard = () => {
        isIndexed(index + 1);
    }

    return (
        <div className="wordslist">
            <button onClick={showPrevCard} className={index < 1 ? "arrow_left_hidden" : "buttons__arrows arrow_left"}>
                <FontAwesomeIcon icon={faArrowLeft} className="arrow_left_icon" />
            </button>
            {index === undefined ? <WordCard /> :
            <WordCard word={data[index].word} transcription={data[index].transcription} meaning={data[index].meaning} />}
            <button onClick={showNextCard} className={index > data.length - 2 ?"arrow_right_hidden" : "buttons__arrows arrow_right"}>
                <FontAwesomeIcon icon={faArrowRight} className="arrow_right_icon" />
            </button>
            <div className="wordslist__index">{data[index].index + "/" + data.length}</div>
        </div>
    );
}

export default WordsList;