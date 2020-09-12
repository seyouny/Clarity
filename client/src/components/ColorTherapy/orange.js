import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
      width: theme.spacing(10),
      height: theme.spacing(16)
    }
  },
  zero:{
    backgroundColor:"#ffc857"
  },
  one:{
    backgroundColor:"#ffaa00"
  },
  two:{
    backgroundColor:"#ff9e00"
  },
  three:{
    backgroundColor:"#ff9100"
  },
  four:{
    backgroundColor:"#ff8500"
  }
}));

export default function Orange() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.zero}/>
      <Paper elevation={1} className={classes.one}/>
      <Paper elevation={2} className={classes.two}/>
      <Paper elevation={3} className={classes.three}/>
      <Paper elevation={4} className={classes.four}/>
      {/* <Paper elevation={5} className="five"/> */}
    </div>
  );
}
