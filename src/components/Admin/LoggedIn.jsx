import { useState, useEffect } from "react"

import UploadImage from "./UploadImage"
import DeleteImage from "./DeleteImage"
import AddEvent from "./AddEvent"

export default function loggedIn() {
    return (
        <div className="loggedInContainer">
            <UploadImage />
            <DeleteImage />
            <AddEvent />
            <p>Supprimer un événement</p>
        </div>
    )
}