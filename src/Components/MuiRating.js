// Importing required components from the "@mui/material" library
import {Stack, Rating} from "@mui/material"
// Importing React and useState from the "react" package
import React, { useState } from "react";

// Defining a functional component named "MuiRating"
const MuiRating = ()=>{
// Initializing a state variable "value" using useState hook

    const [value, setValue] = useState(null)
    console.log({value})
    // Defining a function "handleChange" to handle rating change events

    const handleChange =(
        event, 
        newValue
    )=>
    {
    // Updating the state variable "value" with the new rating value

        setValue(newValue)
    }
      // Rendering JSX components

    return (
        <Stack spacing={2}>
          <Rating value={value} onChange={handleChange}></Rating>
          </Stack>

    )
}
// Exporting the MuiRating component as the default export of this module

export default MuiRating;
