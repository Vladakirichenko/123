import React from "react";
import { useState, useEffect } from "react";
import './Table.css';
import {IoTrashSharp, IoPencilSharp} from 'react-icons/io5'
 
const Table = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await fetch('https://652923b655b137ddc83e429b.mockapi.io/DATA')
        const data = await response.json()

        setData(data)
    }

    const tableData = data.map(item => {
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
                    {tableData}
                </tbody>
            </table>
        </div>
    )
}

export default Table;