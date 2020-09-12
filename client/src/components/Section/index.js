import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(5),
      width: theme.spacing(80),
      height: theme.spacing(50),
    },
  },
  paperRoot: {
    backgroundColor: "#61C3FF",
    borderStyle: "solid",
    borderColor: "white"
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Paper className={classes.paperRoot} elevation={5}/>
      <Paper className={classes.paperRoot}/>
      <Paper className={classes.paperRoot}/>
      <Paper className={classes.paperRoot}/>
      <Paper className={classes.paperRoot}/>
      <Paper className={classes.paperRoot}/>

    </div>
  );
}
