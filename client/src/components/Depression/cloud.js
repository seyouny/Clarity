import React from 'react';
import "./style.css"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

export default function SadCloud() {
    const font = "'EB Garamond', serif"
    const preventDefault = (event)=>{
        // event.preventDefault();
    }
    const theme = createMuiTheme({
        palette:{
            primary:{
                main:'#03a9f4'
            }

        },
        typography: {
          // Tell Material-UI what's the font-size on the html element is.
          htmlFontSize: 10,
          fontFamily:font,
          color:"black",
          h4:{
            fontFamily: font,
            color: "black"
          },
          body1:{
            fontFamily:font,
            fontSize:20,
            color:"black",
          }
        },
      });
    return (
        <div>
            <ThemeProvider theme={theme}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing = {4}
        >
            
            <Grid item xs>
                 <Typography variant="h4">Depression</Typography>
            </Grid>

            <Grid item xs>
                 <Typography variant="body1">
                 Depression is one of the most common mood disorders in the world. There can be severe symptoms if you 
                 suffer from depression that can affect your eating and sleeping habits, energy, motivation, how you feel 
                 and think, as well as your work. Diagnosis of depression requires symptoms to be present for over two weeks,
                 but there are many different forms of depression besides the clinical form. 
                 </Typography>
            </Grid>
            <Grid item md>
            <div className="wrapper">
                <div className="cloud">
                    <div className="cloud_left"></div>
                    <div className="cloud_right"></div>
                </div>
                <div className="rain">
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                    <div className="drop"></div>
                </div>
                <div className="surface">
                    <div className="hit"></div>
                    <div className="hit"></div>
                    <div className="hit"></div>
                    <div className="hit"></div>
                    <div className="hit"></div>
                </div>
            </div>
            </Grid>
            
        </Grid>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing = {9}
        >
            <Grid item xs>
            <Typography variant="h6">Signs and Symptoms</Typography>
            <Typography variant="body1">
                ○  Persistent sad, anxious, or “empty” mood.<br></br>
                ○  Feelings of hopelessness, or pessimism<br></br>
                ○  Irritability <br></br>
                ○  Feelings of guilt, worthlessness, or helplessness<br></br>
            </Typography>
            </Grid>
            <Grid item xs>
            <Typography variant="h6">Resources</Typography>
            <Typography variant="body1">
                
                <Link href="https://www.samhsa.gov/find-help/national-helpline" onClick={preventDefault} color="primary">SAMHSA help hotline</Link>
                <p>
                    This link leads you to SAMHSA website where you can find resources such as their 24 hour hotline if you or someone you know has depression.
                </p>
                <Link href="https://screening.mhanational.org/screening-tools/dep" onClick={preventDefault} color="primary">Mental Health America Depression Form</Link>
                <p>
                    This link leads you to Mental Health America website where you can take a quick screening form to see if you or someone you know may have depression, but by no 
                    means is this a formal place to be diagnosed with depression. 
                </p>
                
            </Typography>
            </Grid>
          </Grid>
          </ThemeProvider>
          </div>

    )
}