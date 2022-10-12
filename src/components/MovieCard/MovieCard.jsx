import React from "react";
import {movies} from "../../movies";


const MovieReact = () =>{
  return(
    <div>
      
      {movies.map(item =>{
        /* return <div>
          <p>{item.naziv}</p>
        </div> */


        return (
          <div>
            <p>{item.naziv}</p>
            <p>{item.godina}</p>
          </div>
          )
      })}
      test da li radi komponenta
    </div>
  )
}

export default MovieReact;