import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
    const [ movies, setMovies ] = useState([]);
    const [ series, setSeries ] = useState([]);
    const [ search, setSearch ] = useState(``);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [ query, setQuery ] = useState(``);

    
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const apiUrlMovies = 'https://api.themoviedb.org/3/search/movie'


    useEffect(() => {
        if (!query.trim()) return;

        setIsLoading(true);   

        axios
            .get(apiUrlMovies, {
                params: {
                    api_key: apiKey,
                    query: query,
                    language: `it-IT`
                }
            })
            .then(res => {
                console.log(`Dati ricevuti:`, res.data);
                setMovies(res.data.results);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(`Errore nel caricamento dei dati`, err);
                setIsLoading(false);
            });
    }, [query]);

    return (
        <AppContext.Provider value={{
            movies,
            series,
            search,
            isLoading,
            isSearching,
            selectedGenre,
            query,
            setQuery
        }}>
            {children}
        </AppContext.Provider>
    );
};