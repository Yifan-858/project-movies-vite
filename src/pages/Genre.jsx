/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieList } from "../components/MovieList";

export const Genre = ({ genre }) => {
  const movieGenre = useParams();
  const apiKey = "195790d926bf4d38c02251685a7c5f5e";
  const [movieListData, setMovieListData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovieData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${genre}?api_key=${apiKey}&language=en-US&page=1`
      );
      if (response.ok) {
        const data = await response.json();
        setMovieListData(data);
      } else {
        throw new Error("Failed at fetch the movie list");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, [genre]);

  console.log(movieGenre);
  return (
    <>
      <nav className="top-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movie/popular">Popular Now</Link>
          </li>
          <li>
            <Link to="/movie/top_rated">Top rated</Link>
          </li>
        </ul>
      </nav>
      {isLoading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <section className="movie-section">
          <ul className="movie-list">
            {movieListData &&
              movieListData.results.map((movie) => (
                <li key={movie.id} className="each-movie">
                  <Link to={`/movie/${movie.id}`}>
                    <MovieList movie={movie} />
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      )}
    </>
  );
};
