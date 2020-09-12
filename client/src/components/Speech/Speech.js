import React, {useEffect, useContext } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { angryWords } from "./angryWords.json"
import { depressedWords } from "./depressedWord.json"
import PageContext from "../../utils/PageContext"
export default function Speech() {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const { angryScore, setAngryScore, depressedScore, setDepressedScore } = useContext(PageContext)
    
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
        setAngryScore(0)
        setDepressedScore(0)
        resetTranscript()
    }
    
    return (
      <div>
        <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={e => reset(e)}>Reset</button>
        <p>{transcript}</p>
        <p>Angry Score: {angryScore}, Sad Score: {depressedScore}</p>
      </div>
    )
}
