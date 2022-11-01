import React, { useState } from "react";
import "../styles/words_list.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import data from "../wordslist.json"
import WordCard from "./WordCard";

function WordsList (props) {

    const [index, showCard] = useState(0);

    const showPrevCard = () => {
        showCard(index - 1);
    }

    const showNextCard = () => {
        showCard(index + 1);
    }

    return (
        <div className="wordslist">
            <button onClick={showPrevCard} className="buttons__arrows arrow_left">
                <FontAwesomeIcon icon={faArrowLeft} className="arrow_left_icon" />
            </button>
            <WordCard word={data[index].word} transcription={data[index].transcription} meaning={data[index].meaning} />
            <button onClick={showNextCard} className="buttons__arrows arrow_right">
                <FontAwesomeIcon icon={faArrowRight} className="arrow_right_icon" />
            </button>
            <div className="wordslist__index">{data[index].index + "/" + data.length}</div>
        </div>
    );
}

export default WordsList;