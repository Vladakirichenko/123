import './ProductCardInfo.css'
import { FaLongArrowAltLeft, FaGetPocket } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useParams,useNavigate } from "react-router-dom"

const ProductCardInfo = props => {
    let { productId } = useParams()
    let navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await fetch('https://'+`652923b655b137ddc83e429b.mockapi.io/DATA/${productId}`.replace(':', ''))
        const res = await response.json()

        setData(res)
        
    }

    return (
        <div className="container">
            <div className="title-wrap">
                <FaLongArrowAltLeft onClick={() => navigate(-1)} className='arrow'/><h2>{data.Name}</h2>
            </div>
            <div className="img-wrap"> 
                <img className='imgLaptop' src={data.img}/>
                <div className="price-wrap">
                    <span className='inStok'><FaGetPocket />Є в наявності</span>
                    <span className="price">{data.Price}₴</span>
                    <small>Quantity: {data.Quantity}</small>
                </div>
            </div>
            <div className="info-wrap">
                <p><strong>Опис:</strong> <span className="info">{data.Name} </span></p>

                <p className='discription-info'>{data.Display}</p>
                <p className='discription-info'>{data.Dinamics}</p>
                <p className='discription-info'>{data.Audio}</p>
            </div>
        </div>
    )
}

export default ProductCardInfo;