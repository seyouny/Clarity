import React from 'react';
// import "./style.css"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
export default function PTSD() {
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
                 <Typography variant="h4">Attention-deficit/hyperactivity disorder (ADHD)</Typography>
            </Grid>

            <Grid item xs>
                 <Typography variant="body1">
                 Attention-deficit/hyperactivity disorder (ADHD) is a mental health disorder that can cause above-normal levels of 
                 hyperactive and impulsive behaviors. People with ADHD may also have trouble focusing their attention on a single task
                  or sitting still for long periods of time. Both adults and children can have ADHD.
                 </Typography>
            </Grid>
            <Grid item md>
            </Grid>
            <img src='https://media2.giphy.com/media/JpFZBAXIwJKHTY4zDQ/giphy.gif'/>
        </Grid>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing = {9}
        >
            <Grid item xs>
            <Typography variant="h6">There are three different types of ADHD.</Typography>
            <Typography variant="body1">
                <br></br>
                ○  Predominantly inattentive presentation: The person may be easily distracted or forgetful of daily routines.
                 It is difficult for the individual to follow instructions, conversations, or finish a task.<br></br>
                ○  Predominantly hyperactive-impulsive presentation: The person feels restless and has trouble with impulsivity. It is hard to sit still for long or wait their turn. <br></br>
                ○  Combined presentation: Both predominantly inattentive presentation and predominantly hyperactive-impulsive presentation are equally present. <br></br>

            </Typography>
            </Grid>
            <Grid item xs>
            <Typography variant="h6">Treatments</Typography>
            <Typography variant="body1">
            <br></br>
                ○  Central nervous system stimulant<br></br>
                ○  Nonstimulant medications<br></br>
                ○  Psychotherapy <br></br>
                ○  Behavior therapy <br></br>

            </Typography>
            </Grid>
            <Grid item xs>
            <Typography variant="h6">Resources</Typography>
            <Typography variant="body1" component="span">
                <br></br>
                <Link href="https://chadd.org/nrc-toolkit/" onClick={preventDefault} color="primary">ADHD Toolkits</Link>
                <p>
                    Here are links and resources for those with ADHD and for their caregivers.
                </p>
                <Link href="https://www.nimh.nih.gov/health/publications/attention-deficit-hyperactivity-disorder-adhd-the-basics/index.shtml" onClick={preventDefault} color="primary">More Information about ADHD</Link>
                <p>
                    A more detailed site with resources for learning about ADHD. 
                </p>
                
            </Typography>
            </Grid>
          </Grid>
          </ThemeProvider>
          </div>

    )
}