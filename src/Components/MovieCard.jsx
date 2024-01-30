import React from 'react'

/*Function takes single prop:movie(object)
  uses destructing to extract individual properties(imdbid,year,poster.....*/
const MovieCard = ({movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (

    /*Provides unique key to the component*/
    <div className="movie" key={imdbID}> /
        <div>
            <p>{Year}</p>
        </div>
        
        <div>
            {/*Checks if poster is equal to N/A 
               if true: it uses movie poster URL
               otherwise: it uses placeholder image URL*/}
            <img src={Poster !== 'N/A' ? Poster : "https://via.placeholder.com/400"} alt= {Title} />
        </div>

        <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard
