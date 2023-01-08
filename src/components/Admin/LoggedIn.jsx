import { useState, useEffect } from "react"

export default function loggedIn() {
    const [images, setImages] = useState([])
    const [files, setFiles] = useState([])
    /*
    TODO :
    Renommer les images uploadés en leur donnant une id égale à celle de l'image à l'id la plus élevée +1, sinon la renommer "0"
    */

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
                                <button data-image={image}>Supprimer</button>
                            </div>
                        )
                    })
                )
            }
        )
    }, [])

    async function uploadImageToGalerie(event) {
        event.preventDefault()

        let formData = new FormData()

        for (let i = 0; i < files.length; i++) {
            formData.append('image', files[i]);
        }

        const response = await fetch('/api/admin/galerieupload',
            {
                method: 'POST',
                body: formData
            });

        if (response.ok) {
            alert("Fichiers en ligne")
        }
        else {
            alert("Erreur")
        }
    }

    return (
        <div className="loggedInContainer">
            <p>Ajouter une image à la galerie</p>
            <form method="post">
                <input type="file" accept=".png, .jpg, .jpeg, .webp" multiple onChange={(event) => setFiles(event.target.files)} /><br />
                <button onClick={uploadImageToGalerie}>Envoyer</button>
            </form>
            <p>Supprimer une image de la galerie</p>
            <div className="deleteImageContainer">
                {images}
            </div>
            <p>Ajouter un événement</p>
            <form>
                <input type="text" placeholder="Nom de l'événement" /><br />
                <input type="date" /><br />
                <button>Envoyer</button>
            </form>
            <p>Supprimer un événement</p>
        </div>
    )
}