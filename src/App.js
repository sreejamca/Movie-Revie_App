import React,{useState, useEffect} from 'react';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movie from './Components/Movie';
import SearchBox from './Components/SearchBox';
import  Review  from "./Components/Review"
const App=()=>{
      // State variables for movies and search value

    const[movies,setMovies]=useState([]);
    const[searchValue,setSearchValue]=useState('');
      // Function to make a movie search request

    const getMovieRequest=async()=>{
        const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=990ebb95`;
        const response=await fetch(url);
        const responseJson=await response.json();
        if(responseJson.Search){
     setMovies(responseJson.Search);  
    }
};
  // Perform a movie search when the search value changes

    useEffect(()=>{
        getMovieRequest(searchValue)     
    },[searchValue]);
    return (
        <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
             <Movie heading= 'Movies'/>
             <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className='row row-cols-auto'>
         <MovieList movies={movies} />
         
         </div><Review/>
        </div>
    )
}
export default App;