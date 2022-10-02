import {useState,useEffect} from 'react';
import "./Product.css";
import Card from './Card';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const axios = require('axios').default;

const ProductCard = () =>{
    const [profileData, setProfileData] = useState();
 
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
            'https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json',
        );
            setProfileData(result.data);
        };
            fetchData();
    }, []);
    const options = {
        loop: true,
        margin:30,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1100:{
                items:3
            }
        }
    }
    if(profileData !== undefined){
        return(
            <>
                <section className='hero-banner-section'>
                    <div className="banner-container">
                        <div className="product-heading">
                            <h3>Products</h3>
                        </div>
                        <div className="product-card">
                            <OwlCarousel className='owl-theme' {...options}>
                                <Card data = {profileData}/>
                            </OwlCarousel> 
                        </div>
                    </div>
                </section>
            </>
        )
    }
    
}
export default ProductCard