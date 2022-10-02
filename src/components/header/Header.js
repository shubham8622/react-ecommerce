import "./Head.css";
import user from '../../images/Vector3.png';
import search from '../../images/Vector4.png'
import cart from '../../images/Vector5.png'
import whishlist from '../../images/Vector6.png'
import { useSelector } from "react-redux";
const Header = () =>{
    const count = useSelector((state) => state.items);
    return(
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="logo-navigation">
                            <div className="header-logo">
                                <h3>AccioJob</h3>
                            </div>
                            <div className="header-navigation">
                                <ul className = "nav-left">
                                    <li className="nav-items"><a href="http://localhost:3000" className="nav-links">Home</a></li>
                                    <li className="nav-items"><a href="http://localhost:3000" className="nav-links">Shop</a></li>
                                </ul>
                                <ul className="nav-right">  
                                    <li className="nav-items"><a href="http://localhost:3000" className="nav-links">About</a></li>
                                    <li className="nav-items"><a href="http://localhost:3000" className="nav-links">Blog</a></li>
                                    <li className="nav-items"><a href="http://localhost:3000" className="nav-links">Contact</a></li>
                                    <li className="nav-items"><a href="http://localhost:3000" className="nav-links">Pages</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-navigation">
                            <div className="login-register">
                                <img src={user} alt="" className="user-icon"/>
                                <div className="login-btn">
                                    <span>Login</span>
                                    <span> / </span>
                                    <span>Register</span>
                                </div>
                            </div>
                            <div className="searchicon">
                                <img src={search} alt="" />
                            </div>
                            <div className="carticon">
                                <img src={cart} alt="" />
                                <span> {count} </span>
                            </div>
                            <div className="whishlisticon">
                                <img src={whishlist} alt="" />
                                <span> 1 </span>
                            </div>
                        </div>
                        <div className="bars">
                        <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;