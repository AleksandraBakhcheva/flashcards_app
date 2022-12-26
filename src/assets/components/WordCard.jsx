import "../styles/word_card.css";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const WordCard = forwardRef(function WordCard(props, ref) {

    const {word, 
        transcription, 
        meaning, 
        learned, 
        onClick,
        isClicked} = props;

    WordCard.defaultProps = {
        word: "word",
        transcription: "[wɜːd]",
        meaning: "слово, известие, речь"
    };

    const getTranslation = () => {
        onClick();
    };

    return (
        <motion.div className="wordcard" animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 360, 0],
            borderRadius: ["20%", "50%", "20%", "50%", "20%"]}} transition={{duration: 2}}>
            <div className="wordcard__box">
                <h3 className="wordcard__language">Learn English words</h3>
                <h4 className="wordcard__learned">Learned words: {learned}</h4>
                <h1 className="wordcard__word">{word}</h1>
                <p className="wordcard__transcription">{transcription}</p>
                <div className="wordcard__translation">
                {isClicked ? <p ref={ref} className="translation">{meaning}</p> : <motion.button onClick={getTranslation} ref={ref} autoFocus whileHover={{scale: 1.2}} whileTap={{scale: 0.9, x: "-5px", y: "5px"}}>Translate</motion.button>}
                </div>
            </div>
        </motion.div>
    );
});

export default WordCard;