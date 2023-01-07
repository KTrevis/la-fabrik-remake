import "./Modal.css"

import { useState } from "react"

import Carrousel from "./Carrousel/Carrousel"

export default function Modal(props) {
    return (
        <div className="modal" onClick={props.toggleModal} >
            <div className="modal-content">
                {props.modalContent}
            </div>
        </div>
    )
}