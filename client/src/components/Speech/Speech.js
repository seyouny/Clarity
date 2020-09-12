import React, {useEffect, useContext, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { angryWords } from "./angryWords.json"
import { depressedWords } from "./depressedWord.json"
import { Button } from '@material-ui/core';
import PageContext from "../../utils/PageContext"
export default function Speech() {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const { angryScore, setAngryScore, depressedScore, setDepressedScore } = useContext(PageContext)
    const [active, setActive] = useState(false)
    useEffect(() => {
        const spokenWords = transcript.split(" ");
        console.log(spokenWords[spokenWords.length - 1])

        if (angryWords.includes(spokenWords[spokenWords.length - 1])) {
            console.log(spokenWords[spokenWords.length - 1])
            setAngryScore(angryScore + 1)
        };

        if (depressedWords.includes(spokenWords[spokenWords.length - 1])) {
            console.log(spokenWords[spokenWords.length - 1])
            setDepressedScore(depressedScore + 1)
        };
    }, [transcript])

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log("not supported");
        return null
    }

    function reset(e) {
        e.preventDefault();
        resetTranscript()
        handleStop(e)
        setAngryScore(0)
        setDepressedScore(0)
    }

    function handleStart(e) {
        e.preventDefault();
        setActive(true)
        SpeechRecognition.startListening({ continuous: true })
    }

    function handleStop(e) {
        e.preventDefault();
        setActive(false)
        SpeechRecognition.stopListening()
    }
    
    return (
      <div>
        {
        active ? 
        (<Button color="primary" variant="contained" onClick={e => handleStop(e)}>Stop</Button>) 
        : 
        (<Button color="primary" variant="contained" onClick={(e) => handleStart(e)}>Start</Button>)
        }
        <Button color="secondary" variant="contained" onClick={e => reset(e)}>Reset</Button>
        <p>{transcript}</p>
        <p>Angry Score: {angryScore}, Sad Score: {depressedScore}</p>
      </div>
    )
}
