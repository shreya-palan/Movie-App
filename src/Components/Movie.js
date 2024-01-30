import React, { useEffect, useState } from 'react'
import '../Components/movie.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=89b7925b';
/**The api url for fetching movie data from the OMDB API */

const Movie = () => {

    /*movies: To store the list of movies */
    const [movies, setMovies] = useState([]);
    
    /*searchTerm: To store the user's input for movie search */
    const [searchTerm, setSearchTerm] = useState('');

    /*Asynchronous function 
    Takes movie title as its parameter
    fetches the movie data from the API and sets it in the state using setMovies*/

    const searchMovies = async (title) => {
        
        /*fetch: To make HTTP request to OMDP API
          await: To wait for the completion of fetch opeartion and the response is stored in the response variable*/
        const response = await fetch(`${API_URL}&s=${title}`);
        
        /*Prases the response data as JSON*/
        const data = await response.json();

        /*Contains the array of movis matching the searchTerm*/
        setMovies(data.Search);
    }

    useEffect(() => {

        /*spiderman: The default searchTerm*/
        searchMovies('Spiderman');
    }, [])



    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder='Search for movies'
                    value={searchTerm}

                    /*searchTerm will be updated to the current value of the input field*/
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'

                    /*When the icon is clicked searchMovies function is invoked with the current value of searchTerm as an arguement*/
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                /*Checks if there are movies in the state */
                movies?.length > 0
                    ? (
                        /*If present: maps through array of movies and renders aech movie using MovieCard*/
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) :
                    (
                        /*If no movies present: displays the below message*/
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }


        </div>
    );
};

export default Movie
