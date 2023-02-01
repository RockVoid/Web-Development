import './style.css'

// Componentizar buttons
export const Modal = ({ message, setShowModal, action }) => {
    return (
        <div className="modal-container">
            <h2>{message}</h2>
            <div>
                <button onClick={() => action}>Sim</button>
                <button onClick={() => setShowModal}>Não</button>
            </div>
        </div>
    )
}
