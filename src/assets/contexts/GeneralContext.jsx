import { createContext, useState, useEffect } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
    const [context, setContext] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = "http://itgirlschool.justmakeit.ru/api/words";
        const fetchData = async () => {
            try {
                const wordsCollection = await fetch(apiUrl);
                const data = await wordsCollection.json();
                if (data) {
                    setContext(data);
                    setLoading(false);
                } else {
                    return;
                }
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

    const values = { context, setContext, loading };

    return (
        <GeneralContext.Provider value={values}>
            {children}
        </GeneralContext.Provider>
    );
};
