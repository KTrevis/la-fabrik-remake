import "./Events.css"
import 'react-calendar/dist/Calendar.css';

import { useState, useEffect } from "react"

import { useNavigate, useParams } from "react-router-dom"

import Calendar from "react-calendar"
import Modal from "../Modal"

export default function Events(props) {
    document.title = "Événements"
    const [modal, setModal] = useState(false)
    const [modalContent, setModalContent] = useState(<img src="" />)
    const [events, setEvents] = useState([{}])
    const name = useParams().name


    useEffect(() => {
        fetch("/api/admin/events/query").then(
            response => response.json()
        ).then(
            data => {
                setEvents(data.events)
            }
        )
    }, [])

    useEffect(() => {
        events.map(event => {
            if (event.name == name && name != undefined) {
                setModal(true)
                setModalContent(<img src={event.image} />)
            }
        })
    }, [name])

    function toggleModal() {
        if (modal) {
            navigate("/evenements")
        }

        setModal(!modal)
    }


    const navigate = useNavigate()

    function showEventImage(date) {
        events.map(event => {
            if (new Date(event.date).getTime() == date.getTime()) {
                navigate("/evenements/" + event.name)
                setModalContent(<img src={event.image} />)
                toggleModal()
            }
        })
    }

    //Cette fonction est appellé à chaque fois que react-calendar génére une case du calendrier
    function addEventsToCalendar(date, view) {
        let eventName

        //On itére à travers les événements, et si la date d'un événement correspond à la date de la case actuelle, on change le contenu de la case
        events.map(event => {
            let eventDate = new Date(event.date)
            if (eventDate.setHours(0, 0, 0) == date.getTime() && view == "month") {
                eventName = <p>{event.name}</p>
            }
        })

        return eventName
    }

    return (
        <div className="events">
            <Calendar
                tileContent={({ activeStartDate, date, view }) => addEventsToCalendar(date, view)}
                onClickDay={(date) => showEventImage(date)}
            />
            {modal ? <Modal toggleModal={toggleModal} modalContent={modalContent} /> : ""}
        </div>
    )
}