import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import axios from "axios";

function StarRating ({ vote }) {
    const voteAverage = Math.ceil(vote / 2);

    return (
        <div className="stars">
            {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={index < voteAverage ? solidStar : regularStar}
                    className="star"
                />
            ))}
        </div>
    );
}

export function MovieCard({ movie }) {

    const [cast, setCast] = useState([]);
    const { genresMap } = useContext(AppContext);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/credits`, {
            params: {
                api_key: import.meta.env.VITE_TMDB_API_KEY,
                language: 'it-IT'
            }
        })
        .then(res => {
            setCast(res.data.cast.slice(0, 5));
        })
        .catch(err => console.error("Errore cast:", err));
    }, [movie.id]);

    const getCountryCodeFromLanguage = (languageCode) => {
        const map = {
            en: "us",
            it: "it",
            fr: "fr",
            de: "de",
            es: "es",
            ja: "jp",
            ko: "kr",
            zh: "cn",
            hi: "in"
        };
        return map[languageCode];
    };

    const countryCode = getCountryCodeFromLanguage(movie.original_language);

    const imgUrl = "https://image.tmdb.org/t/p/w185";
    const posterMovieUrl = imgUrl + movie.poster_path;

    return (
        <div className="card" key={movie.id}>
            <img src={posterMovieUrl} alt={movie.title} />
            <div className="card-content">
                <ul>
                    <li className="movie-title">{movie.title}</li>
                    <li><strong>Titolo originale:</strong> {movie.original_title}</li>
                    <li className="language">
                        <strong>Lingua:</strong>{" "}
                        {countryCode ? (
                            <img 
                            src={`https://flagsapi.com/${countryCode.toUpperCase()}/shiny/32.png`}
                            alt={movie.original_language}
                            />
                        ) : (
                            movie.original_language
                        )}
                    </li>
                    <li className='vote'><strong>Voto: </strong><StarRating vote={movie.vote_average}/></li>
                    <li><strong>Cast:</strong> {cast.map(actor => actor.name).join(", ")}</li>
                    <li><strong>Generi:</strong> {movie.genre_ids.map(id => genresMap[id]).join(", ")}</li>
                </ul>
            </div>
        </div>
    );
}

export function SerieCard({ serie }) {

    const [cast, setCast] = useState([]);
    const { genresMap } = useContext(AppContext);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${serie.id}/credits`, {
            params: {
                api_key: import.meta.env.VITE_TMDB_API_KEY,
                language: 'it-IT'
            }
        })
        .then(res => {
            setCast(res.data.cast.slice(0, 5));
        })
        .catch(err => console.error("Errore cast:", err));
    }, [serie.id]);

    const getCountryCodeFromLanguage = (languageCode) => {
        const map = {
            en: "us",
            it: "it",
            fr: "fr",
            de: "de",
            es: "es",
            ja: "jp",
            ko: "kr",
            zh: "cn",
            hi: "in"
        };
        return map[languageCode];
    };

    const countryCode = getCountryCodeFromLanguage(serie.original_language);

    const imgUrl = "https://image.tmdb.org/t/p/w185";
    const posterSerieUrl = imgUrl + serie.poster_path;

    return (
        <div className="card" key={serie.id}>
            <img src={posterSerieUrl} alt={serie.name} />
            <div className="card-content">
                <ul>
                    <li className="movie-title">{serie.name}</li>
                    <li><strong>Titolo originale:</strong> {serie.original_name}</li>
                    <li className="language">
                        <strong>Lingua:</strong>{" "}
                        {countryCode ? (
                            <img 
                            src={`https://flagsapi.com/${countryCode.toUpperCase()}/shiny/32.png`}
                            alt={serie.original_language}
                            />
                        ) : (
                            serie.original_language
                        )}
                    </li>
                    <li className='vote'><strong>Voto: </strong><StarRating vote={serie.vote_average}/></li>
                    <li><strong>Cast:</strong> {cast.map(actor => actor.name).join(", ")}</li>
                    <li><strong>Generi:</strong> {serie.genre_ids.map(id => genresMap[id]).join(", ")}</li>
                </ul>
            </div>
        </div>
    );
}