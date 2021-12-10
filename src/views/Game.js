import React, { useState } from 'react';
import { doc, getDoc, addDoc, collection } from '@firebase/firestore';
import app from '../firebase'
import { getFirestore } from "@firebase/firestore"

export default function Game() {
    const [score, setScore] = useState(0) // -> Returns an array [stateVariable, getStateVariable]

    const db = getFirestore()

    const incrementScore = (incrementor) => {
        setScore(score + incrementor)
    }

    const saveScore = async () => {
        const docRef = await addDoc(collection(db, 'scores'), {
            score: score,
            name: "Lucas"
        })
        console.log(`Score ${docRef.id} added successfully`)
    }

    return (
        <div>
            <h1>Game</h1>
            <h2>Score: { score }</h2>
            <button onClick={ () => incrementScore(-1) }>Decrease Score</button>
            <button onClick={ () => incrementScore(1) }>Increase Score</button>

            <button onClick={ () => saveScore() }>Save Score</button>
        </div>
    )
}
