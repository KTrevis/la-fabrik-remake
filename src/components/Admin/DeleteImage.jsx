import { useState, useEffect } from "react"

export default function DeleteImage() {
    const [images, setImages] = useState([])

    function handleDeleteImage() {
        console.log(this.data.image)
    }

    useEffect(() => {
        fetch("/api/galerie/images").then(
            response => response.json()
        ).then(
            data => {
                setImages(
                    data.images.map(image => {
                        return (
                            <div className="deleteImage">
                                <img src={image} />
                                <button onClick={handleDeleteImage} data-image={image}>Supprimer</button>
                            </div>
                        )
                    })
                )
            }
        )
    }, [])

    return (
        <>
            <p>Supprimer une image de la galerie</p>
            <div className="deleteImageContainer">
                {images}
            </div>
        </>
    )
}