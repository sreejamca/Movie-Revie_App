import React from 'react';
//passing props which returns a list of movies that we searched.
const MovieList = (props) => {
	
	return (
		<>
			{props.movies.map((movie, index) => (
				<div lassName='overlay d-flex align-items-center justify-content-center'>
					<img src={movie.Poster} alt='movie'></img> 
				</div>
			))}
		</>
	);
};

export default MovieList;