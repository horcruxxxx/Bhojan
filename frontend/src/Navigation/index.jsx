import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "../Components/Header";

import Home from '../Pages/Home/index';
import Register from '../Pages/Register/index';
import Login from '../Pages/Login/index';
import Menu from '../Pages/Menu/index';
import PaymentSuccess from '../Pages/PaymentSucces/index';
import Cart from '../Pages/Cart/index';


const Navigation = () =>{
    return (
        
        <Router>
            <Header/> 
            {/* because our header is going to be render for each page/screen. */}

            <Routes>
                <Route path="/"               element = {<Home/>}/>
                <Route path="/menu"           element = {<Menu/>}/>
                <Route path="/login"          element = {<Login/>}/>
                <Route path="/register"       element = {<Register/>}/>
                <Route path="/cart"           element = {<Cart/>}/>
                <Route path="paymentSuccess"  element = {<PaymentSuccess/>}/>
            </Routes>
        </Router>
    )
};

export default Navigation;