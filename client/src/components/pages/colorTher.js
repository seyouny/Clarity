import React from "react";
import Pink from "../ColorTherapy/pink"
import Green from "../ColorTherapy/green"
import Blue from "../ColorTherapy/blue"
import Orange from "../ColorTherapy/orange"
import Yellow from "../ColorTherapy/yellow"
import "./colorstyle.css"
import Grid from '@material-ui/core/Grid';
import Speech from "../Speech/Speech"
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red'

export default function Color() {
  const theme = createMuiTheme({
    typography: {
      palette:{
        primary:{
            main: red[50]
        }
      },
      h1:{
        fontFamily: "'Homemade Apple', cursive"
      },
      h2:{
        fontFamily:"'EB Garamond', serif"
      }
    }
    

  })
  return (<div>
    <ThemeProvider theme= {theme}>

  

    <Typography variant = "h1" >Clarity</Typography>
    <br></br>
    <br></br>

    <Grid
    container
    direction="row"
    justify="center"
    alignItems="flex-start"
    spacing = {9}
    >
      <Grid item md>
      
        <div className="title">
          Color Therapy.
        </div>

      <div className="colors">
        <Pink/> Red is used to stimulate the body and mind and to increase circulation.
        <Orange/> Orange is used to heal the lungs and to increase energy levels.
        <Yellow/> Yellow is thought to stimulate the nerves and purify the body.
        <Green/> Green is used to create a calming atmosphere and induce peace of mind.
        <Blue/>Blue is believed to soothe illnesses and treat pain.
        </div>
        
      </Grid>
      <Grid item md>
      <Typography variant = "h2" >How are you feeling? Press start, and start shouting.</Typography>
        <br></br>
        <br></br>
        <br></br>

          <Speech></Speech>

      </Grid>
      
    </Grid>
    </ThemeProvider>
    </div>
  );
}
