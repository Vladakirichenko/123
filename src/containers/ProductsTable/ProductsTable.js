import './ProductsTable.css';
import logo from '../../assets/logoWhite.png'
import BtnGhost from '../../components/BtnGhost/BtnGhost';
import Table from '../../components/Table/Table';
import {IoPersonOutline, IoAdd} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { API_URL } from "../../assets/constans";
import { useState, useEffect } from 'react';

const  ProductsTable = () => {
  const [action, setAction] = useState(false)
  const [isLoaded, setIsLoaded] = useState(true)
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
    Category: '',
    Name: '',
    Quantity: '',
    Price: ''
})

const handleCahnge = (event) => {
  const {name, value} = event.target
  setFormData({
    ...formData,
    [name] : value
  })
}

const addData = async (e) => {
  e.preventDefault()
  await fetch(`${API_URL}/DATA`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(formData)
  })
  setAction(false)
  setIsLoaded(false)
  setFormData('')
  getData()
}

const getData = async () => {
  const response = await fetch(`${API_URL}/DATA`)
  const data = await response.json()
  setData(data)
  setIsLoaded(true)
}

  return (
    <div className="ProductsTable">
        <a><img className='logoWhite' src={logo}/></a>
        <div className='btns-wrap'>
            <Link to='/products-preview'><BtnGhost icon={<IoPersonOutline className='icon'/>} name='Preview'/></Link>
            <BtnGhost action={() => setAction(true)}  icon={<IoAdd className='icon'/>} name='Add product'/>
        </div>
        <h1 className='table-title'>
            Products
        </h1>
        <Table upDate={isLoaded}/>
        {action ? <Form name='Add product' nameBtn='Add' onChangeInput={handleCahnge} addData={addData} formData={formData} close={() => setAction(false)}/> : null}
    </div>
  );
}

export default ProductsTable;
