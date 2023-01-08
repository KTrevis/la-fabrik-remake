import "./Galerie.css"

import { useState, useEffect } from "react"

import Modal from "../Modal"
import Carrousel from "../Carrousel/Carrousel"

export default function Galerie() {
    document.title = "Galerie"
    const [currentImage, setCurrentImage] = useState(0)
    const [modal, setModal] = useState(false)
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch("/api/galerie/images").then(
            response => response.json()
        ).then(
            data => {
                setImages(
                    data.images.map(image => {
                        return (<img onClick={toggleModal} src={"./galerie/" + image} />)
                    })
                )
            }
        )
    }, [])

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