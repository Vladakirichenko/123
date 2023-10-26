import React from "react";
import { useState, useEffect } from "react";
import './Table.css';
import {IoTrashSharp, IoPencilSharp} from 'react-icons/io5'
import { API_URL } from "../../assets/constans";
import ModalWindow from "../ModalWindow/ModalWindow";
 
const Table = () => {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    useEffect(() => {
        if (!isLoaded) {
            getData()
        }
        
    }, [isLoaded])

    const getData = async () => {
        const response = await fetch(`${API_URL}/DATA`)
        const data = await response.json()
        setData(data)
        setIsLoaded(true)
    }

    const deleteData =  async (e, id) => {
        if (deleteId) {
            await fetch(`${API_URL}/DATA/${id}`, {
                method: 'DELETE'
            }) 
            setIsLoaded(false)
            setDeleteId(null)
        }
    }


    const tableData = data.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Category}</td>
                <td>{item.Name}</td>
                <td>{item.Quantity}</td>
                <td>{item.Price}</td>
                <td><IoPencilSharp className="icon-table"/><IoTrashSharp onClick={() => setDeleteId(item.id)} className="icon-table"/></td>
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
            {deleteId ? <ModalWindow cancelWindow={() => setDeleteId(null)} deleteItem={(e) => deleteData(e, deleteId)}/> : null}
        </div>
    )
}

export default Table;