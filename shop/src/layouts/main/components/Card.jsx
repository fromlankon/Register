import React, { useContext, useState } from 'react';
import { BasketContext } from '../../../context/BasketContext';
import { Link } from 'react-router-dom';

export default function Card({ item }) {
    const { basket, setBasket } = useContext(BasketContext);
    const [wish, setWish] = useState(false);

    const addToBasket = (id) => {
        let basketItem = basket.find((item) => item.id === id);

        if (!basketItem) {
            let newArr = [...basket, { id, quantity: 1 }];
            setBasket(newArr);
        } else {
            let newArr = basket.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setBasket(newArr);
        }
    };

    return (
        <div id='card'>
            <Link className="image" to={`${item.id}`}>
                <img src={item.image} alt={item.title} />
            </Link>
            <div className="cartBottom">
                <Link className='title' to={`${item.id}`}>
                    {item.title.split(' ').slice(0, 5).join(' ')}
                </Link>
                <div className="price">
                    <div className="prices">
                        <p>${item.price}</p>
                        <p className="oldPrice">${parseFloat(item.price + 10).toFixed(1)}</p>
                    </div>
                    <div className='buttons'>
                        <button className='addWish' onClick={() => setWish(!wish)}>
                            <i className={`bi ${wish ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                        </button>
                        <button className="addBasket" onClick={() => addToBasket(item.id)}>
                            <i className="bi bi-cart3"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
