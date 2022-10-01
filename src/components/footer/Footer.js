import { useAlert } from 'react-alert'
import {useState} from 'react';
import twitter from '../../images/Vector.png';
import instagram from '../../images/Vector1.png';
import facebook from '../../images/Vector2.png';
import './Footer.css';
import FooterMenu from './FooterMenu';
import * as EmailValidator from 'email-validator';
const Footer = () =>{
    const [userEmail,setUserEmail] = useState({email:""});
    const alert = useAlert()
    const handleInput = (event) =>{
        let name = event.target.name;
        let value = event.target.value; 

        setUserEmail({...userEmail,[name]:value});
    }
    const formSubmission = async (event) =>{
        event.preventDefault();
        let validEmail = EmailValidator.validate(userEmail.email);
        if(!validEmail){
            alert.error('Email is not valid');
        }else{
        let apires = await fetch(
                    "https://react-newsletter-27586-default-rtdb.firebaseio.com/newsletter.json",
                    {
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify(userEmail)
                    }
                );
            if(apires){
                setUserEmail({email:""});
                alert.success("We will contact you soon.");
            }
        }
    }
    let allFooterMenu = [
        {
            title:"Company Info",
            menus:["About us","Carrier","we are hiring","Blog"],
        },
        {
            title:"Legal",
            menus:["About us","Carrier","we are hiring","Blog"],
        },
        {
            title:"Features",
            menus:["Business Marketing","User Analytic","Live Chat","Unlimited Support"],
        },
        {
            title:"Resources",
            menus:["IOS & Andriod","Watch a Demo","Customers","API"],
        }
    ]
    return(
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="logo-social-icons">
                            <div className="footer-logo">
                                <h3>AccioJob</h3>
                            </div>
                            <div className="social-icons">
                                <img src={facebook} alt="" />
                                <img src={instagram} alt="" />
                                <img src={twitter} alt="" />
                            </div>
                        </div>
                        <div className="footer-menu">
                            {
                                allFooterMenu.map((allMenus,index)=>{
                                    return(
                                        <FooterMenu menuData = {allMenus} key={index} />
                                    )
                                })
                            }
                            <div className="footerMenuCmp signup-email">
                                <div className="f-menu">
                                    <h5>Get In Touch</h5>
                                </div>
                                <div className="email">
                                    <form onSubmit = {formSubmission} className="form">
                                        <input type="text" name="email" value={userEmail.email} onChange={handleInput} placeholder="Your email"/>
                                        <input type="submit" value="Subscribe" />
                                    </form>
                                    <p>Lorem impsum dolor amit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="made-by-accio">
                    <div className="footer-content">
                        <p>Made With ❤️ at Acciojob</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;