import { useState } from "react";
import MovieCard from "./MovieCard";

export default function Search() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const fetchData = async (query: string) => {
        const MOVIE_DB_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=91c4bd13e304514b8e00f92a1331858b&language=en-US&query=${query}&page=1&include_adult=false`;
        const res = await fetch(MOVIE_DB_API_URL)
        return await (res as Response).json();
    }

    const searchMovies = async (event: any) => {
        event.preventDefault();
        console.log('submitting')
        const res = await fetchData(query).catch(() => console.log('Error'));
        console.log(res);
        setMovies(res?.results.filter((movie: any) => movie.poster_path));
    };

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query"> Movie Name</label>
                <input
                    type="text"
                    className="input"
                    name="query"
                    placeholder="i.e. Jurassic Park"
                    onChange={(e) => setQuery(e.target.value)} />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.map((movie: any) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        </>
    );
}