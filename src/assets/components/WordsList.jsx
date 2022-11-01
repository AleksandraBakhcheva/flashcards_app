import React, { useState } from "react";
import "../styles/words_list.css";
import arrow_left from "../images/arrow_left.svg";
import arrow_right from "../images/arrow_right.svg";
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
                <img src={arrow_left} alt="arrow_left" />
            </button>
            <WordCard word={data[index].word} transcription={data[index].transcription} meaning={data[index].meaning} />
            <button onClick={showNextCard} className="buttons__arrows arrow_right">
                <img src={arrow_right} alt="arrow_right" />
            </button>
            <div className="wordslist__index">{data[index].index + "/" + data.length}</div>
        </div>
    );
}

export default WordsList;