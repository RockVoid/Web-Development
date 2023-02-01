import './style.css'

// Componentizar buttons
export const Modal = ({ message, showModal, setModalState, action, idToDel }) => {
    const deleteItem = () => {
        action(idToDel);
        setTimeout(() => setModalState(false), 2000);
    }

    return (
        <>
            {showModal && (<div className="modal-container">
                <div><h2>{message}</h2></div>
                <div>
                    <button onClick={() => deleteItem()}>Sim</button>
                    <button onClick={() => setModalState(false)}>Não</button>
                </div>
            </div>)}
        </>
    )
}
