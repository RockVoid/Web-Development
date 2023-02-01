import './style.css'

// Componentizar buttons
export const Modal = ({ message, showModal, setModalState, action }) => {
    return (
        <>
            {showModal && (<div className="modal-container">
                <div><h2>{message}</h2></div>
                <div>
                    <button onClick={() => action()}>Sim</button>
                    <button onClick={() => setModalState(false)}>Não</button>
                </div>
            </div>)}
        </>
    )
}
