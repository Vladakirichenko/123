import './ProductsTable.css';
import logo from '../../assets/logoWhite.png'
import BtnGhost from '../../components/BtnGhost/BtnGhost';
import Table from '../../components/Table/Table';
import {IoPersonOutline, IoAdd} from 'react-icons/io5'
import { Link } from 'react-router-dom';

const  ProductsTable = () => {
  return (
    <div className="ProductsTable">
        <a><img className='logoWhite' src={logo}/></a>
        <div className='btns-wrap'>
            <Link to='/productsPreview'><BtnGhost icon={<IoPersonOutline className='icon'/>} name='Preview'/></Link>
            <BtnGhost icon={<IoAdd className='icon'/>} name='Add product'/>
        </div>
        <h1 className='table-title'>
            Products
        </h1>
        <Table/>
    </div>
  );
}

export default ProductsTable;
