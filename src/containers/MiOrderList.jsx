import React from 'react';
import '../styles/miOrderList';

import arrow from '@icons/flechita.svg';
import close from '@icons/icon_close.png';

const MiOrderList = () => {
    return (
        <aside class="product-detail">
            <div class="title-container">
                <img src={arrow} alt="arrow" />
                <p class="title">My order</p>
            </div>
            <div class="my-order-content">
                <div class="shopping-cart">
                    <figure>
                        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
                    </figure>
                    <p>Bike</p>
                    <p>$30,00</p>
                    <img src={close} alt="close" />
                </div>
                <button class="primary-button">
                    Checkout
                </button>
            </div>
        </aside >
    );
};

export default MiOrderList;