import React from 'react'
import Vraag from './Vraag'
import triviaHome from '../data/triviaHomeData.js'

export default function Trivia() {
    const vragen = triviaHome

    return (        
        <div>
            <h2>Trivia</h2>
            {vragen.map((vraag) => (
            <Vraag content={vraag}/>
          ))}
        </div>
    )
}
