import "../styles/word_card.css";
import { motion } from "framer-motion";
import React, { useState } from "react";

function WordCard(props) {

    const {word, transcription, meaning} = props;

    WordCard.defaultProps = {
        word: "word",
        transcription: "[wɜːd]",
        meaning: "слово, известие, речь"
    };

    const [hidden, hideButton] = useState(false);
    const [translation, showMeaning] = useState(false);

    const showTranslation = () => {
        hideButton(!hidden);
        showMeaning(!translation);
    };

    return (
        <motion.div className="wordcard" animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 360, 0],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"],}} transition={{ duration: 2}}>
            <div className="wordcard__box">
                <h4 className="wordcard__close">X</h4>
                <h4 className="wordcard__language">English</h4>
                <h1 className="wordcard__word">{word}</h1>
                <p className="wordcard__transcription">{transcription}</p>
                <div onClick={showTranslation} className="wordcard__translation">
                    <motion.button className={hidden ? "hidden" : ""} whileHover={{ scale: 1.1}} whileTap={{scale: 0.9, x: "-5px", y: "5px"}} >Translate</motion.button>
                    <p className={translation ? "translation" : "hidden"}>{meaning}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default WordCard;