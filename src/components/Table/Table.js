import React from "react";
import './Table.css';
import DATA from '../../DATA'
import {IoTrashSharp, IoPencilSharp} from 'react-icons/io5'
 
const Table = () => {

    const data = DATA.map(item => {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.Category}</td>
                <td>{item.Name}</td>
                <td>{item.Quantity}</td>
                <td>{item.Price}</td>
                <td><IoPencilSharp className="icon-table"/> <IoTrashSharp className="icon-table"/></td>
            </tr> 
        )
    })
    return (
        <div className="table=wrap">
            <table className="table">
                <tbody>
                    <tr>
                        <th >ID</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    {data}
                </tbody>
            </table>
        </div>
    )
}

export default Table;