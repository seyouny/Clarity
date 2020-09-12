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
    backgroundColor:"#91e5f6"
  },
  one:{
    backgroundColor:"#84d2f6"
  },
  two:{
    backgroundColor:"#59a5d8"
  },
  three:{
    backgroundColor:"#5aa9e6"
  },
  four:{
    backgroundColor:"#386fa4"
  }
}));

export default function Blue() {
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
