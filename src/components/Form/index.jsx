import { useState } from 'react';
import { ContactController } from '../../controllers/ContactController'
import { Header } from '../Header';
import './style.css'

export const Form = () => {

    const [contactForm, setContactForm] = useState({
        name: '',
        address: '',
        city: '',
        uf: '',
        phone: ''
    }); 

    const contactController = new ContactController();

    const save = contactController.addContact;
    const update = contactController.updateContact;

    const handleChangeContact = (event, key) => {
        setContactForm({
            ...contactForm, 
            [key]: event.target.value
        })
    }

    const handleLoginForm = (event) => {
        event.preventDefault()
        save(contactForm)
    }

    return (
        <>
            <Header text="Novo Registro" route="/" />
            <form className="contacts-form" onSubmit={(e) => handleLoginForm(e)}>
                <div className="contacts-form-1">
                    <div className="contacts-form-input">
                        <label>Nome</label>
                        <input 
                            type="text" 
                            value={contactForm.name} 
                            onChange={event => handleChangeContact(event, 'name')}
                        />
                    </div>
                    <div className="contacts-form-input">
                        <label>Endereço</label>
                        <input 
                            type="text" 
                            value={contactForm.address} 
                            onChange={event => handleChangeContact(event, 'address')}
                        />                
                    </div>
                </div>
                <div className="contacts-form-2">
                    <div className="contacts-form-input">
                        <label>Cidade</label>
                        <input 
                            type="text" 
                            value={contactForm.city} 
                            onChange={event => handleChangeContact(event, 'city')}
                        />                
                    </div>
                    <div className="contacts-form-input uf">
                        <label>UF</label>
                        <input 
                            type="text" 
                            value={contactForm.uf} 
                            onChange={event => handleChangeContact(event, 'uf')}
                        />                
                    </div>
                    <div className="contacts-form-input">
                        <label>Telefone</label>
                        <input 
                            type="text" 
                            value={contactForm.phone} 
                            onChange={event => handleChangeContact(event, 'phone')}
                        />                
                    </div>
                </div>
                <div className='btn-container'>
                    <button className="btn" type="submit">Salvar</button>
                    <button className="btn" onClick={() => update()}>Cancelar</button>
                </div>
            </form>
        </>
    )
}
