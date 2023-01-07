import "./Header.css"

import Logo from "/src/assets/logo.png"

import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div><Link to="/"><img src={Logo} /></Link></div>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/evenements">Événements</Link></li>
                    <li><Link to="/galerie">Galerie</Link></li>
                </ul>
            </nav>
        </header >
    )
}