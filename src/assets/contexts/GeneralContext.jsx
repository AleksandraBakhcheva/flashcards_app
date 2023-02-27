import { createContext, useState, useEffect } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const apiData =
    "https://63fb529e2027a45d8d645065.mockapi.io/api/v1/flashcards/";
  const [context, setContext] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  async function loadData() {
    try {
      const wordsCollection = await fetch(apiData, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      const data = await wordsCollection.json();
      if (data) {
        setContext(data);
        setLoading(false);
      }
    } catch (error) {
      console.log("error", error);
      setErrorMsg(
        "We have a little problem. Please refresh your page or try again later."
      );
    }
  }

  async function addWord(newWord) {
    try {
      const wordsCollection = await fetch(apiData, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(newWord),
      });
      const data = await wordsCollection.json();
      setContext([...context, data]);
    } catch (error) {
      console.log("error", error);
      setLoading(true);
      setErrorMsg(
        "We have a little problem while adding your word. Please refresh your page and try again."
      );
    }
  }

  async function deleteWord(id) {
    try {
      await fetch(`${apiData}${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
    } catch (error) {
      console.log("error", error);
      setLoading(true);
      setErrorMsg(
        "We have a little problem while deleting your word. Please refresh your page and try again."
      );
    }
  }

  async function updateWord(newWord) {
    try {
      const wordsCollection = await fetch(`${apiData}${newWord.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(newWord),
      });
      console.log(wordsCollection);
      console.log(JSON.stringify(newWord));
      const data = await wordsCollection.json();
      console.log(data);
    } catch (error) {
      console.log("error", error);
      setLoading(true);
      setErrorMsg(
        "We have a little problem while updating your word. Please refresh your page and try again."
      );
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const values = {
    context,
    setContext,
    loading,
    errorMsg,
    addWord,
    deleteWord,
    updateWord,
  };

  return (
    <GeneralContext.Provider value={values}>{children}</GeneralContext.Provider>
  );
};
