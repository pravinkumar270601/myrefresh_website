import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      
      <div className="full-cart" key={props.key}>
        <div alt="Cart" class="cart-image Item-img">
          <img src={props.image1} alt="" class="Item-img-1" />
          <img src={props.image2} alt="" class="Item-img-2" />
        </div>
        <div className="item-sale-div">
        {props.sale?<p className="item-sale bg-primary text-white">sale</p>:null}
        </div>
        
        <div className="card-body">
          <a className="card-title Item-a" href="kkk">
            {props.heading}
          </a>
          <p className="card-text Item-p">
            <span className="offer-price">{props.offerprice}</span>
            <span>&nbsp;{props.RegularPrice}</span>
          </p>
          <div className="text-center">
            <button className="Item-button">{props.button}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
