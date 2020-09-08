import React from "react";
import './banner.css';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Banner(props){
  if(props.nominated.length === 5) {

  return(
    <div id="banner">
      <Alert severity="info">
        All nomination spots are now full!
      </Alert>
    </div>
  );
  }else{
    return null;
  }
};


