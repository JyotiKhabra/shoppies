import React from 'react';
import './nominations.css';
import { Card, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText,ListItemSecondaryAction, IconButton,  } from "@material-ui/core";
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

export default function Nominations(props){

  // const nominatedMovies = () =>{
  //   if
  // }



  return(
    <Card id="nominations">
    <Typography variant="h6" >
     Nominations:
    </Typography>
    <div>
      <List>
        {props.nominated && props.nominated.map(nomination =>{
          return(
            <ListItem>
              <ListItemAvatar>
              <Avatar src={nomination.Poster} alt="movie poster">
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              {nomination.Title} <br/>
              Year: {nomination.Year}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="add">
                <DeleteForeverRoundedIcon
                onClick={() => props.removeNomination(nomination.imdbID)}/>
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