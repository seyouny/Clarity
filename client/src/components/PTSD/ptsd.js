import React from 'react';
// import "./style.css"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Breathe from './breathe'
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
                 <Typography variant="h4">Post Traumatic Stress Disorder (PTSD)</Typography>
            </Grid>

            <Grid item xs>
                 <Typography variant="body1">
                 Post Traumatic Stress Disorder (PTSD) is a mental health condition that may be triggered by having witnessed or experienced a terrifying event. 
                 People with PTSD may relieve traumatic events through flashbacks or nightmares and feel anger, sadness, or fear intensely. 
                 They avoid situations which may remind them of the traumatic event and may be triggered by any reminders of these events.
                 </Typography>
            </Grid>
            <Grid item md>
           <Breathe/>
            </Grid>
            
        </Grid>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing = {9}
        >
            <Grid item xs>
            <Typography variant="h6">PTSD symptoms are mainly grouped to four categories.</Typography>
            <Typography variant="body1">
                <br></br>
                ○  Intrusive Memories<br></br>
                ○  Negative Changes in Thinking and Mood<br></br>
                ○  Changes in Physical and Emotional Reactions <br></br>
                ○  Avoidance<br></br>
            </Typography>
            </Grid>
            <Grid item xs>
            <Typography variant="h6">Treatments</Typography>
            <Typography variant="body1">
            <br></br>
                ○  Cognitive TherapyMedications<br></br>
                ○  Exposure Therapy<br></br>
                ○  Antidepressants <br></br>
                ○  Eye Movement Desensitization and Reprocessing (EMDR) <br></br>
                ○  Anti-anxiety Medication <br></br>

            </Typography>
            </Grid>
            <Grid item xs>
            <Typography variant="h6">Resources</Typography>
            <Typography variant="body1" component="span">
                <br></br>
                <Link href="https://www.ptsd.va.gov/" onClick={preventDefault} color="primary">National Center for PTSD</Link>
                <p>
                    This is the national center for PTSD with many reliable links and information about PTSD in America.
                </p>
                <Link href="https://www.nimh.nih.gov/health/find-help/index.shtml" onClick={preventDefault} color="primary">Hotlines for an Immediate Crisis</Link>
                <p>
                    Several numbers are listed on this page for anyone who needs immediate support for emotional distress. All hotlines are available 24/7. 
                </p>
                
            </Typography>
            </Grid>
          </Grid>
          </ThemeProvider>
          </div>

    )
}