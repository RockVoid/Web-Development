import './style.css';
import ButtonIcon from '../Button';
import TableRow from '../TableRow';

const plusClick = () => {
    return alert('Plus')
}

const updateUser = () => {
    return alert('Minus')
}

const deleteUser = () => {
    return alert('Pencil')
}

const Table = () => {
    const arr = [
        {
            name: 'Roque',
            address: 'Rua Grijalva Costa',
            city: 'Fortaleza',
            uf: 'CE',
            phone: '(99) 99999-9999',
            email: 'roque@gmail.com'
        },
        {
            name: 'herick',
            address: 'Rua Grijalva Costa',
            city: 'Fortaleza',
            uf: 'CE',
            phone: '(99) 99999-9999',
            email: 'herick@gmail.com'
        },
        {
            name: 'jackson',
            address: 'Rua Grijalva Costa',
            city: 'Fortaleza',
            uf: 'CE',
            phone: '(99) 99999-9999',
            email: 'jackson@gmail.com'
        }
    ]

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
            {arr.map(item => {
                return <TableRow {...item} key={item.name} />
            })}
        </table>
    )
}

export default Table
