import "./Carrousel.css"

import { useState, useEffect } from "react"

export default function Carrousel(props) {
    const [currentImage, setCurrentImage] = useState(0)
    const [transitionClass, setTransitionClass] = useState('')

    useEffect(() => {
        if (props.currentImage != undefined) {
            setCurrentImage(props.currentImage)
        }
    }, [])

    const images = props.images

    function previousImage() {
        setTransitionClass('fade-out')
        setTimeout(() => {
            if (currentImage - 1 < 0) {
                setCurrentImage(images.length - 1)
            } else {
                setCurrentImage(currentImage - 1)
            }
            setTransitionClass('fade-in')
        }, 500)
    }

    function nextImage() {
        setTransitionClass('fade-out')
        setTimeout(() => {
            if (currentImage + 1 > images.length - 1) {
                setCurrentImage(0)
            } else {
                setCurrentImage(currentImage + 1)
            }
            setTransitionClass('fade-in')
        }, 500)
    }

    return (
        <div className="carrouselContainer">
            <div className="previousImg" onClick={previousImage}>{"<"}</div>
            <div className={`image-container ${transitionClass}`}>
                {images[currentImage]}
            </div>
            <div className="nextImg" onClick={nextImage}>{">"}</div>
        </div>
    )
}