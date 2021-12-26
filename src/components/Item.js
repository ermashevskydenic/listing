import React from 'react';

function Item(props) {

    const {item} = props;
    console.log(item.title);
    let level;
    if (item.quantity < 11) {
        level = 'low';
    } else if (item.quantity > 11 && item.quantity < 21) {
        level = 'medium';
    } else if (item.quantity > 20) {
        level = 'hight';
    }
    let isGlobalCur = false;
    let currencySymbol;

    if (item.currency_code === 'USD') {
        isGlobalCur = true;
        currencySymbol = '$';
    } else if (item.currency_code === 'EUR') {
        isGlobalCur = true;
        currencySymbol = '€';
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage && item.MainImage.url_570xN} alt="Item" />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title && item.title.length > 50 ? item.title.slice(0, 50) + '…' : item.title}</p>
                <p className="item-price">{isGlobalCur ? `${currencySymbol}${Number(item.price).toFixed(2)}` : `${Number(item.price).toFixed(2)} ${item.currency_code}`}</p>
                <p className={`item-quantity level-${level}`}>{item.quantity} left</p>
            </div>
        </div>
    );

}

export default Item;