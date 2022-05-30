import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../app/types";
import "./Product.css";

export default function Product(props) {
  const { item } = props;
  // console.log(item)
  const { cart } = useSelector((state) => state.CartReducer);
  // console.log(cart)
  const renderButton = () => {
    const index = cart.findIndex((shoe) => shoe.id === item.id);
    if (index !== -1) {
      return (
        <button className="shop__item__button__check">
          <img
            src="./assets/check.png"
            alt="..."
            width={20}
            height={20}
          />
        </button>
      );
    }
    return (
      <button
        className="shop__item__button"
        onClick={() => {
          dispatch({
            type: ADD_TO_CART,
            item: { ...item, amount: 1 },
          });
        }}
      >
        Add to cart
      </button>
    );
  };

  const dispatch = useDispatch();
  renderButton();
  return (
    <div className="shop__item">
      <div
        className="shop__item__img"
        style={{ backgroundColor: `${item.color}` }}
      >
        <img src={item.image} alt={item.name} />
      </div>
      <div className="shop__item__info">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>
      <div className="shop__item__bottom">
        <span>${item.price}</span>
        {renderButton()}
      </div>
    </div>
  );
}
