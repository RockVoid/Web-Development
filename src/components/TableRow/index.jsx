import ButtonIcon from "../Button"

const TableRow = ({ id, name, address, city, uf, phone, email, deleteContact, updateContact }) => {
    return (
        <tr className='table-contacts-row'>
            <td className='row-icon'>
                <span><ButtonIcon typeIcon='minus' onClick={() => deleteContact(id)} /></span>
                {/* <span><ButtonIcon typeIcon='pencil' onClick={() => updateContact()} /></span> */}
            </td>
            <td>{ name }</td>
            <td>{ address }</td>
            <td>{ city }</td>
            <td>{ uf }</td>
            <td>{ phone }</td>
            <td>{ email }</td>
        </tr>
    )
}

export default TableRow;