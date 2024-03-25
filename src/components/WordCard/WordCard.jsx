import styles from "./WordCard.module.css";
import { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";

export const WordCard = forwardRef(function WordCard(props, ref) {
  const {
    word,
    transcription,
    translation,
    learned,
    index,
    onClick,
    isClicked,
  } = props;

  const getTranslation = () => {
    onClick();
  };

  useEffect(() => ref.current.focus());

  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 360, 0],
        borderRadius: ["20%", "50%", "20%", "50%", "20%"],
      }}
      transition={{ duration: 2 }}
    >
      <div className={styles.container}>
        <div className={styles.card_info}>
          <h3>Learn English words</h3>
          <h4>Learned words: {learned}</h4>
          <h1>{word}</h1>
          <p>{transcription}</p>
        </div>
        <div className={styles.card_translation}>
          {isClicked ? (
            <p ref={ref}>{translation}</p>
          ) : (
            <motion.button
              onClick={getTranslation}
              ref={ref}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            >
              Translate
            </motion.button>
          )}
        </div>
        <div className={styles.card_index}>{index}</div>
      </div>
    </motion.div>
  );
});
