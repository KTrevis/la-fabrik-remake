import "./Admin.css"

import NotLoggedIn from "./NotLoggedIn"
import LoggedIn from "./LoggedIn"

import { useState } from "react"

export default function Admin() {
    document.title = "Admin"

    const [loggedIn, setLoggedIn] = useState(false)

    function logIn(bool) {
        setLoggedIn(bool)

        if (bool == false) {
            alert("Mauvais mot de passe ou nom d'utilisateur")
        }
    }

    return (
        <div className="adminContainer">
            {loggedIn == true ? <LoggedIn /> : <NotLoggedIn logIn={logIn} />}
        </div>
    )
}