export default function AddEvent() {
    return (
        <>
            <p>Ajouter un événement</p>
            <form>
                <input type="text" placeholder="Nom de l'événement" /><br />
                <input type="date" /><br />
                <button>Envoyer</button>
            </form>
        </>
    )
}