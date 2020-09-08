import React from 'react';
import './searchResults.css';
import { Card, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText,ListItemSecondaryAction, IconButton,  } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';



export default function SearchResult(props){

  const nominationButton = (nominations, movie) => {
    let nominated = false;
    if (nominations.length === 5){
      return true
    } else {
      nominations.map(nomination => (
        nomination.imdbID === movie.imdbID ? nominated = true : null
      ))
    }
    return nominated;
  };

  return(

    <Card id="results">
    <Typography variant="h6">
     Movie Results:
    </Typography>
    <div>
      <List>
        {props.results && props.results.map(movie =>{
          return(
            <ListItem>
              <ListItemAvatar>
              <Avatar src={movie.Poster} alt="movie poster">
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              {movie.Title } <br/>
              Year: {movie.Year}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="add" onClick={()=> {props.onNominate(movie)}}
              disabled={nominationButton(props.nominated, movie)}>
                <AddCircleOutlineOutlinedIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          )
        })}
      </List>
    </div>
  </Card>

  );
}