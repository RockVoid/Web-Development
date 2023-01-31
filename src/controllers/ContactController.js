import axios from 'axios';

const URL_SAIBWEB = axios.create({
    baseURL: 'https://interno.saibweb.com.br/api/v1/teste/'
});

export class ContactController {
    async getContacts() {
        const response = await URL_SAIBWEB.get('/clientes').then(res => res.data)
        const contacts = response.data.map(contact => {
            contact.id = contact.TECL_ID;
            contact.name = contact.TECL_NOME;
            contact.address = contact.TECL_ENDERECO;
            contact.city = contact.TECL_CIDADE;
            contact.uf = contact.TECL_UF;
            contact.phone = contact.TECL_TELEFONE;
            contact.email = contact.name.toLowerCase() + "@gmail.com";

            return contact
        })
        return contacts 
    }

    async addContact({ name, address, city, uf, phone }) {
        const body = {
            TECL_NOME: name,
            TECL_ENDERECO: address,
            TECL_CIDADE: city,
            TECL_UF: uf,
            TECL_TELEFONE: phone   
        }
        
        const response = URL_SAIBWEB.post('/cliente', body).then(res => res)
        return response
    }

    async deleteContact(id) {
        const response = await URL_SAIBWEB.delete('/cliente/' + id).then(res => res.data)
        return response
    }

    async updateContact({ name, address, city, uf, phone }) {
        const body = {
            TECL_NOME: name,
            TECL_ENDERECO: address,
            TECL_CIDADE: city,
            TECL_UF: uf,
            TECL_TELEFONE: phone   
        }

        const response = await URL_SAIBWEB.put('/cliente', body).then(res => res.data);
        return response
    }
}
