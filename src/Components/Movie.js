
import React from 'react'
// An arrow function to create a heading component by passing the property wth a value heading.
const Movie=(props)=>{
    return (
        <div class='col'>
            <h1>{props.heading}</h1>
        </div>
    )
}
export default Movie;