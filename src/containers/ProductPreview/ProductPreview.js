import './ProductPreview.css';
import logo from '../../assets/logoWhite.png'
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem';
import DATA from '../../DATA'


const  ProductPreview = () => {
    const cardItem = DATA.map((item) => {
        return (
        <ProductCardItem
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
