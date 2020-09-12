import React, { useState, useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { words } from "./words.json"
export default function Speech() {
    const { transcript, resetTranscript } = useSpeechRecognition()
    let [score, setscore] = useState(0)
    
    // useEffect(() => {
    //     let replacedLetters = []
    //     words.forEach((word) => {
    //         replacedLetters.push(word[0] + "*".repeat(word.length - 2))
    //      })
    
    //     words.push([...replacedLetters])
    // }, [])
    
            

    useEffect(() => {
        const spokenWords = transcript.split(" ");

        console.log(spokenWords[spokenWords.length - 1])
        if (words.includes(spokenWords[spokenWords.length - 1])) {
            console.log(spokenWords[spokenWords.length - 1])
            setscore(score + 1)
        };
    }, [transcript])

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log("not supported");
        return null
    }
    function reset(e) {
        setscore(0)
        resetTranscript()
    }
    
    return (
      <div>
        <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={e => reset(e)}>Reset</button>
        <p>{transcript}</p>
        <p>{score}</p>
      </div>
    )
}
