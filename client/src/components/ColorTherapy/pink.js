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
    backgroundColor:"#ffe3e0"
  },
  one:{
    backgroundColor:"#fbc3bc"
  },
  two:{
    backgroundColor:"#f7a399"
  },
  three:{
    backgroundColor:"#f38375"
  },
  four:{
    backgroundColor:"#ef6351"
  }
}));

export default function Pink() {
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
