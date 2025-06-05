export function MovieCard({ movie }) {

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

    return (
        <div className="card" key={movie.id}>
            <div className="card-content">
                <div className="movie-title">{movie.title}</div>
                <p><strong>Titolo originale:</strong> {movie.original_title}</p>
                <p className="language">
                    <strong>Lingua:</strong>{" "}
                    {countryCode ? (
                        <img 
                            src={`https://flagsapi.com/${countryCode.toUpperCase()}/flat/32.png`}
                            alt={movie.original_language}
                        />
                    ) : (
                        movie.original_language
                    )}
                </p>
                <p><strong>Voto:</strong> {movie.vote_average}</p>
            </div>
        </div>
    );
}

export function SerieCard({ serie }) {

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

    return (
        <div className="card" key={serie.id}>
            <div className="card-content">
                <div className="movie-title">{serie.name}</div>
                <p><strong>Titolo originale:</strong> {serie.original_name}</p>
                <p className="language">
                    <strong>Lingua:</strong>{" "}
                    {countryCode ? (
                        <img 
                            src={`https://flagsapi.com/${countryCode.toUpperCase()}/flat/32.png`}
                            alt={serie.original_language}
                        />
                    ) : (
                        serie.original_language
                    )}
                </p>
                <p><strong>Voto:</strong> {serie.vote_average}</p>
            </div>
        </div>
    );
}