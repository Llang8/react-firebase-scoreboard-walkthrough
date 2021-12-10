import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Game from './Game'
import Scoreboard from './Scoreboard'
import Navbar from '../components/Navbar'


export default function Main() {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main className="container">
                <Routes>
                    <Route path="/" element={ <Game /> } />
                    <Route path="/scoreboard" element={ <Scoreboard /> } />
                </Routes>
            </main>
        </div>
    )
}
