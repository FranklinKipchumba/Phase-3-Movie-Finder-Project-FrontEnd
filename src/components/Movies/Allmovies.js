import React from "react";
import { Link } from "react-router-dom";

function Allmovies({ movies, handleDeleteMovie }) {

    function handleDelete(id) {
        fetch(`https://phase-3-movie-finder-project-back-end-app.vercel.app/movies/destroy/${id}`, { 
            method: "DELETE",
        })

        handleDeleteMovie(id)
      }
 
    return(
        <div className="cards">
            {movies.map((movie) => 
                <div key={movie.id} className="card">
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <img className="card-img-top" src={movie.movie_url} alt={movie.movie_url}></img>
                    <h2>{movie.year}</h2>
                    {movie.originally_fetched === false && (
                        <button className="cdbtn" onClick={() => handleDelete(movie.id)}>Delete</button>
                    )}
                    {movie.originally_fetched === false && (
                        <Link to={`/update/${movie.id}`}>Update</Link>
                    )}
                </div>
            )}
        </div>
    )
}

export default Allmovies;