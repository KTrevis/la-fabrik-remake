import "./Galerie.css"

import { useState } from "react"

import Modal from "../Modal"
import Carrousel from "../Carrousel/Carrousel"

import galerie0 from "/src/assets/galerie/galerie-0.jpg"
import galerie1 from "/src/assets/galerie/galerie-1.jpg"
import galerie2 from "/src/assets/galerie/galerie-2.jpg"
import galerie3 from "/src/assets/galerie/galerie-3.jpg"
import galerie4 from "/src/assets/galerie/galerie-4.jpg"

export default function Galerie() {
    document.title = "Galerie"
    const [currentImage, setCurrentImage] = useState(0)
    const [modal, setModal] = useState(false)

    let images = [
        galerie0,
        galerie1,
        galerie2,
        galerie3,
        galerie4
    ]

    images = images.map(image => {
        return <img onClick={toggleModal} src={image} />
    })

    function toggleModal(event, indexOfImage) {
        if (event.target.parentElement.className.includes("image-container")) {
            return
        }
        else if (event.target.className.includes("nextImg") || event.target.className.includes("previousImg")) {
            return
        }

        setCurrentImage(indexOfImage)
        setModal(!modal)
    }

    return (
        <div className="galerie">
            {images}
            {
                modal ? <Modal toggleModal={toggleModal} modalContent={<Carrousel images={images} currentImage={currentImage} />} /> : ""
            }
        </div>
    )
}