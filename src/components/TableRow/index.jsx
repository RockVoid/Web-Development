import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonIcon from "../Button"
import { Modal } from "../Modal";

const TableRow = (
    { 
        id, 
        name, 
        address, 
        city, 
        uf, 
        phone, 
        email, 
        modalStatus, 
        updateContact,
        deleteContact
    }) => {

    const [modal, setModalState] = useState(false)
    const deleteItem = () => {
        deleteContact(id)
        setTimeout(() => setModalState(false), 2000);
    }
    const body = {
        id, 
        name, 
        address, 
        city, 
        uf, 
        phone, 
        email
    }

    return (
        <>
            <Modal 
                message="Tem certeza que deseja deletar este contato?" 
                showModal={modal}
                setModalState={(bool) => setModalState(bool)}
                action={() => deleteItem()}
            />
            <tr className='table-contacts-row'>
                <td className='row-icon'>
                    <span><ButtonIcon typeIcon='minus' onClick={() => setModalState(!modalStatus)} /></span>
                    <span>
                        <Link to="/register">
                            <ButtonIcon typeIcon='pencil' />
                        </Link>
                    </span>
                </td>
                <td>{ name }</td>
                <td>{ address }</td>
                <td>{ city }</td>
                <td>{ uf }</td>
                <td>{ phone }</td>
                <td>{ email }</td>
            </tr>
        </>
    )
}

export default TableRow;