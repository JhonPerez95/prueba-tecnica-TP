import React from 'react'
import { Link } from 'react-router-dom'

function NavBart() {
    return (
        <nav className="nav navbar-dark bg-dark">
            <Link className="nav-link" to="/">
                Lista Juegos
            </Link>
            <Link className="nav-link" to="/favorites">
                Favoritos
            </Link>
        </nav>
    )
}

export default NavBart
