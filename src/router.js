import Login from "./containers/Login/Login";
import ProductsTable from "./containers/ProductsTable/ProductsTable";
import ProductPreview from "./containers/ProductPreview/ProductPreview";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Product from "./containers/Product/Product";

const AppRouter = () => (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Link to="/login">Go To Login</Link>}/>
                <Route path="/login" element={<Login/>}/>

                <Route element={<PrivateRoute/>}>
                    <Route path="/products-table" element={<ProductsTable/>}/>
                    <Route path="/products-preview" element={<ProductPreview/>}/>
                    <Route path="/products-preview/:productId" element={<Product/>}/>
                </Route>

                <Route path="*" element={<div> 404 not found  </div>}/>
            </Routes>
        </BrowserRouter>
    </>
)

export default AppRouter;