import { useState, useEffect } from "react"

export default function DeleteImage() {
    const [images, setImages] = useState([])

    function handleDeleteImage(event) {
        event.target.parentNode.style.display = "none"
        fetch("/api/admin/galeriedelete",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(event.target.dataset)
            }).then
            (response => response.json()).then
            (data => console.log(data))
    }

    useEffect(() => {
        fetch("/api/galerie/images").then(
            response => response.json()
        ).then(
            data => {
                setImages(
                    data.images.map((image, i) => {
                        return (
                            <div className="deleteImage">
                                <img src={image} />
                                <button onClick={handleDeleteImage} data-index={i} data-image={image}>Supprimer</button>
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