import "../styles/word_card.css";
import React, { useState } from "react";

function WordCard(props) {

    const {word, transcription, meaning} = props;

    const [hidden, hideButton] = useState(props.hidden === false);
    const [translation, showMeaning] = useState(props.translation === false);

    const showTranslation = () => {
        hideButton(!hidden);
        showMeaning(!translation);
    };

    return (
        <div className="wordcard">
            <div className="wordcard__box">
                <h4 className="wordcard__close">X</h4>
                <h4 className="wordcard__language">English</h4>
                <h1 className="wordcard__word">{word}</h1>
                <p className="wordcard__transcription">{transcription}</p>
                <div onClick={showTranslation} className="wordcard__translation">
                    <button  className={hidden ? "hidden" : ""} >Translate</button>
                    <p className={translation ? "translation" : "hidden"}>{meaning}</p>
                </div>
            </div>
        </div>
    );
}

export default WordCard;