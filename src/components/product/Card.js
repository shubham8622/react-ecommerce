import { useAlert } from 'react-alert'
import star from "../../images/Star1.png";
import { useDispatch } from "react-redux";
const Card = ({ data }) => {
    const alert = useAlert()
    const dispatch = useDispatch();
    const addToCart = () =>{
      alert.success('Item added to cart');
        dispatch({type:"ADD"})
    }
  return (
    <>
        {Object.keys(data).map((key, index) => {
          return (
            <div className="card" key={index}>
              <div className="p-image">
                <img src={data[key]['productImage']} alt="" />
              </div>
              <div className="p-content">
                <p className="p-name">{data[key]['productName']}</p>
                <div className="price-rating">
                  <div className="rating-stars">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <div className="price">
                    <span>
                      <del>{data[key]['oldPrice']}/</del>-
                    </span>
                    <p>{data[key]['newPrice']}/-</p>
                  </div>
                </div>
                <div className="add-to-cart" onClick = {addToCart}>
                  <p>Add to cart</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Card;
