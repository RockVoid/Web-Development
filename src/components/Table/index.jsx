import './style.css';
import ButtonIcon from '../Button';
import TableRow from '../TableRow';

import { ContactController } from '../../controllers/ContactController';
import { useEffect } from 'react';
import { useState } from 'react';

const plusClick = () => {
    return alert('Plus')
}

const Table = () => {
    const [contacts, setContacts] = useState([]) 
    const contactsController = new ContactController()

    const deleteContact = contactsController.deleteContact;

    const loadContacts = async () => {
        const contacts = await contactsController.getContacts()
        setContacts(contacts)
    }
    
    useEffect(() => {
        loadContacts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <table className='contacts-table'>
            <tr className='contacts-table-header'>
                <th><ButtonIcon typeIcon="plus" onClick={plusClick}/></th>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Cidade</th>
                <th>UF</th>
                <th>Telefone</th>
                <th>E-mail</th>
            </tr>
            {contacts.map(item => {
                return( 
                    <TableRow 
                        {...item} 
                        key={item.name} 
                        deleteContact={(id) => deleteContact(id)} 
                    />
                )
            })}
        </table>
    )
}

export default Table
