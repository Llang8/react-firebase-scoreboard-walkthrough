import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Game</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/scoreboard">Scoreboard</Link>
                </li>
            </ul>
        </div>
    )
}
