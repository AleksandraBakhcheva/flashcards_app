import styles from "./WordsListTable.module.css";
import { WordsListAdd } from "../WordsListAdd/WordsListAdd";
import { WordsListItem } from "../WordsListItem/WordsListItem";
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext } from "react";
import { CircularProgress } from "react-loading-indicators";

export const WordslistTable = () => {
  const { context, loading, errorMsg } = useContext(GeneralContext);

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
          <WordsListAdd />
          {context.length > 0 ? (
            <table>
              <thead>
                <tr className={styles.headers}>
                  <th>Word</th>
                  <th>Transcription</th>
                  <th>Translation</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>
                {context.map((item) => (
                  <WordsListItem
                    key={item.id}
                    word={item.word}
                    transcription={item.transcription}
                    translation={item.translation}
                    tags={item.tags}
                    id={item.id}
                  />
                ))}
              </tbody>
            </table>
          ) : null}
        </>
      )}
    </div>
  );
};
