import ButtonIcon from "../Button"

const TableRow = ({ id, name, address, city, uf, phone, email }, minusClick, pencilClick) => {
    return (
        <tr className='table-contacts-row'>
            <td className='row-icon'>
                <span><ButtonIcon typeIcon='minus' onClick={minusClick} /></span>
                <span><ButtonIcon typeIcon='pencil' onClick={pencilClick} /></span>
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