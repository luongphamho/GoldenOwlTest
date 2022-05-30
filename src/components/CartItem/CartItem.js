import React from 'react'
import { useDispatch } from 'react-redux';
import { ADD_ITEM, REMOVE_FROM_CART, SUB_ITEM } from '../../app/types';
import './CartItem.css'
export default function CartItem(props) {
    const { item } = props;
    const dispatch = useDispatch();

    return (
        <div className="cart__item">
            <div className="cart__item__left" style={{ backgroundColor: `${item.color}`, width: '90px', height: '90px', borderRadius: '100%' }}>
                <div className="card__item__img">
                    <img src={item.image} alt={item.name} />
                </div>
            </div>
            <div className="cart__item__right">
                <h1 className="animate__animated animate__slideInRight animate__faster animate__delay-1s">{item.name}</h1>
                <p className="animate__animated animate__slideInRight animate__fast animate__delay-1s">${item.price}</p>
                <div className="cart__item__actions">
                    <div className="cart__item__count">
                        <button className="cart__count__button" onClick={() => {
                            dispatch({
                                type: SUB_ITEM,
                                id: item.id
                            })
                        }}>
                            <img src="./assets/minus.png" alt="..." width={8} height={8} />
                        </button>
                        <span className="text-center">{item.amount}</span>
                        <button className="cart__count__button" onClick={() => {
                            dispatch({
                                type: ADD_ITEM,
                                id: item.id
                            })
                        }}>
                            <img src="./assets/plus.png" alt="..." width={8} height={8} />
                        </button>
                    </div>
                    <button className="cart__remove__button" onClick={() => {
                        dispatch({
                            type: REMOVE_FROM_CART,
                            id: item.id
                        })
                    }}>
                        <img src="./assets/trash.png" alt="..." width={16} height={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}