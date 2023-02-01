import './style.css';
import ButtonIcon from '../Button';
import TableRow from '../TableRow';

import { ContactController } from '../../controllers/ContactController';
import { useEffect } from 'react';
import { useState } from 'react';
import { Header } from '../Header';
import { Link } from 'react-router-dom';

const Table = () => {
    const [contacts, setContacts] = useState([]) 
    const [busca, setBusca] = useState('')
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

    // Refactor: Usar use memo
    const textoBusca = busca.toLowerCase();
    const handleSearch = (event) => {
        if (!event.target.value) {
            loadContacts()
        }

        setBusca(event.target.value)

        const filteredContacts = contacts.filter(contact => contact.TECL_NOME.toLowerCase().includes(textoBusca))
        setContacts(filteredContacts)
    }

    return (
        <>
            <Header text="Teste ReactJS - SaibWeb" route="/register" />
            <div className='search-contact-container'>
                <label><h3>Busca de contatos</h3></label>
                <input type="text" value={busca} onChange={(e) => handleSearch(e)} />
            </div>
            <table className='contacts-table'>
                <tr className='contacts-table-header'>
                    <th>
                        <Link to="/register" ><ButtonIcon typeIcon="plus" onClick={() => {}}/></Link>
                    </th>
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
        </>
    )
}

export default Table
