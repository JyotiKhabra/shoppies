import React from "react";
import './searchMovies.css';
import { TextField } from "@material-ui/core";



export default function SearchMovie(props){

  const updateSearchText = event => {
    props.setSearch(event.target.value);
  }



  return(
    <form id="search" onSubmit={event => event.preventDefault()} autoComplete="off">
      <TextField
        id="outlined-search" label="Search Movie" type="search" variant="outlined" onChange={updateSearchText}
      />
    </form>
  );
}

