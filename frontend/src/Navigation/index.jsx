import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "../Components/Header";
// import Banner from '../Components/Banner';
// import About from "../Components/About";

import Home from '../Pages/Home/index';
import Register from '../Pages/Register/index';
import Login from '../Pages/Login/index';
import Menu from '../Pages/Menu/index';
import PaymentSuccess from '../Pages/PaymentSucces/index';
import Cart from '../Pages/Cart/index';
// import About from '../Pages/About/index';

const Navigation = () =>{
    return (
        
        <Router>
            <Header/> 
            {/* because our header is going to be render for each page/screen. */}

            <Routes>
                <Route path="/"               element = {<Home/>}/>
                {/* <Route path="/about"          element = {<About/>}/> */}
                <Route path="/menu"           element = {<Menu/>}/>
                <Route path="/login"          element = {<Login/>}/>
                <Route path="/register"       element = {<Register/>}/>
                <Route path="/cart"           element = {<Cart/>}/>
                <Route path="paymentSuccess"  element = {<PaymentSuccess/>}/>
            </Routes>
            {/* <Banner/> */}
            {/* <About/> */}
        </Router>
    )
};

export default Navigation;