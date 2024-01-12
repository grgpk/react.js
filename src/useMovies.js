import { useState, useEffect } from "react";

const API = `http://www.omdbapi.com/?apikey=${KEY}`;

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchMovies() {
      try {
        setIsloading(true);
        setError("");
        const res = await fetch(`${API}&s=${query}`, {
          signal: abortController.signal,
        });

        if (!res.ok) {
          throw new Error("Something went wrong with fetching movies");
        }

        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("Movie not Found");
        }
        setMovies(data.Search);
        setError("");
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsloading(false);
      }
    }

    if (!query.length) {
      setError("");
      setMovies([]);
      return;
    }
    // handleCloseMovie();

    fetchMovies();

    return () => abortController.abort();
  }, [query]);

  return { error, movies, isloading };
}
