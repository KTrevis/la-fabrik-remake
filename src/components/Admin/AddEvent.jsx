import { useState } from "react"

export default function AddEvent() {
    const [formData, setFormData] = useState({
        name: "",
        date: ""
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function createEvent(event) {
        event.preventDefault()
        fetch("/api/admin/events/create",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }).then
            (response => response.json()).then
            (data => console.log(data))

    }

    return (
        <>
            <p>Ajouter un événement</p>
            <form>
                <input onChange={handleChange} name="name" type="text" placeholder="Nom de l'événement" /><br />
                <input onChange={handleChange} name="date" type="date" /><br />
                <button onClick={createEvent}>Envoyer</button>
            </form>
        </>
    )
}