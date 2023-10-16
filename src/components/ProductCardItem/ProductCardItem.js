import './ProductCardItem.css';
import {IoCart} from 'react-icons/io5';

const  ProductCardItem = ({img, name, price, quantity}) => {
  return (
    <div className="ProductCardItem">
        <img className='imgLap' src={img}/>
        <h3>{name}</h3>
        <div className='price-wrap'>
            <span>{price}₴</span>
            <small>Кількість: {quantity}</small>
        </div>
        <a className='cartBtn'> <IoCart className='cartIcon'/>Готовий до відправки</a>
    </div>
  );
}

export default ProductCardItem;