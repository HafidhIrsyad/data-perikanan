import React from 'react'
import { Link } from 'react-router-dom';
import './styles.scss'

export default function Navbar() {
  return (
    <header className="header">
      <div className="div">
        <Link className="link" to="/">
          Fishery
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="https://github.com/HafidhIrsyad"
              target="_blank"
              rel="noreferrer"
            >
              Github-Profile
            </a>
          </li>
          <li>
            <a 
              href="https://docs.steinhq.com/read-data"
              target="_blank"
              rel="noreferrer"
            >
              Stein-Api
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
