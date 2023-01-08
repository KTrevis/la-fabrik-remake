import { useState } from "react"

export default function NotLoggedIn(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const user = {
        username: "admin",
        password: "1234"
    }

    function handleChange(event) {
        setFormData(
            {
                ...formData,
                [event.target.name]: event.target.value
            }
        )
    }

    function logIn() {
        fetch("/api/admin/login?username=" + formData.username + "&password=" + formData.password).then(
            response => response.json()
        ).then(
            data => {
                console.log(data)
                props.logIn(data.connected)
            }
        )
    }

    return (
        <div className="notLoggedInContainer">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input type="text" name="username" onChange={handleChange} />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" onChange={handleChange} />
            <button onClick={logIn} >Connexion</button>
        </div>
    )
}