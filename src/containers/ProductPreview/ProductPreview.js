import './ProductPreview.css';
import { useState, useEffect } from 'react';
import logo from '../../assets/logoWhite.png';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem';
import { Navigate, useNavigate } from 'react-router-dom';
import { API_URL } from '../../assets/constans';


const  ProductPreview = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await fetch(API_URL)
        const data = await response.json()

        setData(data)
    }

    const cardItem = data.map((item) => {
        return (
            <ProductCardItem
                key = {item.id}
                showProductItem = {() => navigate(`/products-preview/${item.id}`)}
                img={item.img}
                name={item.Name}
                price={item.Price}
                quantity={item.Quantity}
            />
        )
    })
    return (
        <div className="ProductPreview">
            <a className='logo'><img src={logo}/></a>
            <div className='ProductItems-wrap'>
                {cardItem}
            </div>
        </div>
  );
}

export default ProductPreview;
