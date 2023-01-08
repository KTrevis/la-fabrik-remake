import { useState } from "react"

export default function UploadImage() {
    const [files, setFiles] = useState([])

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
        <>
            <p>Ajouter une image à la galerie</p>
            <form method="post">
                <input type="file" accept=".png, .jpg, .jpeg, .webp" multiple onChange={(event) => setFiles(event.target.files)} /><br />
                <button onClick={uploadImageToGalerie}>Envoyer</button>
            </form>
        </>
    )
}