import './Product.css'
import logo from '../../assets/logoWhite.png'
import ProductCardInfo from "../../components/ProductCardInfo/ProductCardInfo"

const Product = props => {
    return (
        <>
            <div className="logo-wrap">
                <img src={logo}/>
            </div>
            <ProductCardInfo/>
        </>
    )
}

export default Product
