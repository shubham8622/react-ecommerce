import {useState,useEffect} from 'react';
import "./Product.css";
import Card from './Card';
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
    if(profileData !== undefined){
        return(
            <>
                <section>
                    <div className="banner-container">
                        <div className="product-heading">
                            <h3>Products</h3>
                        </div>
                        <div className="product-card">
                            <Card data = {profileData}/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    
}
export default ProductCard