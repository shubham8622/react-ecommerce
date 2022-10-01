import "./Banner.css"
import girl from '../../images/technology1.png'
const Banner = () =>{
    return(
        <>
            <section className="banner">
                <div className="hero-section banner-container">
                    <div className="summer-collection">
                        <h5>Summer 2020</h5>
                        <h1>New collection</h1>
                        <h4>We know how large objects will act, but things on a small scale.</h4>
                        <div className="shop-now">
                            <a href="http://">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="circle"></div>
                <div className="banner-image">
                    <img src={girl} alt="" />
                </div>
            </section>
        </>
    )
}

export default Banner;