import "./Home.css"

import carrouselHome1 from "/src/assets/carrousel-home/carrousel-home-1.jpg"
import carrouselHome0 from "/src/assets/carrousel-home/carrousel-home-0.jpg"

import { useState, useEffect } from "react"

import Carrousel from "../Carrousel/Carrousel"

export default function Home() {
    document.title = "Accueil"

    let images = [
        carrouselHome0,
        carrouselHome1
    ]

    images = images.map(image => {
        return <img src={image} />
    })

    return (
        <div className="home">
            <Carrousel images={images} />
            <p>
                Bienvenue à la Fabrik de Meaux.
                <br />La carte est renouvelée tous les quinze jours, produits frais, de saison et locaux dans la mesure du possible.
                <br />Suivez aussi l'actualité de la Fabrik (concerts, soirée dansantes…) sur Facebook et Instagram.
                <br />Accueil toujours chaleureux la semaine de 8h à 15h et de 17h à 23h et le samedi de 10h à 15h et de 17h à 23h.
                <br />Possibilité de privatiser l'établissement.
                <br />A très vite, l'équipe de la Fabrik.
            </p>
            <span>
                La Fabrik de Meaux
                <br />Restaurant / Bar / Lounge
                <br />38 rue Aristide Briand, 77100 Meaux
                <br />07 82 65 99 85
            </span>
        </div>
    )
}